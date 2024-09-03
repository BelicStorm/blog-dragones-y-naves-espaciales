
export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  webPage:string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
		name: "Raga Tattoo WebPage",
		tags: ["Next.js", "TypeScript"],
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://github.com/BelicStorm/TattooPageTemplate",
		webPage: "https://tattoo-page-template.vercel.app",
		description: "Diseño de una landing page de un estudio de tatuajes creada con NextJs"
	},
	{
		name: "Portfolio Interiorismo",
		tags: ["Gatsby", "JS"],
		description: "Portfolio creado para una estudiante de interiorismo",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://gitlab.com/BelicStorm/gatsby-test",
		webPage: "https://curriculum-portfolio.vercel.app"
	},
	{
		name: "DAILY UI 2022",
		tags: ["Figma", "UI"],
		description: "Reto de diseño de 100 interfaces de usuario.",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://www.figma.com/community/file/1223947829293922695",
		webPage: ""
	},
	{
		name: "Real State Italiano",
		tags: ["Figma", "UI", "UX"],
		description: "Diseño de landing de busqueda de casas italiana",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://www.figma.com/design/Kua4lgFF9rOCmWuxGW7UpV/facilevaluta?node-id=0-1&t=RN8RrugPW7SVfWGf-1",
		webPage: ""
	},
	{
		name: "Diseño Anonimizador",
		tags: ["Figma", "UI", "UX"],
		description: "Diseño de un anonimizador de texto.",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://www.figma.com/design/O9YPfnGePSW9KaJ3KA76w2/AnonProyect?node-id=14-4655&t=IkCv89xr2hScEVVn-1",
		webPage: ""
	},
	{
		name: "DS eComerce",
		tags: ["Figma", "UI",],
		description: "Creación del Design System de un eComerce",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://www.figma.com/community/file/1223948102114641289",
		webPage: ""
	},
	{
		name: "DS app gestión tareas",
		tags: ["Figma", "UI"],
		description: "Creación del Design System para una app de gestión de tareas de usuarios",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://www.figma.com/community/file/1361631588109409187",
		webPage: ""
	},
	{
		name: "Photo recognition page",
		tags: ["Figma", "UI"],
		demoLinkRel: 'nofollow noopener noreferrer',
    description:"Diseño de una pagina para la compra de imagenes de eventos deportivos, por reconocimiento facial.",
		demoLink: "https://www.figma.com/community/file/1361632820364145576",
		webPage: ""
	},
	{
		name: "TWO NODEJS, ONE GRAPHQL SUBSCRIPTION",
		tags: ["nodejs", "graphql", "apollo"],
		description: "Ejemplo practico suscripcion entre dos servidores.",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://github.com/BelicStorm/NodejsSubToOtherNodeJs",
		webPage: ""
	},
	{
		name: "Clone Fotocasa",
		tags: ["react", "typescript"],
		description: "Clon del home del portal Fotocasa",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://github.com/BelicStorm/CloneHomeFotocasa",
		webPage: ""
	},
	{
		name: "GESTIÓN DEL HORARIO",
		tags: ["react", "redux", "typescript", "nodejs", "graphql", "apollo", "docker", "postgresql"],
		description: "App para la gestión y el control de los horarios..",
		demoLinkRel: 'nofollow noopener noreferrer',
		demoLink: "https://gitlab.com/BelicStorm/fct_daw_19_20",
		webPage: ""
	}
]
