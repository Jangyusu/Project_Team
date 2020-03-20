//서브페이지 첫 진입시 첫번째 콘텐츠의 높이값 가져와서 적용
var contentBox = document.querySelector('.contentBox');
contentBox.style.height = document.querySelector('.con_on').offsetHeight + "px";
var contentBoxCheck = true;

window.addEventListener('resize',function(){
    if(contentBoxCheck == true){
        contentBoxCheck = false;

        this.setTimeout(function(){
            contentBox.style.height = document.querySelector('.con_on').offsetHeight + "px";
            contentBoxCheck = true
        }, 1500);
    }
})

//ul을 찾아서 그 자식인 li들을 배열형태로 저장 ( 유사배열이라 배열과는 다름 )
var conUl = document.querySelector('.content_ul').children;
var con01MainUl = document.querySelector('.con_01_main_ul').children;
var con03MainBtn = document.querySelector('.indicator_buttons').children;

// 유사배열에선 배열메서드를 사용할 수 없으므로 트릭으로 call 을 사용하여 유사배열을 불러와서 forEach 문을 사용
//contentUl - li - a click
[].forEach.call(conUl, function(li) {
    li.children[0].addEventListener('click', changeContent);
});

//con01 - main - ul - li - a click
[].forEach.call(con01MainUl, function(li) {
    li.children[0].addEventListener('click', infoClaimant);
});

//con03 - main - div - a click
[].forEach.call(con03MainBtn, function(a) {
    a.addEventListener('click', debtContentBtn);
});
var checked = true;

//서브메뉴 버튼
function changeContent(){
    event.preventDefault();

    if(checked){
        checked = false;
        // subConOnClass -> sub_con_on 클래스를 갖고있는 객체를 담은 변수
        var subConOnClass = document.querySelector('.con_on');
        //subCons -> onclick으로 함수호출시 클릭한 객체의 정보를 담은 변수
        var subCons = document.querySelector('.' + event.currentTarget.id);
        //main_on 클래스를 갖고있는 객체를 담은 변수
        var subMainOn = document.querySelector('.main_on'); 

        if(subConOnClass.classList[1] != event.currentTarget.id){
            
            //remove
            subConOnClass.classList.remove('con_on');
            setTimeout(function(){
                subMainOn.classList.remove('main_on');
                checked = true;
            }, 800);

            //add
            subCons.classList.add('con_on');
            subCons.children[0].classList.add('main_on');

        }else{
            checked = true;
        }
        //선택된 콘텐츠의 높이값 재적용
        contentBox.style.height = subCons.offsetHeight + "px";
    }else{}
}

//정보공개창구 - 콘텐츠메뉴 버튼
function infoClaimant(){
    event.preventDefault();
    var con01_mainOn = event.target;
    var con01_main = document.querySelector('.con01_main_on');
    var textDiv = event.target.nextSibling.nextSibling;
    var defaultTextOn = document.querySelector('.text_on');

    if(textDiv.classList[1] != 'text_on'){
        defaultTextOn.classList.remove('text_on');
        con01_main.classList.remove('con01_main_on');

        con01_mainOn.classList.add('con01_main_on');
        textDiv.classList.add('text_on');
    }else{
    }
}

//부채내용 인디게이터 버튼
function debtContentBtn(){
    event.preventDefault();
    var target = event.target;
    var currentIndecater = document.querySelector('.con03_span_on');
    var targetName = event.target.parentNode.classList[0];
    showSlide(getIndex(target));
    currentIndecater.classList.remove('con03_span_on');
    event.target.classList.add('con03_span_on');
    
}

function showSlide(index){
    var con03Ul = document.querySelector(".con_03").children[0].children[0];
    con03Ul.style.left = (index * -120) + "%";
}

function getIndex(target) {
    var i = 0;
    while((target = target.previousSibling) != null ) {
        if(target.nodeType != 3){
            i++;
        }
    }
    return i;
  }