export type Project = {
  title: string;
  techs: string[];
  link: string;
  webPage?: string,
  isComingSoon?: boolean;
  image: string,
  description?: string
};

const featuredProjects: Project[] = [
  {
    title: "Raga Tattoo WebPage",
    techs: ["Next.js", "TypeScript"],
    link: "https://github.com/BelicStorm/TattooPageTemplate",
    webPage: "https://tattoo-page-template.vercel.app",
    image: "/src/assets/gaboPage.png",
    description: "Diseño de una landing page de un estudio de tatuajes creada con NextJs"
  },
  {
    title: "DAILY UI 2022",
    techs: ["Figma", "UI"],
    image: "/src/assets/daily2022.png",
    description: "Reto de diseño de 100 interfaces de usuario.",
    link: "https://www.figma.com/community/file/1223947829293922695",
    webPage: ""
  },
  {
    title: "DS eComerce",
    techs: ["Figma", "UI",],
    image: "/src/assets/grutinet.png",
    description: "Creación del Design System de un eComerce",
    link: "https://www.figma.com/community/file/1223948102114641289",
    webPage: ""
  },
  {
    title: "GESTIÓN DEL HORARIO",
    techs: ["react", "redux", "typescript", "nodejs", "graphql", "apollo", "docker", "postgresql"],
    image: "/src/assets/horarios.png",
    description: "App para la gestión y el control de los horarios..",
    link: "https://gitlab.com/BelicStorm/fct_daw_19_20",
    webPage: ""
  }
];

const projects: Project[] = [
  {
    title: "Raga Tattoo WebPage",
    techs: ["Next.js", "TypeScript"],
    link: "https://github.com/BelicStorm/TattooPageTemplate",
    webPage: "https://tattoo-page-template.vercel.app",
    image: "/src/assets/gaboPage.png",
    description: "Diseño de una landing page de un estudio de tatuajes creada con NextJs"
  },
  {
    title: "Portfolio Interiorismo",
    techs: ["Gatsby", "JS"],
    image: "/src/assets/interiorista.png",
    description: "Portfolio creado para una estudiante de interiorismo",
    link: "https://gitlab.com/BelicStorm/gatsby-test",
    webPage: "https://curriculum-portfolio.vercel.app"
  },
  {
    title: "DAILY UI 2022",
    techs: ["Figma", "UI"],
    image: "/src/assets/daily2022.png",
    description: "Reto de diseño de 100 interfaces de usuario.",
    link: "https://www.figma.com/community/file/1223947829293922695",
    webPage: ""
  },
  {
    title: "Real State Italiano",
    techs: ["Figma", "UI", "UX"],
    image: "/src/assets/faccile.png",
    description: "Diseño de landing de busqueda de casas italiana",
    link: "https://www.figma.com/design/Kua4lgFF9rOCmWuxGW7UpV/facilevaluta?node-id=0-1&t=RN8RrugPW7SVfWGf-1",
    webPage: ""
  },
  {
    title: "Diseño Anonimizador",
    techs: ["Figma", "UI", "UX"],
    image: "/src/assets/anon.png",
    description: "Diseño de un anonimizador de texto.",
    link: "https://www.figma.com/design/O9YPfnGePSW9KaJ3KA76w2/AnonProyect?node-id=14-4655&t=IkCv89xr2hScEVVn-1",
    webPage: ""
  },
  {
    title: "DS eComerce",
    techs: ["Figma", "UI",],
    image: "/src/assets/grutinet.png",
    description: "Creación del Design System de un eComerce",
    link: "https://www.figma.com/community/file/1223948102114641289",
    webPage: ""
  },
  {
    title: "DS app gestión tareas",
    techs: ["Figma", "UI"],
    image: "/src/assets/wow.png",
    description: "Creación del Design System para una app de gestión de tareas de usuarios",
    link: "https://www.figma.com/community/file/1361631588109409187",
    webPage: ""
  },
  {
    title: "Pagina para la compra de imagenes",
    techs: ["Figma", "UI"],
    image: "/src/assets/sportRecognition.png",
    description: "Diseño de una pagina para la compra de imagenes de eventos deportivos, por reconocimiento facial.",
    link: "https://www.figma.com/community/file/1361632820364145576",
    webPage: ""
  },
  {
    title: "TWO NODEJS, ONE GRAPHQL SUBSCRIPTION",
    techs: ["nodejs", "graphql", "apollo"],
    image: "/src/assets/2nodes.png",
    description: "Ejemplo practico suscripcion entre dos servidores.",
    link: "https://github.com/BelicStorm/NodejsSubToOtherNodeJs",
    webPage: ""
  },
  {
    title: "GESTIÓN DEL HORARIO",
    techs: ["react", "redux", "typescript", "nodejs", "graphql", "apollo", "docker", "postgresql"],
    image: "/src/assets/horarios.png",
    description: "App para la gestión y el control de los horarios..",
    link: "https://gitlab.com/BelicStorm/fct_daw_19_20",
    webPage: ""
  }
];


export { projects, featuredProjects };
