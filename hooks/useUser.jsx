import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// OPERATIONS
import {
  signUp,
  logIn,
  logOut,
  getDailyRate,
  updateDailyRate,
} from "@/store/UserData/userData.operations";

// SELECTORS
import {
  getUserData,
  getUserNotAllowedProducts,
  getUser,
  getIsAuth,
  getToken,
  getLoading,
  getError,
} from "@/store/UserData/userData.selectors";

export const useUser = () => {
  const [userData, setUserData] = useState({});
  const userDataSelector = useSelector(getUserData);
  const notAllowedProducts = useSelector(getUserNotAllowedProducts);
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const loadingSelector = useSelector(getLoading);
  const [loading, setLoading] = useState(false);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const isAuthSelector = useSelector(getIsAuth);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    //si es undefined o null no hace nada
    if (loadingSelector === undefined || loadingSelector === null) return;
    setLoading(loadingSelector);
  }, [loadingSelector]);

  useEffect(() => {
    if (!userDataSelector) return;

    setUserData(userDataSelector);
  }, [userDataSelector]);

  useEffect(() => {
    if (!isAuthSelector) return;

    setIsAuth(isAuthSelector);
  }, [isAuthSelector]);

  const useDailyRate = async (data) => {
    await dispatch(getDailyRate(data));
  };

  const useUpdateDailyRate = (data) => {
    return new Promise((resolve, reject) => {
      dispatch(updateDailyRate(data))
        .then((result) => {
          // Si la acción se completó correctamente, resolvemos la promesa con el resultado
          resolve(result);
        })
        .catch((error) => {
          // Si la acción falló, rechazamos la promesa con el error
          reject(error);
        });
    });
  };

  const useSignUp = (data) => {
    dispatch(signUp(data));
  };

  const useLogIn = (data) => {
    dispatch(logIn(data));
  };

  const useLogOut = async () => {
    return new Promise((resolve, reject) => {
      dispatch(logOut())
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    userData,
    notAllowedProducts,
    user,
    isAuth,
    token,
    loading,
    error,
    useSignUp,
    useDailyRate,
    useUpdateDailyRate,
    useLogIn,
    useLogOut,
  };
};
