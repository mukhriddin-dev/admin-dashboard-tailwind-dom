// HTML elements

let dropdown = $(".dropdown"),
    dropdownMenu = $(".dropdown-menu"),
    navMenu = $(".nav-menu"),
    asideMenu = $("#aside"),
    toggleMenu = $(".toggle-menu"),
    submitForm = $("#login-form"),
    userName = $("#username"),
    password = $("#password"),
    accardionCard = $$(".accordion-btn");

// dropdown menu functionality

dropdown.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show-dropdown");
});

// window.addEventListener("click", function (e) {

//     if (e.target.nodeName != "HTML") {

//         if (!e.target.parentNode.classList.contains("dropdown-menu") || !e.target.parentNode.classList.contains("dropdown")) {
//             dropdownMenu.classList.add("show-dropdown");
//         } else {
//             dropdownMenu.classList.remove("show-dropdown");
//         }
//     } else {
//         dropdownMenu.classList.remove("show-dropdown");
//     }

// });

// navigation menu functionality

function renderNavigationMenu(data) {
    if (data.length) {
        data.forEach((el) => {
            const listItem = createElement(
                "li",
                classListItem,
                `<a href="${el.link}" class="gap-x-[12px] items-center flex text-xl"> <i class="bi ${el.icon} text-2xl"></i> <span>${el.title}</span></a>`
            );
            navMenu.appendChild(listItem);
        });
    }
}

renderNavigationMenu(navigationMenu);

toggleMenu.addEventListener("click", () => {
    asideMenu.classList.toggle("hide-aside");
});

(function () {
    let token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "../../pages/login.html";
    }
})();

function logOut() {
    console.log("logouting");
    localStorage.removeItem("token");
    window.location.href = "../../pages/login.html";
}

// -------------------------- acardion --------------------------------



accardionCard.forEach((el) => {

    el.addEventListener("click", (e) => {

        if(el.children[2].classList.contains("bi-caret-down")) {
            el.children[2].classList.remove("bi-caret-down");
            el.children[2].classList.add("bi-caret-up"); 
        }else{
            el.children[2].classList.remove("bi-caret-up");
            el.children[2].classList.add("bi-caret-down");
        }

        if(!el.nextElementSibling.style.maxHeight.length){
           el.nextElementSibling.style.maxHeight =`${el.nextElementSibling.scrollHeight}px`;
        }else{
            el.nextElementSibling.style.maxHeight=null;
        }    
    });
});
