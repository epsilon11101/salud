import FormWeight from "@/components/form/FormWeight";
import { Box } from "@mui/material";
import "normalize.css/normalize.css";

export default function Home() {
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
      <FormWeight />
    </Box>
  );
}
