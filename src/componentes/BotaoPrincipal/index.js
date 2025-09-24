import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal({ children, tamanho }) {
  return (
    <button
      // aqui nas classe, se caso a prop tamanho não for especificada, ele não chama a classe adicional que foi criada "lg"
      //caso tenha valor e o valor seja "lg" ele aplica o estilo
      //isso é "componentizar" os estilos

      className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
      `}>
      {children}
    </button>
  );
}
