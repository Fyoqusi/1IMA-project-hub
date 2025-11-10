function toggleSignInPopUp() {
  const signInPopUp = document.getElementById("SignInPopUp");
  if (signInPopUp.style.display === "none") {
    signInPopUp.style.display = "block";
  } else {
    signInPopUp.style.display = "none";
  }
}
