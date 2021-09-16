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
        carouselName.innerHTML = nameArray[position]
    })

    right.addEventListener('click', () => {
        if (position === 5){
            position = 0;
        } else {
            position++;
        }
        carouselName.innerHTML = nameArray[position]
    })

    const toggleDark = () => {
        document.body.style.backgroundColor="#000000"
        document.body.style.color="#FFFFFF"
    }
});