const barsMenu = document.querySelector("#barsMenu");
const menu = document.querySelector("#menu");
const submenuBtn = document.querySelectorAll(".submenu_btn");

barsMenu.addEventListener("click", function(){
    menu.classList.toggle("open");
});

for(let i = 0; i < submenuBtn.length; i++){
    submenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth , 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("touch")){
                subMenu.classList.remove("touch");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("touch");
                subMenu.style.height = height + "px";
            } 
        }
    });
}