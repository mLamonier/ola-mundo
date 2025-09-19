import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

// quando temos um App.js com rotas, é normal renomear para "routes.js" e o componente para "AppRoutes"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        {/* 
          O que foi feito acima se chama rotas aninhadas, que cria rotas "filhos" e rota "pai"
          
          Na rota index, ou "/", a estrutura a ser renderiza é:

          <PaginaPadrao>
            <Inicio />
          <PaginaPadrao/>

          Na rota "sobremim", ou "/sobremim", a estrutura a ser renderiza é:

          <PaginaPadrao>
            <SobreMim />
          <PaginaPadrao/>
        */}

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
