const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
var bg = document.querySelector('#main-doc');

function toggle() {
    sidebar.classList.toggle('visible');
}

hamburger.addEventListener('click', toggle);

bg.addEventListener("click", function (event) {
    if (!event.target.closest(".sidebar")) {
        sidebar.classList.remove("visible");
    }
});