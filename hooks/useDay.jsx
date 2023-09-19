import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// DAY OPERATIONS
import { getDay, postDay, deleteDay } from "@/store/DayData/dayData.operations";
// DAY SELECTORS
import {
  getDay as getDaySelector,
  getDate,
  getDaily,
  getProducts,
  getLoading,
  getError,
} from "@/store/DayData/dayData.selectors";

//DAY ACTIONS
import { dayActions } from "@/store/DayData/dayData.slice";

export const useDay = () => {
  const [date, setDate] = useState("");
  const [daily, setDaily] = useState({});
  const [day, setDay] = useState({});
  const daySelector = useSelector(getDaySelector);
  const dateSelector = useSelector(getDate);
  const dailySelector = useSelector(getDaily);
  const [products, setProducts] = useState([]);
  const productsSelector = useSelector(getProducts);

  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const useGetDay = (data) => {
    dispatch(getDay(data));
  };

  const useGetDayPromises = async (data) => {
    return new Promise((resolve, reject) => {
      dispatch(getDay(data))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const usePostDay = async (data) => {
    await dispatch(postDay(data));
  };

  const useAddProduct = (data) => {
    dispatch(dayActions.addProduct(data));
  };
  const usePostDayPromises = async (data) => {
    return new Promise((resolve, reject) => {
      dispatch(postDay(data))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const useDeleteDay = (data) => {
    dispatch(deleteDay(data));
  };

  const useRestoreDay = () => {
    dispatch(dayActions.restoreDay());
  };

  const useUpdateDay = (data) => {
    dispatch(dayActions.updateDay(data));
  };

  useEffect(() => {
    if (!daySelector) return;
    setDay(daySelector);
  }, [daySelector]);

  useEffect(() => {
    if (!dailySelector) return;
    setDaily(dailySelector);
  }, [dailySelector]);

  useEffect(() => {
    if (!dateSelector) return;
    setDate(new Date(dateSelector).toISOString().slice(0, 10));
  }, [dateSelector]);

  useEffect(() => {
    if (!productsSelector) return;
    setProducts(productsSelector);
  }, [productsSelector]);

  return {
    day,
    date,
    daily,
    products,
    loading,
    error,
    useGetDay,
    useGetDayPromises,
    useUpdateDay,
    usePostDay,
    usePostDayPromises,
    useDeleteDay,
    useAddProduct,
    useRestoreDay,
  };
};

export default useDay;
