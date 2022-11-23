$(document).ready(function(){
    // slide menu
    $(".menu > li").click(function(){
        $(this).children("ul").slideToggle(); // menu쪽 li를 누르면 안에 내용이있으면 펼쳐지고 없으면 반응없음

    });

    // menu_wrap
    $(".all_menu").click(function(){
        $(".menu_wrap").animate({"left":"0"}, "slow"); // 메뉴를누르면 왼쪽에서나옴


    });

    $(".menu_close").click(function(){
        $(".menu_wrap").animate({"left":"-100%"}); // X를클릭하면 다시들어감
    });

    // tab(화면구성)
    // 초기설정
    $("#container article:not("+ $("#gnb ul li a.selected").attr("href") +")").hide(); // article(list_wrap2,3,4,5)들 숨기기
    
    //이벤트
    $("#gnb ul li a").click(function(){
        // 메뉴 -> 1. 모든 메뉴에서 클래스 제거 2.클릭된 메뉴만 클래스 추가
        $("#gnb ul li a").removeClass("selected"); // 1
        $(this).addClass("selected"); // 2

        // 내용 -> 1. 모든 내용 숨김 2.클릭된 메뉴와 연결된 내용만 보임
        $("#container article").hide();  // 1
        $ ( $(this).attr("href") ).show();  // 2
        return false;     

    });


});