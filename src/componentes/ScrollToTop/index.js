import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// esse componente faz com que toda vez que o pathname é alterado, ou seja, a rota(url) muda
// ele scrolla para o top da página

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
