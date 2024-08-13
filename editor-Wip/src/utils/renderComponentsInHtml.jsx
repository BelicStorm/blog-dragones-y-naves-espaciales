import { renderToString } from 'react-dom/server';

function getComponentHtml(componentName, reactNode, extension = "html") {
    const html = renderToString(reactNode)

    const element = document.createElement("a");
    const file = new Blob([html], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = componentName+"."+extension;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}


export {getComponentHtml}