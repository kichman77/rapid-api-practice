import refs from "./refs.js"
import fetch from "./fetch.js"
import template from "../template/template.hbs"
import debounce from "lodash.debounce"


refs.input.addEventListener("input", debounce((e) => {
  refs.list.innerHTML = "";
  console.log(e.target.value);
  fetch.search = e.target.value
  fetch.getFetch().then(data => {
    console.log(data.drinks)
    const drink = template(data.drinks)
    //  console.log(drink);
    refs.list.insertAdjacentHTML("beforeend", drink)
    const ingredients = document.querySelectorAll(".ingredient-item")
    console.dir(ingredients);
    ingredients.forEach(el => {
      if (el.textContent === "") {
        el.style.display = "none"
      }
    })
  })
  refs.input.value = "";
},1000))

