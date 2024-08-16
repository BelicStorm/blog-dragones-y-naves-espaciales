type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "cpardoca3@gmail.com",
  title: "Hola, soy Cristian 👋",
  profile: "https://images.unsplash.com/photo-1677627004049-e028e214a388?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description:
    "Holaa, encantado de que hayas llegado hasta aquí. Soy un front-end developer y diseñador de UX/UI desde hace 5 años, también hago mis pinitos en la escritura (nada publicado) y en el diseño de juegos de mesa. Actualmente, trabajo con *React*, *Astro*, *Next.js* y *TypeScript* en mi trabajo como developer y *Figma* y *Penpot* como diseñador. Tengo otros talentos, pero como presentación creo que es suficiente. Fuera del trabajo intento leer y seguir aprendiendo.",
  socials: [
    {
      label: "GoodReads",
      link: "https://www.goodreads.com/user/show/117836981-belicstorm",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/cristian-pardo-a60251138/?locale=es_ES",
    },
    {
      label: "Github",
      link: "https://github.com/BelicStorm",
    },
    {
      label: "GitLab",
      link: "https://gitlab.com/users/BelicStorm/projects",
    },
    {
      label: "Figma",
      link: "https://www.figma.com/@belicstorm",
    },
  ],
};

export default presentation;
