function formValidation() {
  let emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let spans = document.querySelectorAll(".form > span");
  let span1 = document.querySelector(".span1");
  let span2 = document.querySelector(".span2");
  let span3 = document.querySelector(".span3");
  let span4 = document.querySelector(".span4");
  let errorImages = document.querySelectorAll(".inputWrapper img");
  if (firstName.value == "") {
    event.preventDefault();
    span1.style.display = "block";
    errorImages[0].style.display = "block";
  }
  if (lastName.value == "") {
    event.preventDefault();
    span2.style.display = "block";
    errorImages[1].style.display = "block";
  }
  if (email.value == "" || !email.value.match(emailPattern)) {
    event.preventDefault();
    span3.style.display = "block";
    errorImages[2].style.display = "block";
  }
  if (password.value == "") {
    event.preventDefault();
    span4.style.display = "block";
    errorImages[3].style.display = "block";
  }
  setTimeout(function () {
    spans.forEach(function (element) {
      element.style.display = "none";
    });
  }, 2500);
  setTimeout(function () {
    errorImages.forEach(function (element, index) {
      errorImages[index].style.display = "none";
    });
  }, 2500);
}

let buttonFreeTrial = document.querySelector("button");
buttonFreeTrial.addEventListener("click", formValidation);
