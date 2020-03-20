var content = document.querySelector(".content"),
    mainForm = document.querySelector(".mainForm"),
    list = content.querySelectorAll("li"),
    back = mainForm.querySelector("p a");

function inquiry() {
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
            mainForm.style.display = "block";

            setTimeout(function() {
                content.classList.add("active");
                mainForm.classList.add("active");
            }, 50);
        });
    }

    back.addEventListener("click", function() {
        event.preventDefault();

        content.classList.remove("active");
        mainForm.classList.remove("active");

        setTimeout(function() {
            mainForm.style.display = "none";
        }, 1000);
    });
} // 문의하기 열고 닫기

inquiry();
