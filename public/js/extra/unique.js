var domainValue;
var real = $("#reg-submit-btn");
var fakeBtn = $("#reg-submit-btn-fake");
var emailBox = $('#reg-email'); 
var pass = $('#reg-pass'); 
var confirmPass = $('#reg-confirm');
var errorDisplay = $('#slim-error');
function checkUnique() {
  return $.ajax({ method: "GET", url: `/name.check/${domainValue}` });
}

setInterval(() => {
  console.log(pass.val(),confirmPass.val(),emailBox.val());
  domainValue = $("#reg-name").val();
  console.log("I am the domain value", domainValue);
  if (domainValue !== "") {
    checkUnique().done(function(data) {
      if (data.error_code === 404 && confirmPass.val().trim() !=="" && pass.val().trim() !="" && emailBox.val().trim() !=="" ) {
        fakeBtn.fadeOut(100, function() {
          real.fadeIn(100);
        });
        errorDisplay.fadeOut();
      } else {
        errorDisplay.fadeIn();
        errorDisplay.text('Check if you have never used the name before, and you have field all the parameters');
        real.fadeOut(100, function() {
          fakeBtn.fadeIn(100);
        });
      }
    });
  } else {
    errorDisplay.fadeIn();
    errorDisplay.text('Check if you have never used the name before, and you have field all the parameters');
    real.fadeOut(100, function() {
      fakeBtn.fadeIn(100);
    });
  }
}, 2000);
