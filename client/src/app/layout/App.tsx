import "./styles.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../errors/NotFound";
import AboutPage from "../../features/about/AboutPage";
import HomePage from "../../features/home/HomePage";
import ContactPage from "../../features/contact/ContactPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import ServerError from "../errors/ServerError";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const tema = createTheme({
    palette: {
      mode: paletteType,
      background: { default: paletteType === "light" ? "#eaeaea" : "#121212" },
    },
  });

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={tema}>
      <ToastContainer position='bottom-right' hideProgressBar></ToastContainer>
      <CssBaseline></CssBaseline>
      {/* <NavBar></NavBar> */}
      <Header darkMode={darkMode} changeMode={handleClick}></Header>
      <Container>
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/catalog/:id" element={<ProductDetails />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/server-error" element={<ServerError />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          {/*bir parametre gönderilecekse route pathe iki nokta ile bildirmek gerekiyor. */}
          {/* <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />}></Route>         */}
        </Routes>    
      </Container>
    </ThemeProvider>
  );
}

export default App;
