document.addEventListener("mousemove", (e)=>{
    const hoverEffect = document.querySelector(".hover_effect");
    hoverEffect.style.left = `${e.pageX}px`
    hoverEffect.style.top = `${e.pageY}px`
});

const card = document.querySelector(".card");

card.addEventListener("mouseenter", ()=>{
    const hoverEffect = document.querySelector(".hover_effect");
    hoverEffect.classList.add("pink")
})

card.addEventListener("mouseleave" , ()=>{
    const hoverEffect = document.querySelector(".hover_effect");
    hoverEffect.classList.remove("pink")
})