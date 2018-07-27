window.onscroll = function () {
    if (document.body.scrollTop > 1 | document.documentElement.scrollTop > 1) {
        document.querySelectorAll(".logo")[0].style = "top:0px; left:165px";
        document.querySelector("#logo").style = "height:50px";
    } else {
        document.querySelectorAll(".logo")[0].style = "top:-10px; left:150px";
        document.querySelector("#logo").style = "height:73px";
    }
}
