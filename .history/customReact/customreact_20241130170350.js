const customRender = (element, container){
    const newEl = document.createElement(element.type);
    newEl
}
const customElement = {
    type: 'a'
    props:{
        href:"www.google.com",
        target:"_blank",
    }
    children: "Click to visit google",
}
const mainContainer = document.getElementById("root");