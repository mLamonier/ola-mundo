import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";

// quando temos um App.js com rotas, é normal renomear para "routes.js" e o componente para "AppRoutes"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          {/*           
            quando colocamos o seletor coringa --->  :
            o nome que vier após ele, será um objeto JS, que podemos usá-lo com o hook useParams() do react-router-dom
            isso é rota dinâmica
          */}
        </Route>

        <Route path="posts/:id" element={<Post />} />

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

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
