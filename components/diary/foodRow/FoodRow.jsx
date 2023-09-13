import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Row } from "./FoodRow.styled";

const FoodRow = ({ food, grams, kcal }) => {
  return (
    <Row>
      <Box sx={{ flexGrow: "8" }}>
        <Typography variant="h6" component="p">
          {food}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <Typography variant="h6" component="p">
          {grams} g
        </Typography>
      </Box>
      <Box sx={{ flexGrow: "2" }}>
        <Typography variant="h6" component="p">
          {kcal} kcal
        </Typography>
      </Box>
      <Box sx={{ flexGrow: "1", borderBottom: "none !important" }}>
        <DeleteIcon />
      </Box>
    </Row>
  );
};

export default FoodRow;
