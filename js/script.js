
$(function () {

  //선택박스
  $('.customSelectBox .btn').click(function () {

    $(this).toggleClass('active');

  });

  $('.customSelectBox .selectList li .selectBtn').click(function () {

    const text = $(this).text();
    $(this).parents('.customSelectBox').children('.btn').text(text).removeClass('active');

  });

});
