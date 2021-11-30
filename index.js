// // 1 uzduotis

function task1(percentage) {
    if(percentage >= 90){
        console.log("Grade A")
    }
    else if(percentage >= 80){
        console.log("Grade B")
    }
    else if(percentage >= 70){
        console.log("Grade C")
    }
    else if(percentage >= 60){
        console.log("Grade D")
    }
    else if(percentage >= 40){
        console.log("Grade E")
    }
    else if(percentage < 40){
        console.log("Grade F")
    }
}
task1(30);

//2 uzduotis
const percentagee = 50;
switch(true) {
    case (percentagee >=90):
        console.log("Grade A")
      break;
      case (percentagee >=80):
        console.log("Grade B")
      break;
      case (percentagee >=70):
        console.log("Grade C")
      break;
      case (percentagee >=60):
        console.log("Grade D")
      break;
      case (percentagee >= 40):
        console.log("Grade E")
      break;
      case (percentagee < 40):
        console.log("Grade F")
      break;
  }

//3 uzduotis

function multiply(num1, num2) {
    if(num1 === num2){
        console.log("Veikas negalimas")
    }    else if(num1+num2 >= 20 <=30 || num1+num2 >= 50 <=60){
        console.log("sekmingai ivykdyta")
    }
     else if(num1 + num2 > 10){
        console.log("Atsakymas didesnis už 10")}


}
multiply(10,11)

//4 uzduotis
const person = {
    firstName: 'Jonas',
    lastName: 'Jonaitis',
    vehicles: {
      car: "BMW",
      airlines: {
        boeing: "777"
      }
    }
  }
  console.log(person.vehicles.airlines.boeing)
  console.log(person.vehicles.airlines['boeing'])
  //5 uzduotis

  function sum(person){
    return `Sveiki, mano vardas ${person.firstName} + ${person.lastName}`
  }
  sum();
// 6uzduotis
// push unshift
  a = [1,2,3,4,5];
  //pradzia
  a.unshift(0);
  console.log(a)
  //i pabaiga
  a.push(6)
  console.log(a)
  
//6 uzduotis
const tasks = [
    {
      id: 1,
      text: 'One',
      isCompleted: false
    },
    {
      id: 2,
      text: 'Two',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Three',
      isCompleted: true
    }
  ];
  const filteredStats = tasks.filter(status => status.isCompleted === true)
  console.log(filteredStats)

  //7 uzduotis

  const modified = tasks.map(taskss => ({text: taskss.text, isCompleted: taskss.isCompleted}));
  console.log(modified)