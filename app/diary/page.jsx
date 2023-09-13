import Diary from "@/components/diary/Diary";
import { Box } from "@mui/material";
const page = () => {
  return (
    <Box
      component="section"
      width="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "32px",
        gap: "32px",
      }}
    >
      <Diary />
    </Box>
  );
};

export default page;
