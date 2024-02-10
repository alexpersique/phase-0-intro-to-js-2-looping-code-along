// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }


const names = ["Guadalupe", "Ollie", "Aki"];
const messages = [];

let writeCards = (name, occasion) => {
  for (let i = 0; i < name.length; i++) {
    messages.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
  }
  return messages;
};

let countDown = () => {
  let num = 10;
  while (num >= 0) {
    console.log(num);
    num -= 1;
  }
};

