const switchMenu = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');

// switchMenu.onclick =() => {
//     if (dropdown.style.display === "block") {
//         dropdown.style.display = "none";
//     } else {
//         dropdown.style.display = "block";
//     }
// };

switchMenu.onclick =() => {
    if (dropdown.style.opacity == 0) {
        dropdown.style.opacity = 1;
        dropdown.style.right = "-18em";
    } else {
        dropdown.style.opacity = 0;
        dropdown.style.right = "20em";
    }
};



