import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dayjs from "dayjs";

const callsListSlice = createSlice({
  name: "calls",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    callsListRequested: (state) => {
      state.isLoading = true;
    },
    callsListReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    callsListFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: callsListReducer, actions } = callsListSlice;
const { callsListRequested, callsListReceived, callsListFailed } = actions;

axios.interceptors.request.use(
  function (config) {
    const testtoken = "testtoken";

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${testtoken}`,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const loadCallsList = (data) => async (dispatch) => {
  // console.log("data loadCallsList", typeof data);
  const getCallsEndPoint = "https://api.skilla.ru/mango/getList";

  const dayToday = dayjs().format("YYYY-MM-DD");
  const dayYesterday = dayjs().add(-1, "day").format("YYYY-MM-DD");
  const threeDays = dayjs().add(-3, "day").format("YYYY-MM-DD"); // range === 3
  const oneWeek = dayjs().add(-1, "week").format("YYYY-MM-DD"); // range === 7
  const oneMonth = dayjs().add(-1, "month").format("YYYY-MM-DD"); // range === 1
  const oneYear = dayjs().add(-1, "year").format("YYYY-MM-DD"); // range === 12

  let dateStart = dayYesterday;
  let dateEnd = dayToday;

  if (data === undefined) dateStart;
  if (data === 3) dateStart = threeDays;
  if (data === 7) dateStart = oneWeek;
  if (data === 1) dateStart = oneMonth;
  if (data === 12) dateStart = oneYear;

  dispatch(callsListRequested);
  try {
    const data = await axios.post(
      `${getCallsEndPoint}?date_start=${dateStart}&date_end=${dateEnd}`
    );

    const random = () => {
      let rand = 1 - 0.5 + Math.random() * (2 - 0 + 1);
      return Math.round(rand);
    };
    const randomGrade = (time) => {
      return time === 0 ? 0 : random();
    };
    let result = data.data.results;
    for (let key of result) {
      key.grade = randomGrade(key.time);
    }

    // console.log("result", result);
    dispatch(callsListReceived(result));
  } catch (error) {
    dispatch(callsListFailed(error));
  }
};

export const getCallsList = () => (state) => state.calls.entities;
export const getCallsStatus = () => (state) => state.calls.isLoading;

export default callsListReducer;
