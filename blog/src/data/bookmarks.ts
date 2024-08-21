export type Bookmark = {
  title: string;
  link: string;
  techs: string[];
  image: string
};

const bookmarks: Bookmark[] = [
  { title: "SVG Repo", techs: ["Icons"], image: "https://www.svgrepo.com", link: "https://www.svgrepo.com", },
  { title: "Mockups 1", techs: ["Mockups"], image: "https://mrmockup.com/free-mockups/", link: "https://mrmockup.com/free-mockups/", },
  { title: "DS Gallery", techs: ["Design Systems"], image: "https://designsystemsrepo.com/design-systems/", link: "https://designsystemsrepo.com/design-systems/", },
  { title: "Mockups 2", techs: ["Mockups"], image: "https://www.ls.graphics/free-mockups", link: "https://www.ls.graphics/free-mockups", },
  { title: "Fonts 1", techs: ["Fonts"], image: "https://www.freefaces.gallery/", link: "https://www.freefaces.gallery/", },
  { title: "Font Pairing", techs: ["Fonts"], image: "https://fontjoy.com/", link: "https://fontjoy.com/", },
  { title: "Design Inspiration 1", techs: ["Design Inspiration"], image: "https://www.landingfolio.com/", link: "https://www.landingfolio.com/", },
  { title: "Design Inspiration 2", techs: ["Design Inspiration"], image: "https://www.curated.design/", link: "https://www.curated.design/", },
  { title: "Css background Patterns", techs: ["CSS"], image: "https://heropatterns.com/", link: "https://heropatterns.com/", },
  { title: "Can I Use", techs: ["Utility"], image: "https://caniuse.com/", link: "https://caniuse.com/", },
  { title: "Cheat Sheet Git", techs: ["Documentation", "Cheat sheet", "Git"], image: "https://education.github.com/git-cheat-sheet-education.pdf", link: "https://education.github.com/git-cheat-sheet-education.pdf", },
  { title: "Cheat Sheets", techs: ["Documentation", "Cheat sheet", "HTML", "CSS", "JS"], image: "https://htmlcheatsheet.com/", link: "https://htmlcheatsheet.com/", },
  { title: "MD Cheat Sheet", techs: ["Documentation", "Cheat sheet", "MD"], image: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet", link: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet", },
  { title: "JS Cheat Sheet", techs: ["Documentation", "Cheat sheet", "JS"], image: "https://overapi.com/javascript", link: "https://overapi.com/javascript", },
  { title: "Google Fonts", techs: ["Fonts"], image: "https://fonts.google.com/", link: "https://fonts.google.com/", },
  { title: "Fontspace", techs: ["Fonts"], image: "https://www.fontspace.com/", link: "https://www.fontspace.com/", },
  { title: "Abstract Fonts", techs: ["Fonts"], image: "https://www.abstractfonts.com/", link: "https://www.abstractfonts.com/", },
  { title: "Dev Fonts", techs: ["Fonts"], image: "https://devfonts.gafi.dev/", link: "https://devfonts.gafi.dev/", },
  { title: "Coolors", techs: ["Colors"], image: "https://coolors.co/", link: "https://coolors.co/", },
  { title: "Color Hunt", techs: ["Colors"], image: "https://colorhunt.co/", link: "https://colorhunt.co/", },
  { title: "Adobe Color wheel", techs: ["Colors"], image: "https://color.adobe.com/es/create/color-wheel", link: "https://color.adobe.com/es/create/color-wheel", },
  { title: "Color Hub", techs: ["Colors"], image: "https://www.colorhub.app/preview", link: "https://www.colorhub.app/preview", },
  { title: "Unsplash", techs: ["Illustrations", "Photos"], image: "https://unsplash.com/es", link: "https://unsplash.com/es", },
  { title: "Pexels", techs: ["Illustrations", "Photos"], image: "https://www.pexels.com/es-es/", link: "https://www.pexels.com/es-es/", },
  { title: "Iconfinder", techs: ["Illustrations", "Icons"], image: "https://www.iconfinder.com/", link: "https://www.iconfinder.com/", },
  { title: "Tailwind Cheat sheet", techs: ["Cheat sheet", "Tailwind"], image: "https://www.creative-tim.com/twcomponents/cheatsheet/", link: "https://www.creative-tim.com/twcomponents/cheatsheet/", },
  { title: "Minimal Gallery", techs: ["Design Inspiration"], image: "https://minimal.gallery/", link: "https://minimal.gallery/", },
  { title: "scrnsht", techs: ["Mobile", "Design Instpiration"], image: "https://scrnshts.club/", link: "https://scrnshts.club/", },
  { title: "Transhumans", techs: ["Illustrations"], image: "https://www.transhumans.xyz/", link: "https://www.transhumans.xyz/", },
  { title: "Ascii Icons", techs: ["Icons"], image: "https://www.toptal.com/designers/htmlarrows/", link: "https://www.toptal.com/designers/htmlarrows/", },
  { title: "React Custom Hooks Cheat Sheet", techs: ["Cheat sheet", "React"], image: "https://github.com/sergeyleschev/react-custom-hooks", link: "https://github.com/sergeyleschev/react-custom-hooks", },
  { title: "React Tooltip", techs: ["Repo", "React"], image: "https://github.com/ReactTooltip/react-tooltip/", link: "https://github.com/ReactTooltip/react-tooltip/", },
  { title: "Tailwind Components", techs: ["Tailwind"], image: "https://flowrift.com/c/banner", link: "https://flowrift.com/c/banner", },
  { title: "Ascii Icons", techs: ["Icons"], image: "https://www.toptal.com/designers/htmlarrows/", link: "https://www.toptal.com/designers/htmlarrows/", },
  { title: "Dev Documentation", techs: ["Documentation", "Astro", "CSS", "HTML", "React", "JS", "TS", "Tailwind"], image: "https://devdocs.io/javascript/", link: "https://devdocs.io/javascript/", },
  { title: "Swappy Draggable", techs: ["React", "repo"], image: "https://swapy.tahazsh.com/", link: "https://swapy.tahazsh.com/", },
  {title:"Structure utilities", techs:["repo"], image:"https://jam.dev/utilities", link:"https://jam.dev/utilities"},
  { title: "Astro Link Preview", techs: ["Repo", "Astro"], image: "https://github.com/Suven/astro-link-previews?tab=readme-ov-file", link: "https://github.com/Suven/astro-link-previews?tab=readme-ov-file", },
];

export default bookmarks;
