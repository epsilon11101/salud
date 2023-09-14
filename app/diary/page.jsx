import Diary from "@/components/diary/Diary";
import { Box } from "@mui/material";
import { MainContainer } from "@/components/ui/MainContainer/MainContainer.styled";
const page = () => {
  return (
    <Box component="section" sx={MainContainer}>
      <Diary />
    </Box>
  );
};

export default page;
