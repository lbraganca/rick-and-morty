import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import theme from "./themes/main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Characters />} />
            <Route path="/details/:id" element={<Character />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
