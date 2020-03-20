var burgerMenuOn = document.querySelector(".burger_menu"), // 버거메뉴 열기
    bergerMenuOff = document.querySelector(".exit"), // 버거메뉴 닫기
    mobileHeader = document.querySelector(".header_1depth_m"), // 버거메뉴
    menu = document.querySelectorAll(".menu_m"), // 메뉴
    detailMenu = document.querySelectorAll(".detail_menu_m"),
    line = document.getElementsByClassName("line");

burgerMenuOn.addEventListener("click", function() {
    mobileHeader.classList.add("on");
}); // 버거메뉴 열기

bergerMenuOff.addEventListener("click", function() {
    mobileHeader.classList.remove("on");
}); // 버거메뉴 닫기

for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function(e) {
        e.preventDefault();

        if (e.target.nextSibling.nextSibling.classList.contains("on")) {
            e.target.nextSibling.nextSibling.classList.remove("on");
            e.target.children[0].children[1].classList.remove("off");
        } else {
            for (var j = 0; j < menu.length; j++) {
                detailMenu[j].classList.remove("on");
                line[j].classList.remove("off");
            }
            e.target.nextSibling.nextSibling.classList.add("on");
            e.target.children[0].children[1].classList.add("off");
        }
    });
}

/* 버거메뉴 on/off */
