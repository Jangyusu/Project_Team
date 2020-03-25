window.addEventListener("load", function () { //window load후 실행
    var visualImgs = document.querySelectorAll(".visual_imgs img"),
        visualImgArrow = document.querySelector(".arrow"),
        visualImgPrev = document.querySelectorAll(".arrow i")[0],
        visualImgNext = document.querySelectorAll(".arrow i")[1],
        visualImgIndex = 0;





    setInterval(visualImgSlides, 5000); //visualImgSlide 5초뒤 5초마다 실행
    visualImgArrow.addEventListener("click", visualImgControl); //이전 혹은 다음 visualImg





    function visualImgControl(e) { //이전 혹은 다음 visualImg

        if (e.target == visualImgPrev) { //이전 visualImg
            visualImgIndex--;
            if (visualImgIndex == -1) {
                visualImgIndex = visualImgs.length - 1;
            }
        } else if (e.target == visualImgNext) { //다음 visualImg
            visualImgIndex++;
            if (visualImgIndex == visualImgs.length) {
                visualImgIndex = 0;
            }
        }

        visualImgChange();

    }

    function visualImgSlides() { //visualImgSlide 5초뒤 5초마다 실행

        visualImgIndex++;
        if (visualImgIndex == 3) {
            visualImgIndex = 0;
        }

        visualImgChange();
    }

    function visualImgChange() {
        for (var i = 0; i < visualImgs.length; i++) {
            visualImgs[i].classList.remove("active");
        }

        visualImgs[visualImgIndex].classList.add("active"); //visualImg 변경
    }
})