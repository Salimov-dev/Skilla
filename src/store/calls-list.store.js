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
  const dateStart = "2023-06-09";
  const dateEnd = "2023-06-12";
  const inOut = "";

  dispatch(callsListRequested);
  try {
    const data = await axios.post(
      `${getCallsEndPoint}?date_start=${dateStart}&date_end=${dateEnd}&in_out=${inOut}`
    );
    dispatch(callsListReceived(data.data.results));
  } catch (error) {
    dispatch(callsListFailed(error));
  }
};

export const getCallsList = () => (state) => state.calls.entities;

export default callsListReducer;
