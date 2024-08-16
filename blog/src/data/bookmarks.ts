export type Bookmark = {
  title: string;
  link: string;
  techs: string[];
  image: string
};

const bookmarks: Bookmark[] = [
  { title: "SVG Repo", techs: ["Icons"], image: "https://www.svgrepo.com", link: "https://www.svgrepo.com", },
  { title: "Astro Link Preview", techs: ["Repo", "Astro"], image: "https://github.com/Suven/astro-link-previews?tab=readme-ov-file", link: "https://github.com/Suven/astro-link-previews?tab=readme-ov-file", },
];

export default bookmarks;
