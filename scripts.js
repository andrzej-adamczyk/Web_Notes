var imie = "Andrzej";

var nazwisko = "Adamczyk";

const age = 30;

// alert(`Witam, z tej strony ${imie} ${nazwisko}`);

const nav_ = document.querySelector("h1");
console.log(nav_);

// nav_.innerHTML = "<strong>dupa</strong>";

// console.log(nav_);

// wygenerowanie tekstu

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

// funkcja do wygenerowania tekstu

myElement = "empty__fillContent";

myContent = "***Element uzupełniony przez funkcje JS fillContent()***";

function fillContent(element, content) {
  const emptyforFunction = document.querySelector(`.${myElement}`);
  emptyforFunction.innerHTML = myContent;
}

// funkcja do nadpisania tekstu

fillContent(myElement, myContent);

myElement = "empty__updateContent";

myContent = "***Element nadpisany przez funkcje JS updateContent()***";

const update_content = (element, content) => {
  const emptyforFunction = document.querySelector(`.${myElement}`);
  emptyforFunction.innerHTML = myContent;
};

update_content(myElement, myContent);

// obiekt

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  isStrong: true,
  commander: {
    name: "Adam",
    age: 20,
  },
};

// console.clear();

console.log(deathStar.commander.age);

console.log(console);

console.log(typeof deathStar.commander.name);

deathStar.fire("deathStar");

const name = "name";

console.log(deathStar[name]);

// bracket notation

const showMyPopulation = (myProperty) => {
  console.log(
    `Twoja własność to ${myProperty} a jej wartość to ${deathStar[myProperty]}`
  );
};

showMyPopulation("population");

console.log(deathStar["population"]);

console.log(deathStar.population);

console.log(deathStar.diameter);

console.log(deathStar["diameter"]);

// immutability w obiektach

const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Mazowiecka",
    city: "Lublin",
  },
};

const humanTwo = {
  name: "Adam",
  age: 32,
  address: {
    street: humanOne.address.street,
    city: humanOne.address.city,
  },
};

console.log(humanTwo.age);

humanOne.age = 31;

humanTwo.age = 35;

console.log(humanTwo);

console.log(humanOne);

const humanThree = humanOne;

console.log(humanOne);

console.log(humanThree);

humanOne["age"] = 1200;
console.log(humanOne);
console.log(humanThree);

const humanFour = {
  name: "Steve",
  age: humanOne.age,
};

console.log(humanFour);

humanFour.age = 23;

console.log(humanFour);
console.log(humanOne);

console.log(humanTwo);
console.log(humanOne);

humanOne.address.city = "Szczecin";

console.log(humanTwo.address["city"]);
console.log(humanOne["address"].city);

// tydzien V

if ("Java" != "JavaScript") {
  console.log("Java to nie Java script");
}

if ("Java" != "Java") {
  console.log("Java to nie Java script");
}

if (humanOne.age > humanThree.age) {
  console.log("Człowiek 1 jest starszy niż człowiek 2");
} else if ((humanOne.age = humanThree.age)) {
  console.log("Człowiek 2 jest w tym samym wieku co człowiek 1");
} else {
  console.log("Człowiek 2 jest starszy niż człowiek 1");
}

if (!humanOne.age && 1) {
  console.log(typeof []);
}

switch (humanOne.age) {
  case 4:
    console.log("4");
    break;

  case 1:
    console.log("1");
    break;

  default:
    console.log(`console.log.humanOne.age`);
}

const result = "Java" == "Java" ? { name: "Maciek" } : false;

console.log(result);

//WAT in Java Script

console.log("Test JS");

const value1 = [] + [];

console.log("wynik operacji [] + [] to" + value1);

console.log("typ danych wyniku[] + [] to " + typeof value1);

const value2 = [] + {};

console.log("wynik operacji [] + {} to " + value2);

console.log("typ danych wyniku [] + {} to " + value2);

const value3 = {} + [];

console.log("wynik operacji {} + [] to " + value3);

console.log("typ danych wyniku {} + [] to " + typeof value3);

const value4 = {} + {};

console.log("wynik operacji {} + {} to " + value4);

console.log("typ danych wyniku {} + {} to " + typeof value4);

// const arraySample = array(16);

// console.log(arraySample);

// console.log(typeof arraySample);
