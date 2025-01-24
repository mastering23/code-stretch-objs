const personList = [
  {
    name: "Billy",
    age: 16,
    friends: ["Timmy", "Jimmy"],
  },
  {
    name: "Peter",
    age: 14,
    friends: ["Mike", "Jimmy"],
  },
  {
    name: "Tonny",
    age: 15,
    friends: ["Mike", "Billy"],
  },
];

const findPersonByName = (personArr, name) => {
  for (let i = 0; i < personArr.length; i++) {
    if (personArr[i].name.toLowerCase() === name.toLowerCase()) {
      return personArr[i];
    }
  }
  return false;
};

let userInput = ""; 

while (userInput !== "exit") {
  userInput = window.prompt("Enter name (or type 'exit' to quit)").toLowerCase();
  if (userInput === "exit") {
    break;
  }

  const result = findPersonByName(personList, userInput);
  if (result) {
    console.log(result); 
    } else {
    console.log("Person not found...");
  }
}
