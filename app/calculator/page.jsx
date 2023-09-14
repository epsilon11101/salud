import { Box } from "@mui/material";
import FormWeight from "@/components/form/FormWeight";
import Report from "@/components/diary/report/Report";
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
      <FormWeight islogin={true} />
      <Report />
    </Box>
  );
};

export default page;
