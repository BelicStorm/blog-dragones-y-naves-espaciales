
const CTA = ({title,ctaImage,ctaLabel, bgColor, content}) => {
    console.log(
        `---
        title: ${title}
ctaImage: ${ctaImage}
ctaLabel:${ctaLabel}
bgColor:${bgColor}
        ---
        ${content}
        `
    );
}

export default CTA ;