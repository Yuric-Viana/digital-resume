import gitColaboration from "../assets/certificates/gitColaboration.png";
import jsVariables from "../assets/certificates/jsVariables.png";
import jsLocalStorage from "../assets/certificates/jsLocalStorage.png";
import jsAsync from "../assets/certificates/jsAsync.png";
import jsArray from "../assets/certificates/jsArray.png";
import logicaJsListas from "../assets/certificates/logicaJsListas.png";
import figma from "../assets/certificates/figma.png";
import htmlAmbientes from "../assets/certificates/htmlAmbientes.png";
import htmlCssFlexbox from "../assets/certificates/htmlCssFlexbox.png";
import jsDOM from "../assets/certificates/jsDOM.png";
import jsDinamicas from "../assets/certificates/jsDinamicas.png";
import htmlMobileFirst from "../assets/certificates/htmlMobileFirst.png";
import htmlCssResponsividade from "../assets/certificates/htmlCssResponsividade.png"
import htmlCssCabecalhoFooter from "../assets/certificates/htmlCssCabecalhoFooter.png"

import type { CertificateImageKey } from "../assets/certificates/certificateImages";

export interface CertificateItem {
  id: CertificateImageKey;
  name: string;
  data: string;
  title: string;
  image: string;
}

export const allCertificates: CertificateItem[] = [
  {
    id: "gitColaboration",
    name: "Git e GitHub",
    data: "Alura - Abril 2025",
    title: "compartilhando e colaborando em projetos",
    image: gitColaboration,
  },

  {
    id: "htmlCssResponsividade",
    name: "HTML e CSS",
    data: "Alura - Março 2025",
    title: "trabalhando com responsividade e publicação de projetos",
    image: htmlCssResponsividade
  },

  {
    id: "htmlCssCabecalhoFooter",
    name: "HTML e CSS",
    data: "Alura - Março 2025",
    title: "cabeçalho, footer e variáveis CSS",
    image: htmlCssCabecalhoFooter
  },

  {
    id: "jsVariables",
    name: "JavaScript",
    data: "Alura - Maio 2025",
    title: "utilizando tipos, variáveis e funções",
    image: jsVariables,
  },

  {
    id: "logicaJsListas",
    name: "Lógica de programação",
    data: "Alura - Abril 2025",
    title: "Lógica de programação: explore funções e listas",
    image: logicaJsListas,
  },

  {
    id: "jsDOM",
    name: "JavaScript",
    data: "Alura - Maio 2025",
    title: "manipulando elementos no DOM",
    image: jsDOM,
  },

  {
    id: "jsAsync",
    name: "JavaScript",
    data: "Alura - Maio 2025",
    title: "entendendo promises e async/await",
    image: jsAsync,
  },

  {
    id: "jsLocalStorage",
    name: "JavaScript",
    data: "Alura - Maio 2025",
    title: "explorando a manipulação de elementos e da localStorage",
    image: jsLocalStorage,
  },

  {
    id: "jsDinamicas",
    name: "JavaScript",
    data: "Alura - Abril 2025",
    title: "construindo páginas dinâmicas",
    image: jsDinamicas,
  },

  {
    id: "jsArray",
    name: "JavaScript",
    data: "Alura - Abril 2025",
    title: "métodos de array",
    image: jsArray,
  },

  {
    id: "htmlAmbientes",
    name: "HTML e CSS",
    data: "Alura - Março 2025",
    title: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
    image: htmlAmbientes,
  },

  {
    id: "htmlMobileFirst",
    name: "HTML e CSS",
    data: "Alura - Março 2025",
    title: "HTML e CSS: responsividade com mobile-first",
    image: htmlMobileFirst,
  },

  {
    id: "htmlCssFlexbox",
    name: "HTML e CSS",
    data: "Alura - Março 2025",
    title: "HTML e CSS: Classes, posicionamento e Flexbox",
    image: htmlCssFlexbox,
  },

  {
    id: "figma",
    name: "Figma",
    data: "Alura - Abril 2025",
    title: "Figma: conhecendo a ferramenta",
    image: figma,
  },
];