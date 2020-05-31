function handleClick() {
  $('.menu').click('li', function () {
    $('.toggler').prop('checked', false);
  });
}
$(handleClick);
