import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrada() {
  // hook do react-router-dom, usado para navegações de página já existentes no site
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        {/* 
          na propriedade onClick, passamos a função navegar que está armazenando o hook useNavigate do react-router-dom
          passamos para essa função uma barra "/" ----> vai voltar a página de início (home)
          ou se passarmos "-1" ----> vai retornar a página acessada anteriormente pelo usuário (mesma função da seta retornar do browser)
         */}
        <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
          <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="cachorro de óculos e vestido como humano"
        />
      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
