const nav = document.querySelector(".primary-navigation");
const mobileButton = document.getElementById('mobileButton');

mobileButton.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-something");
    // if the nav is closed, open it. Use data-attributes for JS
    if (visibility === "false") {
        nav.setAttribute("data-something", "true");
        mobileButton.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-something", "false");
        mobileButton.setAttribute("aria-expanded", false);
    }


    console.log(visibility);
    
    // if the nav is open, close it



})


