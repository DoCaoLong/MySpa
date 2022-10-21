// slider section banner
$(".feature-slider_list").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    swipe: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                centerMode: true,
            },
        },
    ],
});
// close slider section banner

// slider section why
$(".why-slider_list").slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,
    appendDots: $(".slick-slider-dots"),
    prevArrow:
        '<button class="slide-arrow prev-arrow"><img src="./img/home/arrow_circle_left.svg" alt="arrow"></button>',
    nextArrow:
        '<button class="slide-arrow next-arrow"><img src="./img/home/arrow_circle_left.svg" alt="arrow"></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                swipe: true,
                arrows: false,
                pauseOnHover: true,
                pauseOnFocus: true,
            },
        },
    ],
});
// close slider section why

// slider fit MB
mobileOnlySlider(".fit-list", false, false, 767);
function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        dots: $dots,
        arrows: $arrows,
        responsive: [
            {
                breakpoint: $breakpoint,
                settings: "unslick",
            },
        ],
    };
    slider.slick(settings);
    $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
            return;
        }
        if (!slider.hasClass("slick-initialized")) {
            return slider.slick(settings);
        }
    });
}
// close slider fit MB

// slider evaluate
$(".evaluate-slider_list").slick({
    dots: false,
    arrows: true,
    nextArrow: ".evaluate-slider-next",
    prevArrow: ".evaluate-slider-prev",
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: "linear",
    autoplaySpeed: 3000,
    swipe: false,
});
// close slider evaluate

// org slider
$(".org-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                centerMode: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            },
        },
    ],
});
// close org slider

// active tab section ecosystem
const ecosystemTab = document.querySelectorAll(".ecosystem-tab_list");
const ecosystemTabItem = document.querySelectorAll(".ecosystem-tab_item");
ecosystemTab.forEach((item) =>
    item.addEventListener("click", (el) => {
        ecosystemTab.forEach((tab) => tab.classList.remove("active"));
        item.classList.add("active");
        const tabItem = el.target.dataset.tab;
        ecosystemTabItem.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("data-tab") === tabItem) {
                item.classList.add("active");
            }
        });
    })
);
// close active tab section ecosystem

// hover active bg section solutions
let solutionsManager = document.querySelector(".solutions-manager");
window.onresize = function () {
    if (window.innerWidth < 768) {
        solutionsManager.addEventListener("touchenter", active(1));
        solutionsManager.addEventListener("touchleave", () => active(0));
    } else {
        solutionsManager.addEventListener("mouseenter", active(1));
        solutionsManager.addEventListener("mouseleave", () => active(0));
    }
};
const active = (opacity) => {
    solutionsManager.parentNode.parentNode.parentNode.previousElementSibling.style.opacity = `${opacity}`;
};
// close hover active bg section solutions

// ecosystem accordian
window.addEventListener("load", function () {
    const accordionHeading = document.querySelectorAll(".accordion-heading");
    [...accordionHeading].forEach((item) =>
        item.addEventListener("click", (e) => {
            const content = e.target.nextElementSibling;
            content.style.height = `${content.scrollHeight}px`;
            content.classList.toggle("active");
            const icon = e.target.querySelector(".accordion-heading_arrown");

            if (!content.classList.contains("active")) {
                content.style.height = "0px";
                icon.style.transform = "rotate(180deg)";
            } else {
                icon.style.transform = "rotate(0deg)";
                content.style.height = "auto";
            }
        })
    );
});

// close ecosystem accordian
