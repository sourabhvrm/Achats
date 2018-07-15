window.onscroll = function () {
    if (document.body.scrollTop > 1 | document.documentElement.scrollTop > 1) {
        document.querySelector("#logo-large").style = "display:none";
        document.querySelector("#logo-small").style = "display:block";
    } else {
        document.querySelector("#logo-large").style = "display:block";
        document.querySelector("#logo-small").style = "display:none";

    }
}