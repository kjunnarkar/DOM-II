// Your code goes here
const mainTitle = document.querySelector('.logo-heading');
mainTitle.addEventListener("mouseover", () => {
    mainTitle.style.color = "blue";
    mainTitle.style.backgroundColor = "yellow";
    mainTitle.style.transform = "scale(1.2)";
    mainTitle.style.transition = "0.3s";
});

document.querySelectorAll('a').forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.color = "red";
        element.style.backgroundColor = "green";
    })
    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1.8)";
        element.style.transition = "0.5";
    })
});

const busImg = document.querySelector('.intro img');
    busImg.addEventListener("mousemove", () => {
        busImg.src = "https://i.pinimg.com/564x/06/67/cd/0667cde97b066f7a27a428b90e15dd00.jpg";
    });

const bodyEvent = document.querySelector('body');
window.addEventListener("resize", () => {
    bodyEvent.style.color = "red";
    bodyEvent.style.backgroundColor = "pink";
});
window.addEventListener("scroll", () => {
    bodyEvent.style.color = "white";
    bodyEvent.style.backgroundColor = "blue";
});
window.addEventListener("contextmenu", () => {
    bodyEvent.style.color = "aqua";
    bodyEvent.style.backgroundColor = "grey";
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener("click", () => {
        button.style.color = "brown";
        button.style.backgroundColor = "green";
    })
    button.addEventListener("dblclick", () => {
        button.style.transform = "scale(1.8)";
        button.style.transition = "0.5s";
    })
    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.5)";
        button.style.transition ="0.5s";
    })
});

//test stopPropagation
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener("click", () => {
    mainNav.style.backgroundColor = "purple";
    console.log("testing stopPropagation: parent element"); 
});

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("click", (event) => {
    logoHeading.style.backgroundColor = "grey";
    console.log("testing stopPropagation: child element");
    event.stopPropagation();
});

//test preventDefault
document.querySelectorAll('a').forEach(element => {
    element.addEventListener("click", (e) => {
    console.log("testing preventDefault: click of link has been prevented");
    e.stopPropagation(); //stopPropagation of main-navigation bg-color to purple
    e.preventDefault();
    })
});
