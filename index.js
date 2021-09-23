window.addEventListener('DOMContentLoaded', (event) => {
    
    
    let left = document.getElementById("left-arrow")
    let right = document.getElementById("right-arrow")
    let carouselName = document.getElementById("carouselName")

    const nameArray= ["app", "blog", "shop", "note", "game", "graveyard"];
    let position = 0;

    left.addEventListener('click', () => {
        if (position === 0){
            position = 5;
        } else {
            position--;
        }
        if (position === 5){
            toggleDark();
        }
        else {
            toggleLight();
        }
        carouselName.innerHTML = nameArray[position]
    })

    right.addEventListener('click', () => {
        if (position === 5){
            position = 0;
        } else {
            position++;
        }
        if (position === 5){
            toggleDark();
        }
        else {
            toggleLight();
        }
        carouselName.innerHTML = nameArray[position]
    })

    const toggleDark = () => {
        document.body.style.backgroundColor="#000000"
        document.body.style.color="#FFFFFF"
        let links = document.getElementsByTagName('a')
        let arrows = document.getElementsByTagName('button')
        for (let i = 0; i < links.length; i++){
            let el = links[i]
            el.classList.add('dark_mode')
        }
        for (let i = 0; i < arrows.length; i++){
            let el = arrows[i]
            el.classList.add('dark_mode')
        }
    }
    const toggleLight = () => {
        document.body.style.backgroundColor="#FFFFFF"
        document.body.style.color="#000000"
        let links = document.getElementsByTagName('a')
        let arrows = document.getElementsByTagName('button')
        for (let i = 0; i < links.length; i++){
            let el = links[i]
            el.classList.remove('dark_mode')
        }
        for (let i = 0; i < arrows.length; i++){
            let el = arrows[i]
            el.classList.remove('dark_mode')
        }
    }
});