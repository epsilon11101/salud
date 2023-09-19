import FormWeight from "@/components/form/FormWeight";
import { Box } from "@mui/material";
import "normalize.css/normalize.css";
import { MainContainer } from "@/components/ui/MainContainer/MainContainer.styled";
import ConfettiComponent from "@/components/ui/confetti/ConfettiComponent";

export default function Home() {
  return (
    <Box component="section" sx={MainContainer}>
      <FormWeight />
    </Box>
  );
}
