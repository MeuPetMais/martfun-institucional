import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ContentPolicy from "./pages/ContentPolicy";
import Reports from "./pages/Reports";
export default function App(){
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/termos" element={<Terms/>}/>
    <Route path="/privacidade" element={<Privacy/>}/>
    <Route path="/politica-de-conteudo" element={<ContentPolicy/>}/>
    <Route path="/denuncias" element={<Reports/>}/>
  </Routes>
}
