
$('a[href^="#"]').click(function(){
  let href= $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $("html, body").animate({scrollTop:position}, 600, "swing");
  return false;
});

/*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function() {
    $('.fadein').each(function() {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });