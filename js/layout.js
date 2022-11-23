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



});