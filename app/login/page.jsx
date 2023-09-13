import LogForm from "@/components/form/LogForm";
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
      }}
    >
      <LogForm title="iniciar sesión" isLogin />
    </Box>
  );
};

export default page;
