var $carouselSoftware = $(".carousel-software").flickity({
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
});

$(".team-founder_list").flickity({
    wrapAround: true,
    prevNextButtons: false,
    watchCSS: true,
    draggable: true,
});
$(".about-we_slider").flickity({
    wrapAround: true,
    prevNextButtons: false,
    draggable: false,
    // watchCSS: true,
    pageDots: false,
    face: true,
    draggable: true,
});
$(".button--previous").on("click", function () {
    $carousel.flickity("previous");
});
const btnItems = document.querySelectorAll(".left-select_item");
$(".gallery-left_select").on("click", ".left-select_item", function () {
    var index = $(this).index();
    $carouselSoftware.flickity("select", index);
});
const handleChangeTab = (e) => {
    btnItems.forEach((el) => el.classList.remove("select-active"));
    e.classList.add("select-active");
};
btnItems.forEach((el) =>
    el.addEventListener("click", () => handleChangeTab(el))
);

particlesJS("particles-js", {
    particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            // image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
            value: 5,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1.5,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
    },
});

$(document).ready(function () {
    $("#lightgallery").lightGallery();
    $("#lightgallery2").lightGallery();
    $("#lightgallery3").lightGallery();
});
