import { useDispatch, useSelector } from "react-redux";

// OPERATIONS
import { getProducts } from "@/store/ProductData/productData.operations";
// SELECTORS
import {
  getProducts as getProductsSelector,
  getLoading,
  getError,
} from "@/store/ProductData/productData.selectors";

export const useProducts = () => {
  const products = useSelector(getProductsSelector);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const useGetProducts = (searchTerm) => {
    dispatch(getProducts(searchTerm));
  };

  return {
    products,
    loading,
    error,
    useGetProducts,
  };
};
