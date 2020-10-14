import refs from "./refs.js";

refs.signUp.classList.add('is-hidden')

refs.buttonIn.addEventListener("click", () => {
    refs.signUp.classList.remove("is-hidden")
})

refs.signUpForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target);
  // console.log(e.currentTarget);
    let login = e.currentTarget.elements.login.value
    let password = e.currentTarget.elements.password.value
    localStorage.setItem('login', login)
    localStorage.setItem('password', password)
})

refs.signUp.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.nodeName === "DIV") {
    refs.signUp.classList.add("is-hidden")
  }
})