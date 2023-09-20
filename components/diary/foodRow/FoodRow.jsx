"use client";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Row } from "./FoodRow.styled";

//custom hooks
import useDay from "@/hooks/useDay";

const FoodRow = ({ product_info, date, isPastDate }) => {
  const { useDeleteDay: deleteProduct } = useDay();

  const onClickHandler = () => {
    deleteProduct({
      product_id: product_info.product_id,
      date,
    });
  };

  return (
    <Row>
      <Box sx={{ flexGrow: "8" }}>
        <Typography variant="h6" component="p">
          {product_info.title}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <Typography variant="h6" component="p">
          {product_info.weight} g
        </Typography>
      </Box>
      <Box sx={{ flexGrow: "2" }}>
        <Typography variant="h6" component="p">
          {product_info.calories} kcal
        </Typography>
      </Box>
      {isPastDate && (
        <Box
          sx={{
            flexGrow: "1",
            borderBottom: "none !important",
            "&:hover": { cursor: "pointer" },
          }}
        >
          <DeleteIcon onClick={onClickHandler} />
        </Box>
      )}
    </Row>
  );
};

export default FoodRow;
