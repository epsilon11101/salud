import FormWeight from "@/components/form/FormWeight";
import { Box } from "@mui/material";
import "normalize.css/normalize.css";

export default function Home() {
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
      <FormWeight />
    </Box>
  );
}
