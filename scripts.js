var imie = "Andrzej";

var nazwisko = "Adamczyk";

const age = 30;

// alert(`Witam, z tej strony ${imie} ${nazwisko}`);

const nav_ = document.querySelector("h1");
console.log(nav_);

// nav_.innerHTML = "<strong>dupa</strong>";

// console.log(nav_);

const empty = document.querySelector(".empty__element");
empty.innerHTML = "***Tekst wygenerowany przez Java Script***";

function calculate(myNumber) {
  var outcome = myNumber * 7;
  console.log(`Dostałem ${myNumber}`);
  console.log(outcome);
  return `Dostałem ${myNumber * myNumber}`;
}

function greet(imie, nazwisko) {
  console.log(`Cześć ${imie} ${nazwisko}, masz ${age} lat`);
}

greet("Ada", "Adam");

calculate(7);

const myResult = calculate(age);

console.log(myResult);

myElement = "empty__fillContent";

myContent = "***Element uzupełniony przez funkcje JS fillContent()***";

function fillContent(element, content) {
  const emptyforFunction = document.querySelector(`.${myElement}`);
  emptyforFunction.innerHTML = myContent;
}

fillContent(myElement, myContent);

myElement = "empty__updateContent";

myContent = "***Element nadpisany przez funkcje JS updateContent()***";

const update_content = (element, content) => {
  const emptyforFunction = document.querySelector(`.${myElement}`);
  emptyforFunction.innerHTML = myContent;
};

update_content(myElement, myContent);
