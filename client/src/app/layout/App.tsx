import "./styles.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container } from "@mui/system";
import { useState } from "react";

function App() {
const [darkMode,setDarkMode]=useState(false)
const paletteType=darkMode?'dark':'light'
const tema=createTheme({
    palette:{mode:paletteType,
      background:{default:paletteType==='light'? '#eaeaea':'#121212'}
    }
  })

const handleClick=()=>{
setDarkMode(!darkMode);
}

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline></CssBaseline>
      {/* <NavBar></NavBar> */}
      <Header darkMode={darkMode} changeMode={handleClick}></Header>
      <Container>
        <Catalog />
        {/* <input onChange={handleChange} type="text" id="inputum"></input> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
