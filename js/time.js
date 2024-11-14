$(document).ready(function() {
    $('.slide').bxSlider({
        auto: true, // 자동 슬라이드
        pause: 3000, // 슬라이드 간격
        controls: true, // 이전/다음 버튼 표시
        pager: false, // 페이지 표시 비활성화
        nextSelector: '.next', // 다음 버튼 선택자
        prevSelector: '.prev' // 이전 버튼 선택자
    });
});
$(".page-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
})

// $(document).ready(function() {
//     // 로그인 버튼 클릭 시 모달 열기
//     $(".login-button").click(function(event) {
//         event.preventDefault(); // 기본 링크 동작 방지
//         $("#loginModal").fadeIn(); // 모달 열기
//     });

//     // 닫기 버튼 클릭 시 모달 닫기
//     $("#closeModal").click(function() {
//         $("#loginModal").fadeOut(); // 모달 닫기
//     });

//     // 모달 외부 클릭 시 모달 닫기
//     $(window).click(function(event) {
//         if ($(event.target).is("#loginModal")) {
//             $("#loginModal").fadeOut(); // 모달 닫기
//         }
//     });
// });
$(document).ready(function() {
    // 로그인 버튼 클릭 시 로그인 모달 열기
    $(".login-button").click(function(event) {
        event.preventDefault(); // 기본 링크 동작 방지
        $("#loginModal").fadeIn(); // 로그인 모달 열기
    });

    // 회원가입 버튼 클릭 시 회원가입 모달 열기
    $(".signup-button").click(function(event) {
        event.preventDefault(); // 기본 링크 동작 방지
        $("#signupModal").fadeIn(); // 회원가입 모달 열기
    });

    // 로그인 모달 닫기
    $("#closeModal").click(function() {
        $("#loginModal").fadeOut(); // 로그인 모달 닫기
    });

    // 회원가입 모달 닫기
    $("#closeSignupModal").click(function() {
        $("#signupModal").fadeOut(); // 회원가입 모달 닫기
    });

    // 모달 외부 클릭 시 모달 닫기
    $(window).click(function(event) {
        if ($(event.target).is("#loginModal")) {
            $("#loginModal").fadeOut(); // 로그인 모달 닫기
        } else if ($(event.target).is("#signupModal")) {
            $("#signupModal").fadeOut(); // 회원가입 모달 닫기
        }
    });
});





