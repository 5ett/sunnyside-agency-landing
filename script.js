const switchMenu = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');

switchMenu.onclick =() => {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
};

// checkClick(e){
//     if (e.target===this.$refs.menuWrap){
//         dropdown.style.opacity = 0;
//     }
// }



