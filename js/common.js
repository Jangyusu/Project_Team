$(function () {
    $("header").load("header.html");
    $("footer").load("footer.html");

    setTimeout(function () {
        var header = document.querySelector("header"),
            burgerMenuOn = document.querySelector(".burger_menu"), // 버거메뉴 열기
            bergerMenuOff = document.querySelector(".exit"), // 버거메뉴 닫기
            mobileHeader = document.querySelector(".header_1depth_m"), // 버거메뉴
            menu = document.querySelectorAll(".menu_m"), // 메뉴
            detailMenu = document.querySelectorAll(".detail_menu_m"),
            line = document.getElementsByClassName("line"),
            scrollStart = 0,
            scrollEnd;

        burgerMenuOn.addEventListener("click", function () { //버거메뉴 열기
            mobileHeader.classList.add("on");
        });

        bergerMenuOff.addEventListener("click", function () { //버거메뉴 닫기
            mobileHeader.classList.remove("on");
        });

        for (var i = 0; i < menu.length; i++) { //버거메뉴 switch
            menu[i].addEventListener("click", function (e) {
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

        window.addEventListener("scroll", function () { //스크롤시 헤더 on/off
            scrollEnd = document.documentElement.scrollTop;

            if (scrollStart > scrollEnd) { //위로 스크롤
                header.classList.remove("active");
            } else { //아래로 스크롤
                header.classList.add("active");
            }

            scrollStart = scrollEnd;
        })
    }, 100);
});




