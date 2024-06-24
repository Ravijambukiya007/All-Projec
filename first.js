// let a = 10;
// let b = 5;

// console.log("a = 10", "b = 5");
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);

// logical opraters
// let a = 6;
// let b = 5;
// let cond1 = a > b;
// let cond2 = a === 6;

// console.log("cond1 & cond2 = ", cond1 && cond2);




// if else statement
// let num = 20;
// if (num % 2 === 0) {
//     console.log(num, "is even")
// } else {
//     console.log(num, "is odd");
// }



// for (i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log("i =", i);
//     }

// }

// let number = 20;
// let user = prompt("cheach the right number");
// while (user !== number) {

// }
// console.log("right number");




// arrays

// let marks = [98, 56, 45, 87, 38, 47, 12,];
// console.log(marks);


// concate Array

// let marvelheros = ["thore", "doctersrange", 'hulk'];
// let dcheros = ["ghostrider", "woolvarin", "aquaman"];

// let heros = marvelheros.concat(dcheros);
// console.log(heros);

// let marvelheros = ["thore", "doctersrange", 'hulk'];

// let val = marvelheros.shift("wonda");

// console.log("deleted", val);



// function

// function newFunction(msg) {
//     console.log(msg);
//     // console.log("hello coders!");
// }
// newFunction("hello jambukiya");

// function sum(a, b) {
//     console.log(a / b);
// }
// sum(100, 2)



// Aerrofunction

// const aerrosum = (x, y) => {
//     console.log(x + y);
// }


// forEach loop Array

// let mul = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// mul.forEach((mul) => {
//     console.log("val = ", mul * mul);
// });





// Q
// let n = prompt("Enter a number");

// let arr = [];

// for (let i = 0; i <= n; i++) {
//     arr[i - 1] = i
// }
// console.log(arr);

// let total = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log("totalSum = ", total);

// let factoriyal = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log("factoriyal = ", factoriyal)







// ara

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.append(newbtn);



// let btn1 = document.querySelector("btn1");



// btn1.onclick = () => {
//     console.log("btn was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };


// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

// let btn = addEventListener("click", () => {
//     console.log("button was clicked");
// });


// objext

// const details = {
//     fullname: "ravi jambukiya",
//     marks: 71,
//     rollnum: 7,
//     createfun: function () {
//         console.log("fullname = ", this.details);
//     },
// }

// let marks = 75;

// const student = {
//     marks() {
//         console.log("marks is = 75");
//     }
// }

// const ravi = {
//     grade: "A",
//     stumark() {
//         console.log("what is your marks");
//     }
// }

// ravi.__proto__ = student;



// class fordCar {
//     start() {
//         console.log("Car start");
//     }

//     stop() {
//         console.log("Car stop");
//     }
// }

// let musteng = new fordCar();



// Q1

// let DATA = ".. your data";

// class user {
//     constructor(name, email, rollnumber) {
//         this.name = name;
//         this.email = email;
//         this.rollnumber = rollnumber;

//     }
//     Datashow() {
//         console.log("data = ", DATA);
//     }
// }

// let student = new user("Ravi", "ravi@gmail.com", "07");
// let student1 = new user("jeet", "jeet@gmail.com", "5");



// callback

// let call = 20;
// for (i = 0; i <= 20; i++) {
//     console.log(call);
// }




// setTimeout((call) => {
//     console.log("one");
// }, 1000);

// setTimeout(() => {
//     console.log("two");
// }, 2000);

// setTimeout(() => {
//     console.log("three");
// }, 3000);

// setTimeout(() => {
//     console.log("four");
// }, 4000);

// setTimeout(() => {
//     console.log("five");
// }, 5000);

// setTimeout(() => {
//     console.log("six");
// }, 6000);

// setTimeout(() => {
//     console.log("seven");
// }, 7000);

// setTimeout(() => {
//     console.log("eight");
// }, 8000);

// setTimeout(() => {
//     console.log("nine");
// }, 9000);

// setTimeout(() => {
//     console.log("ten");
// }, 10000);



// async await

function api() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Api is suscees full");
            resolve(200);
        }, 2000);
    })
}
async function getCarData() {
    console.log("Your Car Data is Redy...")
    await api();
    await api();
    await api();
    setTimeout(() => {
        console.log("your api is fullfile");
    }, 2000)

    class fordCar {
        start() {
            console.log("Car start");
        }

        stop() {
            console.log("Car stop");
        }
    }

    let musteng = new fordCar();
    console.log(musteng);


}