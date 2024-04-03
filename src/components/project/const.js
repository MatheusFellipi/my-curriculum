import video from "@/assets/svg/video-svgrepo-com.svg"
import store from "@/assets/svg/store-1-svgrepo-com.svg"
import power from "@/assets/svg/power-alt-svgrepo-com.svg"
import movie from "@/assets/svg/movie-frames-1492-svgrepo-com.svg"
import email from "@/assets/svg/email-1-svgrepo-com.svg"
import form from "@/assets/svg/form-svgrepo-com.svg"

export const getDataProject = () => {
  return [
    {
      name: "Power kr",
      img: power,
      technology: "react native . Tamaqui . Axio . Expo",
      url: "https://github.com/MatheusFellipi/Powerkr",
    },
    {
      name: "Loja de artigos",
      img:store,
      technology: "GitHub · TypeScript · Next.js · React.js . node.js",
      url: "https://github.com/MatheusFellipi/article-sales-site-FrontEnd",
    },
    {
      name: "NinjaMail",
      img:email,
      technology: "GitHub · TypeScript · Next.js · React.js",
      url: "https://github.com/MatheusFellipi/ninjaMail",
    },
    {
      name: "Formulário ReactJS",
      img:form,
      technology: "TypeScript · React.js",
      url: "https://github.com/MatheusFellipi/Study-Form",
    },
    {
      name: "Filme/Serie search",
      img: movie,
      technology: "TypeScript · React.js",
      url: "https://github.com/MatheusFellipi/-OMDb-API---The-Open-Movie-Database",
    },
  ];
};

export const getDataInProcess = () => {
  return [
    {
      name: "crunchyroll-copy",
      img: video,
      technology: "Axio . Expo",
      url: "https://github.com/MatheusFellipi/crunchyroll-copy",
    },
  ];
};

