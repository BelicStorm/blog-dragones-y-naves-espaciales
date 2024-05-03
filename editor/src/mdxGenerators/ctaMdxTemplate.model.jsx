import { getComponentHtml } from "../utils/renderComponentsInHtml";

const CTA = ({title,ctaImage,ctaLabel, bgColor, content}) => {
    const mdx =  `---
    title: ${title}
    ctaImage: ${ctaImage}
    ctaLabel: ${ctaLabel}
    bgColor: ${bgColor}
    ---
    ${content}
            `
    getComponentHtml("CTA-MDX", mdx, "mdx");
}

export default CTA ;