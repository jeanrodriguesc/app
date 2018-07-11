$("#submit").click(function () {
  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();

  if (name == '' || email == '' || phone == '') {

    alert('OI');
  }
})
