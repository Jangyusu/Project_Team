var contentBox = document.getElementsByClassName('contentBox');
contentBox[0].style.height = document.getElementsByClassName('sub_con_on')[0].offsetHeight + "px";

function changeContent(objs){
    event.preventDefault();

    // subConOnClass -> sub_con_on 클래스가 있는 객체를 담은 변수
    var subConOnClass = document.getElementsByClassName('sub_con_on');
    //subCons -> onclick으로 함수호출시 클릭한 객체의 정보를 담은 변수
    var subCons = document.getElementsByClassName(objs.id);

    if(subConOnClass[0].classList[1] != objs.id){
        subConOnClass[0].classList.add('sub_con_off');
        subConOnClass[0].classList.remove('sub_con_on');

        subCons[0].classList.add('sub_con_on');
        subCons[0].classList.remove('sub_con_off');

        contentBox[0].style.height = subCons[0].offsetHeight + "px";
    }else{
        console.log("sub_con_on 을 갖고있는 객체와 클릭한 객체가 동일");
    }

}
