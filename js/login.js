document.querySelector("form").addEventListener("submit", submitData);
function submitData(e) {
  e.preventDefault();
  var userEmail1 = document.getElementById("userEmail").value;
  var userPassword1 = document.getElementById("userPassword").value;
  var userData = JSON.parse(localStorage.getItem("users"));
  var flag = userData.filter(function (el) {
    return el.email === userEmail1 && el.password === userPassword1;
  });
  if (flag.length >= 1) {
    alert("Kamu berhasil login!");
    window.location.href="home.html";
  } else {
    alert("Email dan Password tidak sesuai!");
  }
  userEmail.value = "";
  userPassword.value = "";
}
function myFunction() {
  var x = document.getElementById("userPassword");
  var y = document.getElementById("eye");
  if (x.type === "password") {
    x.type = "text";
    y.src = "gambar/eye-solid.svg";
  } else {
    x.type = "password";
    y.src = "gambar/eye-slash-solid.svg";
  }
}
