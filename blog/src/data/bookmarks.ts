export type Bookmark = {
    title: string;
    link: string;
    techs: string[];
    image?:string
  };
  
  const bookmarks: Bookmark[] = [
    {
      title: "Puppetfactory",
      techs: ["Next.js", "TypeScript"],
      link: "https://puppetfactory.app/",
    },
    {
      title: "Script to generate Next.js project",
      techs: ["Shell"],
      link: "https://github.com/MaeWolff/create-nextjs-app-bash-script",
    },
    {
      title: "Dictionary App",
      techs: ["Next.js", "react-query", "zod"],
      link: "https://github.com/MaeWolff/dictionary-app",
    },
    {
      title: "Portfolio / Template",
      techs: ["Astro", "TypeScript"],
      link: "https://github.com/MaeWolff/astro-portfolio-template",
    },
  ];
  
  export default bookmarks;
  