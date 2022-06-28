import { Container, Typography, Paper, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography variant="h2">
        Oooopss! Aradığınız sayfa bulunamadı.
      </Typography>
      <Divider></Divider>
      <Button fullWidth component={Link} to="/catalog">
        Ürün sayfasına geri dönmek için tıklayınız
      </Button>
    </Container>
  );
}
