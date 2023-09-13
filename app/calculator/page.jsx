import { Box } from "@mui/material";
import FormWeight from "@/components/form/FormWeight";
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
      <FormWeight isLogin={true} />
    </Box>
  );
};

export default page;
