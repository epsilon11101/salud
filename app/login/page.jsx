import LogForm from "@/components/form/LogForm";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "32px",
        width: "100% -32px",
        paddingLeft: "32px",
      }}
    >
      <LogForm title="iniciar sesión" isLogin={true} />
    </Box>
  );
};

export default page;
