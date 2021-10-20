const fIcons = document.querySelector("#fIcons");
const fBlueIcon = document.querySelector("#fBlueIcon");
const fWhiteIcon = document.querySelector("#fWhiteIcon");

const tIcons = document.querySelector("#tIcons");
const tBlueIcon = document.querySelector("#tBlueIcon");
const tWhiteIcon = document.querySelector("#tWhiteIcon");

const iIcons = document.querySelector("#iIcons");
const iBlueIcon = document.querySelector("#iBlueIcon");
const iWhiteIcon = document.querySelector("#iWhiteIcon");

const input = document.querySelector("#input");
const errorMsg = document.querySelector("#errorMsg");
const button = document.querySelector(".button");

const show = (blue, white) => {
    blue.classList.add("hidden");
    white.classList.remove("hidden");
};

const hide = (blue, white) => {
    blue.classList.remove("hidden");
    white.classList.add("hidden");
};

fIcons.addEventListener("mouseenter", (event) => {
    show(fBlueIcon, fWhiteIcon);
});

tIcons.addEventListener("mouseenter", (event) => {
    show(tBlueIcon, tWhiteIcon);
});

iIcons.addEventListener("mouseenter", (event) => {
    show(iBlueIcon, iWhiteIcon);
});

fIcons.addEventListener("mouseleave", (event) => {
    hide(fBlueIcon, fWhiteIcon);
});

tIcons.addEventListener("mouseleave", (event) => {
    hide(tBlueIcon, tWhiteIcon);
});

iIcons.addEventListener("mouseleave", (event) => {
    hide(iBlueIcon, iWhiteIcon);
});

button.addEventListener("click", (event) => {
    if (!input.value.includes("@" && ".co")) {
        input.classList.add("red");
        errorMsg.classList.remove("hidden");

    }
});

button.addEventListener("click", (event) => {
    if (input.value.includes("@" && ".co")) {
        input.classList.remove("red");
        errorMsg.classList.add("hidden");

    }
});