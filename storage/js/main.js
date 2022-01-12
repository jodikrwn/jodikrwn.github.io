const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");
const navHome = document.querySelector(".nav-home");
const navAbout = document.querySelector(".nav-about");
const navSkill = document.querySelector(".nav-skill");
const pagination = document.querySelector(".pagination");
const pageLink = document.querySelectorAll(".page-link");
const paginationHome = document.querySelector(".page-link.home");
const paginationAbout = document.querySelector(".page-link.about");
const paginationSkill = document.querySelector(".page-link.skill");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("fixed-top", window.scrollY > 0);

    if (window.innerWidth <= 750) {
        paginationHome.classList.toggle("active", window.scrollY <= 910);
        navHome.classList.toggle("active", window.scrollY <= 910);

        paginationAbout.classList.toggle("active", window.scrollY >= 910 && window.scrollY <= 2000);
        navAbout.classList.toggle("active", window.scrollY >= 910 && window.scrollY <= 2000);

        paginationSkill.classList.toggle("active", window.scrollY >= 2000);
        navSkill.classList.toggle("active", window.scrollY >= 2000);
    }

    if (window.innerWidth > 750 && window.innerWidth < 1200) {
        paginationHome.classList.toggle("active", window.scrollY <= 450);
        navHome.classList.toggle("active", window.scrollY <= 450);

        paginationAbout.classList.toggle("active", window.scrollY >= 450 && window.scrollY <= 1140);
        navAbout.classList.toggle("active", window.scrollY >= 450 && window.scrollY <= 1140);

        paginationSkill.classList.toggle("active", window.scrollY >= 1140);
        navSkill.classList.toggle("active", window.scrollY >= 1140);
    }


    if (window.innerWidth >= 1200) {
        paginationHome.classList.toggle("active", window.scrollY <= 500);
        navHome.classList.toggle("active", window.scrollY <= 500);

        paginationAbout.classList.toggle("active", window.scrollY >= 500 && window.scrollY <= 1300);
        navAbout.classList.toggle("active", window.scrollY >= 500 && window.scrollY <= 1300);

        paginationSkill.classList.toggle("active", window.scrollY >= 1300);
        navSkill.classList.toggle("active", window.scrollY >= 1300);
    }
})

navbar.addEventListener("click", (item) => {
    if (item.target.className === "nav-link") {
        navLink.forEach((item) => {
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            }
        })
        item.target.classList.add("active");
    }
})

pagination.addEventListener("click", (item) => {
    if (item.target.className === "page-link") {
        pageLink.forEach((item) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        })
        item.target.classList.add('active')
    }
})

$('.nav-link').click(function () {
    $('.navbar-collapse').collapse('hide');
});