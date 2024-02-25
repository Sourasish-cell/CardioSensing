let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}
function toggleCamera() {
    var img = document.getElementById('videoStream');
    img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';
}