function _load() {
    let myObjects = [
        {
            tag: "h1",
            content: "Kozma Gábor"
        },
        {
            tag: "p",
            content:"frontend developer"
        }
    ];
    console.log(myObjects);
    // for (let i = 0; i < myObjects.length; i++)
    root = document.getElementById("root");

    for (myObject of myObjects) {
        console.log(myObject);
        let rowH = `<${myObject.tag}> ${myObject.content} </${myObject.tag}>`;
        console.log(rowH);
        root.insertAdjacentHTML("beforeend",rowH);
        // root.insertAdjacentHTML("beforeend",`<div>HELLO</div>`);
    }

    root.addEventListener("click", function(event){
        // event.target.classList.toggle("clicked");
        root.classList.toggle("clicked");
    })
}

window.addEventListener("load",_load);