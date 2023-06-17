import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const loadCallsList = () => async (dispatch) => {
  const getCallsEndPoint = "https://api.skilla.ru/mango/getList";
  const dateStart = "2023-06-16";
  const dateEnd = "2023-06-17";

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

    setTimeout(() => {
      dispatch(callsListReceived(result));
    }, 100);
  } catch (error) {
    dispatch(callsListFailed(error));
  }
};

export const getCallsList = () => (state) => state.calls.entities;
export const getCallsStatus = () => (state) => state.calls.isLoading;

export default callsListReducer;
