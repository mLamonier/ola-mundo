import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            
            {/* 
                Para rotas aninhadas, deve-se usar o componente do react-router-dom chamada Outlet,
                com ele é possível exibir o conteúdo das rotas filhos se for dinâmica baseado na URL,
                é como uma condicional baseada na propriedade path
             */}
            <Outlet />
        </main>
    )
}