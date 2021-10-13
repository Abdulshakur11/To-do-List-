// ============ HTML ELEMENTS ============
let elForm = $_(".form");
let elFormInput = $_(".input-js", elForm);
let elUnshiftBtn = $_(".unshift-checkbox");
let elResultList = $_(".result-list");

let arrayList = [];

// =================== FUNCTION =================

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  var inputValue = elFormInput.value.trim();
  
  if (elUnshiftBtn.checked) {
    arrayList.unshift(inputValue);
    console.log(arrayList);
  } else {
    arrayList.push(inputValue);
    console.log(arrayList);
  }  
  
  elFormInput.value = null;
  renderList();
})

let renderList = () => {
  elResultList.innerHTML = "";

  arrayList.forEach((item) => {
    var newLi = createElement("li", "item");// CREATED ELEMENTS IN JS
    var newLabel = createElement("label", "form-check-label result-text");// CREATED ELEMENTS IN JS
    var newCheckBox = createElement("input", "form-check-input");// CREATED ELEMENTS IN JS
    newCheckBox.type = "checkbox";
    newLabel.textContent = item;
    newCheckBox.id = item;
    newLabel.setAttribute('for', item);
  
    elResultList.appendChild(newLi);
    newLi.appendChild(newCheckBox);
    newLi.appendChild(newLabel);

    // ============ FUNCTION TO REMOVE ITEMS ==============
    newCheckBox.addEventListener("click", () => {
        arrayList.splice((this.value), 1);
        renderList();
      });

    });
  }
  


