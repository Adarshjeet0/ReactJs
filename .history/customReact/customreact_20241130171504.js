const customRender = (element, container){
    cl
    const newEl = document.createElement(element.type);
    newEl.href = element.props.href;
    newEl.target = element.props.target;
    newEl.innerHTML = element.children;


    container.appendChild(newEl);
}
const customElement = {
    type: 'a',
    props:{
        href:"www.google.com",
        target:"_blank",
    },
    children: "Click to visit google",
}
const mainContainer = document.getElementById("root");
customRender(customElement, mainContainer);