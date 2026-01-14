// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

const content = document.createElement("div");
content.classList.add("wrap", "collapse", "alpha", "beta");

content.innerText= "Carl Sagan: 'We find that we live on an insignificant planet of a humdrum star lost in a galaxy tucked away in some forgotten corner of a universe in which there are far more galaxies than people.'"
document.body.appendChild(content);
const cloneContent = content.cloneNode(true);
document.body.appendChild(cloneContent);


