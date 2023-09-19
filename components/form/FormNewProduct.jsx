"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { get, set, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { TextFielContainer, TextFieldStyled } from "./FormWeight.styled";
import { ButtonContainer, FormContainer } from "./LogForm.styled";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
// custom hooks
import { useProducts } from "@/hooks/useProducts";
import { useDay } from "@/hooks/useDay";
import { dayActions } from "@/store/DayData/dayData.slice";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

const FormNewProduct = () => {
  const { products, useGetProducts: searchProducts } = useProducts();
  const {
    day,
    products: dayProducts,
    usePostDayPromises: addProducts,
    useAddProduct: addNewProduct,
  } = useDay();
  const router = useRouter();
  const [isEnableToSend, SetIsEnableToSend] = useState(false);
  const [allProducts, setAllProducts] = useState([
    {
      title: "Selecciona un producto",
      weight: 0,
      id: "",
      kcal: 0,
    },
  ]);
  const [selectedProduct, setSelectedProduct] = useState({
    title: "Selecciona un producto",
    weight: 0,
    id: "",
    kcal: 0,
  });
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm(
    {
      defaultValues: {
        product: "Selecciona un producto",
        grams: "",
      },
    },
    { mode: "onChange" }
  );

  useEffect(() => {
    if (watch("product").length <= 0) {
      setAllProducts([]);
      return;
    }
    searchProducts(watch("product"));

    const list_products = products.map((product) => {
      return {
        title: product.title,
        weight: product.weight,
        product_id: product._id,
        kcal: product.calories,
      };
    });

    setAllProducts(list_products);
  }, [watch("product")]);

  useEffect(() => {
    const product_name = watch("product");
    const grams = watch("grams");
    SetIsEnableToSend(product_name !== "" && grams !== "");
  }, [watch("product"), watch("grams")]);

  const onSubmit = async (data) => {
    // addNewProduct(selectedProduct);
    const body = {
      date: dayjs().format("YYYY-MM-DD"),
      products: [
        {
          ...selectedProduct,
          weight: +data.grams,
        },
      ],
    };
    await addProducts(body);

    router.push(`/diary`, { shallow: true });
  };

  const onRedirectHandler = () => {
    if (!isEnableToSend) {
      router.push(`/diary`, { shallow: true });
    }
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextFielContainer>
        <Autocomplete
          id="product"
          options={allProducts}
          getOptionLabel={(option) => option?.title || ""}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          onChange={(event, newValue) => {
            setSelectedProduct(newValue);
          }}
          renderInput={(params) => (
            <TextFieldStyled
              {...params}
              label="Productos"
              placeholder="Ingresa el nombre del producto"
              variant="standard"
              {...register("product", {
                required: true,
              })}
            />
          )}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.title, inputValue, {
              insideWords: true,
            });
            const parts = parse(option.title, matches);

            return (
              <li {...props} key={nanoid()}>
                <div>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </li>
            );
          }}
        />
        {errors.product && <span>Nombre del producto requerido</span>}
      </TextFielContainer>
      <TextFielContainer>
        <TextFieldStyled
          id="grams"
          label="Gramos"
          variant="standard"
          type="number"
          {...register("grams", {
            required: {
              value: true,
              message: "Gramos requeridos",
            },
            min: {
              value: 1,
              message: "El valor mínimo es 1",
            },
            max: {
              value: 10000,
              message: "El valor máximo es 10000",
            },
          })}
        />
        {errors.grams && <span>{errors.grams.message}</span>}
      </TextFielContainer>
      <ButtonContainer
        sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          type={isEnableToSend ? "submit" : "button"}
          onClick={onRedirectHandler}
        >
          {isEnableToSend ? "Add" : "Cancel"}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default FormNewProduct;
