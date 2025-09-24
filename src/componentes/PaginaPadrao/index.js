import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao({ children }) {
  return (
    <main>
      <Banner />

      {/* 
                Para rotas aninhadas, deve-se usar o componente do react-router-dom chamada Outlet,
                com ele é possível exibir o conteúdo das rotas filhos se for dinâmica baseado na URL,
                é como uma condicional baseada na propriedade path

                Passamos a prop children embaixo do componente Outlet
                pois assim aproveitamos o layout do componente PaginaPadrao para aplicar em varias partes do codigo
                e só muda o que vai dentro dele como children
             */}
      <Outlet />
      {children}
    </main>
  );
}
