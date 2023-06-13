import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCallsList } from "../store/calls-list.store";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCallsList());
  }, []);

  return children;
};

export default AppLoader;
