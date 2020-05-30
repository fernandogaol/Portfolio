function handleClick() {
  $('.hamburger .menu').click('li', function (event) {
    $('.hamburger a').collapse('hide');
  });
}
$(handleClick);
