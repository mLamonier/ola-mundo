import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"; //aqui o arquivo svg foi transformado em um componente, só funciona com .SVG

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Miguel
    </footer>
  );
}
