import { loadEnv } from 'vite';

const { GITHUB_PERSONAL_ACCESS_TOKEN } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

export const slugify = (input: string) => {
	if (!input) return '';

	// make lower case and trim
	var slug = input.toLowerCase().trim();

	// remove accents from charaters
	slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	// replace invalid chars with spaces
	slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

	// replace multiple spaces or hyphens with a single hyphen
	slug = slug.replace(/[\s-]+/g, '-');

	return slug;
};

export const unslugify = (slug: string) =>
	slug.replace(/\-/g, ' ').replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());

export const kFormatter = (num: number) => {
	return Math.abs(num) > 999 ? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
};




  
  
  type Social = {
	label: string;
	link: string;
  };
  
  type Presentation = {
	mail: string;
	title: string;
	socials: Social[];
	profile?: string;
  };
  
  export const presentation: Presentation = {
	mail: "cpardoca3@gmail.com",
	title: "Hola, soy Cristian 👋",
	profile: "https://images.unsplash.com/photo-1677627004049-e028e214a388?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
	  {
		label: "Spotify",
		link: "https://open.spotify.com/user/k3r5vdy9iuh229vnzew892dkg?si=50a2bd25586c457c",
	  },
	],
  };
  
  
 
  
  
  
  
