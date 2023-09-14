import Diary from "@/components/diary/Diary";
import { Box } from "@mui/material";
const page = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "32px",
        marginTop: "32px",
      }}
    >
      <Diary />
    </Box>
  );
};

export default page;
