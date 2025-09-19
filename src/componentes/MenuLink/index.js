import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  // este é um hook do react-router-dom usado para retornar a localização da barra de endereço atual
  // retorna um objeto, parecido com o comando em JS: window.location()
  // const localizacao = useLocation();

  return (
    //o NavLink já nos dá o status 'ativo', sem precisar do useLocation
    //diferente do componente Link, aqui precisamos passar uma função que retorna uma string (template string)
    //ele contém um prop chamada isActive, ou seja, "se o link estiver ativo", retorna true
    //se o link não estiver ativo, ou seja, se estiver na home inicial, não executa
    //mas quando estiver na home inicial pode aparecer mais de 1 link, por conta da página "/sobremim" conter "/" também
    //para resolver isso colocamos a propriedade end para garantir que esse comportamento não aconteça
    <NavLink
      className={({ isActive }) => `
                ${styles.link} 
                ${isActive ? styles.linkDestacado : ""} 
            `}
      to={to}
      end>
      {children}
    </NavLink>

    // este componente Link já existe dentro do react-router-dom
    // ele substitiu a tag <a>, pois assim impede de ela recarregar a página quando clicar em um link
    // <Link className={`
    //         ${styles.link}
    //         ${localizacao.pathname === to ? styles.linkDestacado : ""}
    //     `} to={to}> {/* to é igual a pathname do location */}
    //     {children}
    // </Link>
  );
}
