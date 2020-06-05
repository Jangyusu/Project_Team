# 한국관광공사 웹 사이트 리뉴얼
> 기존 한국관광공사 웹 사이트의 레이아웃과 기능을 개선하여 새롭게 리뉴얼한 포트폴리오용 웹 사이트 제작

## 시작하며...
* 본 웹 사이트는 상업용 목적이 아닌 개인용 포트폴리오 목적으로 제작되었습니다.
* URL : https://jangyusu.github.io/Project_Team

### 작업 기간
* 2020-02 ~ 2020-03 (약 1달)

### 참여도
* 50%

### 사용 기술
* html5
* css3
* Javascript

### 호환 기종
* PC
* Tablet
* Mobile

### 웹 사이트 예시
![page_main](https://github.com/Jangyusu/Project_Team/blob/master/readme/img/index_01.jpg)
![page_main](https://github.com/Jangyusu/Project_Team/blob/master/readme/img/sub_01.jpg)
![page_main](https://github.com/Jangyusu/Project_Team/blob/master/readme/img/sub_02.jpg)
![page_main](https://github.com/Jangyusu/Project_Team/blob/master/readme/img/sub_03.jpg)
![page_main](https://github.com/Jangyusu/Project_Team/blob/master/readme/img/sub_04.jpg)
![page_main](https://github.com/Jangyusu/Project_Team/blob/master/readme/img/login_01.jpg)

## 상세 설명
### 주요 코드
#### 메인 페이지
```javascript
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
```

#### 공통 페이지
```javascript
window.addEventListener("scroll", function () { //스크롤시 헤더 on/off
    scrollEnd = document.documentElement.scrollTop;

    if (scrollStart > scrollEnd) { //위로 스크롤
        header.classList.remove("active");
    } else { //아래로 스크롤
        header.classList.add("active");
    }

    scrollStart = scrollEnd;
})
```

### 기능 구현
1. 첫번째 팀 프로젝트
2. 메인페이지 및 서브페이지(정보공개, 국민참여, 사업, 알림) 100% 참여
3. 메인페이지 비주얼 슬라이드 구현(버튼 및 자동)
4. 최상단으로 이동할 수 있는 버튼 구현
5. 스크롤 시 header on/off 구현

### 크로스 브라우징
* Crome
* Firefox
* Samsung Internet

### 반응형 화면 해상도
* 1900 x ...
* 1530 x ...
* 1380 x ...
* 1200 x ...
* 1000 x ...
* 768 x ...
* 600 x ...

### 버전 관리
* ver 1.0.0
  * 한국관광공사 웹 사이트 리뉴얼 오픈

### 정보
* 장유수 (참여도 50%)
  * *Github* (https://github.com/Jangyusu)
  * *E-mail* (dbtnss@naver.com)
* 이승현 (참여도 25%)
  * *Github* (https://github.com/lsh58)
  * *E-mail* (tmdgus508@naver.com)
* 장재혁 (참여도 25&)
  * *Github* (https://github.com/jhjang92)
  * *E-mail* (jhjang92@kakao.com)

### 개선해야할 점
* 로그인 페이지 반응형 작업
* IE 브라우저에서도 정상적으로 동작할 수 있게 크로스 브라우징 구현
