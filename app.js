

// ................................................CHAHPTER # (04).....................................!


// Legal And Illegal Variables 

// Question # 01
// Declare 3 variables in one statement.

// var name = "Muzammil Hussain";
// var age  = 18;
// var profession = "developer";

// alert("Name: " + name + "\nAge: " + age + "\nProfession: " + profession);

//...................................................................................!

// Question # 02 
// Declare 5 legal & 5 illegal variable names.

// 5 Legal variables Names .

// firstName
// numberOfStudents
// _userAge
// totalAmount$
// camelCaseVariableName


// 5 Ilegal variables Name .

// 123variable
// my-variable
// var
// var user@name;
// function

//....................................................................................!

// Question # 03
// Display this in your browser

// document.write("<h2> Rules for naming JS variables </h2>");
// document.write("<p>  Variables names can only contain numbers , $ , and _  </p>");
// document.write ("<p> for example $my_1stVariable </p> ");
// document.write(" <p>Variable must begin with a leters , $ , or _  </p>");
// document.write("<p> for example  $name , _name </p>");
// document.write ("<p> Variables names are case Sensitive </p>");
// document.write ("<p> Variable name should not be JS keywords");

 //....................................CHAPTER--END................................................!


 //...........................................CHAPTER # (05)..........................................!

 //........Question # 01......
//  Write a program that take two numbers & add them in a new variable. Show the result in your browser.


// var first = 50;
// var second = 30;
// var result = first + second ;
// document.write("Sum Of " + " " + first + " " + "And " + " " + second + " " + " Is " + result);


//...........Question # 02...
//Repeat task1 for subtraction, multiplication, division & modulus.

//  subtraction 

//  var first = 20;
//  var second = 65;
//  var result = first - second ;
//  document.write(`Subtraction Of  ${first} and  ${second}  is ${result}`);


//Multiplication 

//  var first = 30;
//  var second = 20;
//  var result = first * second ;
//  document.write(`Multiplication of   ${first} and  ${second}  is ${result}`);

//Division 

//  var first = 15;
//  var second = 205;
//  var result = first / second ;
//  document.write("Division of  " + " " + first + " " + "and " + " " + second + " " + " is " + result);


//..................Question # 03.. 

// var a ;
// document.write("Value of the a after declaration is " + a);
// a = 26;
// document.write(" <br> Initial value :" + a);
// a++;
// document.write("<br> After increment is  " + a);
// a = 14+ a;
// document.write("<br> After addition is " + a );
// a--;
// document.write("<br> After decrement value is " + a);
// a = a/3;
// document.write(`<br> The remainder is  :${a}`);



 // Store ticket price in a variable
//  var ticketPrice = 600;

 // Calculate the cost of buying 5 tickets
//  var totalCost = ticketPrice * 5;

 // Display the result
//  document.write("<p>The cost of buying 5 movie tickets is: " + totalCost + " PKR</p>");


//........Question # 05....
//Write a script to display multiplication table of any number in your browser. 

// var tableFour = "4x1=4<br>"
// document.write(tableFour)

// var tableFour = "4x2=8<br>"
// document.write(tableFour)

// var tableFour = "4x3=12<br>"
// document.write(tableFour)

// var tableFour = "4x4=16<br>"
// document.write(tableFour)

// var tableFour = "4x5=20<br>"
// document.write(tableFour)

// var tableFour = "4x6=24<br>"
// document.write(tableFour)

// var tableFour = "4x7=28<br>"
// document.write(tableFour)

// var tableFour = "4x8=32<br>"
// document.write(tableFour)

// var tableFour = "4x9=36<br>"
// document.write(tableFour)

// var tableFour = "4x10=40<br>"
// document.write(tableFour)

//......................................................................................!

// ..............Question # 06.........
//The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.


// Store a Celsius temperature into a variable
// let celsius = parseFloat(prompt("Enter temperature in Celsius: "));

// Convert Celsius to Fahrenheit
// let fahrenheit = (celsius * 9/5) + 32;

// Output the result
// document.write(`${celsius}°C is ${fahrenheit}°F`);

// Store a Fahrenheit temperature into a variable
// let fahrenheitInput = parseFloat(prompt("Enter temperature in Fahrenheit: "));

// Convert Fahrenheit to Celsius
// let celsiusOutput = (fahrenheitInput - 32) * 5/9;

// Output the result
// document.write(`${fahrenheitInput}°F is ${celsiusOutput}°C`);

//.......................................................................................!

//.......................Question # 07...................
//Write a program to implement checkout process of ashopping cart system for an e-commerce website. Store
//the following in variables


// // Store the price of item 1 and item 2
// const priceItem1 = 20;
// const priceItem2 = 30;

// // Store the ordered quantity of item 1 and item 2
// const quantityItem1 = 2;
// const quantityItem2 = 1;

// // Store the shipping charges
// const shippingCharges = 5;

// // Compute the total cost
// const totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// // Create a receipt message
// const receiptMessage = `
//     <h2>Shopping Cart</h2>
//     <p>Item 1: $${priceItem1} x ${quantityItem1} = $${priceItem1 * quantityItem1}</p>
//     <p>Item 2: $${priceItem2} x ${quantityItem2} = $${priceItem2 * quantityItem2}</p>
//     <p>Shipping Charges: $${shippingCharges}</p>
//     <h5>Total Cost Of your order is: $${totalCost}</h5>
// `;

// // Display the receipt in the browser
// document.body.innerHTML = receiptMessage;
//.............................................................................................!

//.......Question # 08...............
//Store total marks & marks obtained by a student in 2variables. Compute the percentage & show the result in
//your browser

// // Store total marks and marks obtained by the student
// const totalMarks = 550;
// const marksObtained = 35;

// // Calculate the percentage
// const percentage = (marksObtained / totalMarks) * 100;

// // Create a message to display the result
// const resultMessage = `
//     <h2>Result</h2>
//     <p>Total Marks: ${totalMarks}</p>
//     <p>Marks Obtained: ${marksObtained}</p>
//     <h3>Percentage: ${percentage}%</h3>
// `;

// // Display the result in the browser
// document.body.innerHTML = resultMessage;
//............................................................................................!

//..........Question # 09.............

//Assume we have 10 US dollars & 25 Saudi Riyals. Write a
//script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)

// const totalRupees = (10 * 104.80) + (25 * 28);
// document.write("Total in Pakistani Rupees:", totalRupees);
//...........................................................................................!


//........Question #10...................

//Write a program to initialize a variable with somenumber and do arithmetic in following sequence:

// // Initialize the variable with some number
// let number = 10;

// // Perform arithmetic operations in a single expression
// const result = ((number + 5) * 10) / 2;

// // Output the result
// document.write("Result:", result);
//................................................................................!

//...........Question # 11.................................

//The Age Calculator: Forgot how old someone is Calculate it!

// // Store the current year
// const currentYear = new Date().getFullYear();

// // Store their birth year
// const birthYear = 1990; // Example birth year, you can change this value

// // Calculate their possible ages
// const age1 = currentYear - birthYear;
// const age2 = age1 - 1;

// // Output the ages to the screen
// document.write(`They are either ${age1} or ${age2} years old.`);

//.............................................................................!
//............Question # 12..............

//The Age Calculator: Forgot how old someone is Calculate it!

// // Store the radius of the circle
// const radius = 10; // You can change this value to any desired radius

// // Output the radius to the screen
// document.write(`The radius of the circle is ${radius}`);

// // Calculate the circumference
// const circumference = 2 * Math.PI * radius;

// // Output the circumference to the screen
// document.write(`The circumference is ${circumference.toFixed(2)}`);

// // Calculate the area
// const area = Math.PI * Math.pow(radius, 2);

// // Output the area to the screen
// document.write(`The area is ${area.toFixed(2)}`);


//...................(B)..........

// // Store the radius of the circle
// const radius = 10; // You can change this value to any desired radius

// // Calculate the circumference
// const circumference = 2 * Math.PI * radius;

// // Output the circumference to the screen
// console.log(`The circumference is ${circumference.toFixed(2)}`);

// // Calculate the area
// const area = Math.PI * Math.pow(radius, 2);

// // Output the area to the screen
// console.log(`The area is ${area.toFixed(2)}`);

//........................................................................!

//.........Question # 13.....................

//.................................(A)...................

// // Store your favorite snack into a variable
// const favoriteSnack = "chips";

// // Output the favorite snack
// document.write("My favorite snack is:", favoriteSnack);

//................................(B)......................

// //Store your current age into a variable.

// // Store your current age into a variable
// const currentAge = 18; // You can replace 30 with your actual current age

// // Output the current age
// document.write("My current age is:", currentAge);

//.................................(C)...............

// // Store a maximum age into a variable
// const maxAge = 80; // You can replace 80 with your desired maximum age

// // Output the maximum age
// document.write("The maximum age is:", maxAge);

//.................................(D)................

// //Store an estimated amount per day (as a number).

// // Store an estimated amount per day (as a number)
// const snacksPerDay = 2; // You can replace 2 with your estimated amount

// // Output the estimated amount per day
// document.write("Estimated amount of snacks per day:", snacksPerDay);

//.................................(E)...........

// // Store your current age
// const currentAge = 30; // Example current age, you can change this value

// // Store the maximum age
// const maxAge = 80; // Example maximum age, you can change this value

// // Store the estimated amount of snacks consumed per day
// const snacksPerDay = 2; // Example snacks per day, you can change this value

// // Calculate the remaining years until the maximum age
// const remainingYears = maxAge - currentAge;

// // Calculate the total number of snacks needed for the rest of your life
// const snacksNeeded = remainingYears * 365 * snacksPerDay;

// // Output the result
// document.write(`You will need ${snacksNeeded} snacks to last you until the ripe old age of ${maxAge}.`);

//.................................................................................!


//.................................Chapter # 11...........................

//....Question # ) 01.......................



// // Take a number in a variable
// const number = 10; // Example number, you can change this value

// // Perform required arithmetic operations
// const result = ((number + 5) * 10) / 2;

// // Display the result in the browser
// document.write(`<h1>The result is: ${result}</h1>`);

//..............................                            .........................

//.........Question # 02...............

//What will be the output in variables a, b & result afterexecution of the following script:
//var a = 2, b = 1;var result = --a - --b + ++b + b--;Explain the output at each stage:
//--a;--a - --b;--a - --b + ++b;--a - --b + ++b + b--;

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<p>The result is: " + result + "</p>");


//.......Question # 03...............

// // Take input a name from the user
// const userName = prompt("Enter your name:");

// // Greet the user
// alert("Hello, " + userName + "! Welcome!");


//...............................................................................................

//............Question # 04........

//Write a program to take input a number from user & display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5should be displayed by default.

// // Take input a number from the user
// let number = prompt("Enter a number:");

// // Convert the input to a number
// number = parseInt(number);

// // If the input is NaN or empty, set the default value to 5
// if (isNaN(number) || number === null || number === "") {
//     number = 5;
// }

// // Display the multiplication table
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (let i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

//................................................................................

//.........Question # 05..............

//Take three subjects name from user and store them in 3different variables.

// Take input three subjects' names from the user
// const subject1 = prompt("Enter the name of subject 1:");
// const subject2 = prompt("Enter the name of subject 2:");
// const subject3 = prompt("Enter the name of subject 3:");

// // Output the entered subjects' names using document.write
// document.write("<p>Subject 1: " + subject1 + "</p>");
// document.write("<p>Subject 2: " + subject2 + "</p>");
// document.write("<p>Subject 3: " + subject3 + "</p>");

//.......................................................................

//                   (B)                                     ............

// // Take input three subjects' names from the user
// const subject1 = prompt("Enter the name of subject 1:");
// const subject2 = prompt("Enter the name of subject 2:");
// const subject3 = prompt("Enter the name of subject 3:");

// // Store total marks for each subject
// const totalMarksPerSubject = 100;

// // Output the entered subjects' names and total marks using document.write
// document.write("<p>Subject 1: " + subject1 + " (Total Marks: " + totalMarksPerSubject + ")</p>");
// document.write("<p>Subject 2: " + subject2 + " (Total Marks: " + totalMarksPerSubject + ")</p>");
// document.write("<p>Subject 3: " + subject3 + " (Total Marks: " + totalMarksPerSubject + ")</p>");

//.....................................................................

//                     (C)                       .................

//Take obtained marks for first subject from user and stored it in different variable.

// // Take input three subjects' names from the user
// const subject1 = prompt("Enter the name of subject 1:");
// const subject2 = prompt("Enter the name of subject 2:");
// const subject3 = prompt("Enter the name of subject 3:");

// // Store total marks for each subject
// const totalMarksPerSubject = 100;

// // Take obtained marks for the first subject from the user
// const obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// // Output the entered subjects' names, total marks, and obtained marks for the first subject using document.write
// document.write("<p>Subject 1: " + subject1 + " (Total Marks: " + totalMarksPerSubject + ", Obtained Marks: " + obtainedMarksSubject1 + ")</p>");
// document.write("<p>Subject 2: " + subject2 + " (Total Marks: " + totalMarksPerSubject + ")</p>");
// document.write("<p>Subject 3: " + subject3 + " (Total Marks: " + totalMarksPerSubject + ")</p>");

//...................................................................................

//                              (D)                                 .................

// // Take input three subjects' names from the user
// const subject1 = prompt("Enter the name of subject 1:");
// const subject2 = prompt("Enter the name of subject 2:");
// const subject3 = prompt("Enter the name of subject 3:");

// // Store total marks for each subject
// const totalMarksPerSubject = 100;

// // Take obtained marks for each subject from the user
// const obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// const obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// const obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// // Output the entered subjects' names, total marks, and obtained marks for each subject using document.write
// document.write("<p>Subject 1: " + subject1 + " (Total Marks: " + totalMarksPerSubject + ", Obtained Marks: " + obtainedMarksSubject1 + ")</p>");
// document.write("<p>Subject 2: " + subject2 + " (Total Marks: " + totalMarksPerSubject + ", Obtained Marks: " + obtainedMarksSubject2 + ")</p>");
// document.write("<p>Subject 3: " + subject3 + " (Total Marks: " + totalMarksPerSubject + ", Obtained Marks: " + obtainedMarksSubject3 + ")</p>");

//.......................................................................

//                          (E)                                   .......

// // Take input three subjects' names from the user
// const subject1 = prompt("Enter the name of subject 1:");
// const subject2 = prompt("Enter the name of subject 2:");
// const subject3 = prompt("Enter the name of subject 3:");

// // Store total marks for each subject
// const totalMarksPerSubject = 100;

// // Take obtained marks for each subject from the user
// const obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// const obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// const obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// // Calculate total marks
// const totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// const totalMarks = totalMarksPerSubject * 3;

// // Calculate percentage
// const percentage = (totalObtainedMarks / totalMarks) * 100;

// // Display the result in a table
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
// document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");

//.........................................................................................

//................................THE END..................................................