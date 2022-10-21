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
$(".recruit-banner_slider").flickity({
    draggable: false,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
    selectedAttraction: 0.08,
    friction: 1,
    wrapAround: true,
});
$(".recruit-hr_slider").flickity({
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    // selectedAttraction: 0.08,
    // friction: 1,
    wrapAround: true,
});
$(".recruit-top_slider").flickity({
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    // selectedAttraction: 0.08,
    // friction: 1,
    wrapAround: true,
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

let fund = document.getElementById("fund");
let address = document.getElementById("address");
let email = document.getElementById("email");
let telephone = document.getElementById("telephone");

let joinInput = document.querySelectorAll(".join-wrap_input");
let joinBtnSubmit = document.querySelector(".join-btn_submit");
let joinForm = document.querySelector(".jojn-right_form");

joinBtnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    joinInput.forEach((item) => item.classList.remove("error"));
    const values = checkValidate();
    if (values) {
        alert("Gửi đăng ký thành công");
        console.log(values);
        joinForm.reset();
    }
});

const checkValidate = () => {
    let valFund = fund.value.trim();
    let valAddress = address.value.trim();
    let valEmail = email.value.trim();
    let valTelephone = telephone.value.trim();
    let isCheck = true;

    if (valFund === "") {
        setError(fund, "Quỹ đầu tư không được để trống");
        isCheck = false;
    }
    if (valAddress === "") {
        setError(address, "Vui lòng nhập địa chỉ");
        isCheck = false;
    }
    if (valEmail === "") {
        setError(email, "Vui lòng nhập Email");
        isCheck = false;
    } else if (!isEmail(valEmail)) {
        setError(email, "Email không đúng định dạng example@gmail.com");
        isCheck = false;
    }
    if (valTelephone === "") {
        setError(telephone, "Vui lòng nhập số điện thoại");
        isCheck = false;
    } else if (!isPhone(valTelephone)) {
        setError(telephone, "Số điện thoại không đúng định dạng");
        isCheck = false;
    }

    function setError(ele, message) {
        let parentEle = ele.parentNode;
        parentEle.classList.add("error");
        parentEle.querySelector(".error-text").innerText = message;
    }

    if (isCheck)
        return (values = {
            fund: valFund,
            address: valAddress,
            email: valEmail,
            telephone: valTelephone,
        });
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
