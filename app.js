//  chapter 1
//  task 1
// alert("Hello welcomer to java script task 1");
// task 2
// alert("Error! Please Enter a valid password");
// task 3
// alert("Welcomee to js land... " + "\n" + "Happy coding");
//task 4
// alert("Welcome to js land..");
// alert("Happy Coding!");
//task 5
// alert("hello... I can run JS through my web browser's console")


//Chapter 2
//task 1
// var username;
//task 2\
// var myname = "Hummad Umer Siddiqui";
// document.write(myname);

//task 3
// var message = "Hello World";
// alert(message);

//Task 4
// var name;
// var age;
// var certification;
// name = "Hummad Umer";
// age = 26;
// certification = "Php Developer";
// alert(name);
// alert(age + " " + "Year Old");
// alert(certification);


//Task 5
// var i;
// var j;
// for (i = 0; i <= 5; i++) {
//     document.write("</br>");
//     for (j = 0; j < 6 - i; j++) {
//         document.write("&nbsp&nbsp");
//     }
//     for (j = 6 - i; j <= 5; j++) {

//         document.write("*");
//     }
// 
// for (var i = 1; i <= 5; i++) {
//     document.write("<br>");
//     for (var j = 0; j < 5; j--) {
//         document.write("*");
//}     }

//Task 6
// var email = "hummadumer80@gmail.com";
// alert("My email address is " + " " + email);

//Task 7

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + " " + book);

//task 8
// document.write("Yah! I can write HTML  content through Java Script");
//task 9
// var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);

//Chspter 3
//task 1:
// var age = 15;
// alert("I am " + age + " " + "years old");

//task 2:

// var number = "12";
// alert("You have visited this site" + " " + number + " " + "times");

//task 3:

// var birthYear = 1993;
// document.write("My birth Year is " + " " + birthYear + "<br>" + "Data type of my declared variable is" + " " + typeof(birthYear));

//task 4
// var name = prompt("Please enter your name");
// var product = prompt("Please enter your product");
// var qty = prompt("Please Enter the product's quantity");
// document.write(name + " " + "ordered" + " " + qty + " " + "T-shirts " + "on XYZ clothing store");

//chapter 4;
//task 1
//var name, fname, age;

//task 2
//legal variable name
//var FirstName, LastName, FatherName, Age;
//illegal varviable name
// var 123name,first name,&b ,+b,123;

// task 3
// part a
// document.write("Rules for naming JS variables");
// document.write("<br>");
// part b
// document.write("Variable can only contain , numbers,$ or _ for example: $my_1stVariable ");
// document.write("<br>");
// part c
// document.write("Variable must begin with a letter,$ or _ for example: $name,_name or name ");
// document.write("<br>");
// part d
// document.write("Variable name are case sensitive ");
// document.write("<br>");
// part e
// document.write("Variable name should not be a JS Keyword ");
// document.write("<br>");



//Chapter 5(
// var FirstNumber = prompt("Please Enter first number");
// var SecondNumber = prompt("Please Enter second number");
// var sum = FirstNumber + SecondNumber;
// document.write("sum of " + " " + FirstNumber + " " + "and " + SecondNumber + " " + "is" + " " + sum);


// var FirstNumber = prompt("Please Enter first number");
// var SecondNumber = prompt("Please Enter second number");
// var sum = FirstNumber - SecondNumber;
// document.write("Difference of " + " " + FirstNumber + " " + "and " + SecondNumber + " " + "is" + " " + sum);

// var FirstNumber = prompt("Please Enter first number");
// var SecondNumber = prompt("Please Enter second number");
// var sum = FirstNumber / SecondNumber;
// document.write("Divivsion of " + " " + FirstNumber + " " + "and " + SecondNumber + " " + "is" + " " + sum);

// var FirstNumber = prompt("Please Enter first number");
// var SecondNumber = prompt("Please Enter second number");
// var sum = FirstNumber * SecondNumber;
// document.write("product of " + " " + FirstNumber + " " + "and " + SecondNumber + " " + "is" + " " + sum);

// task 3
// var value = 5;
// document.write("value after variable declaration is:" + " " + value);
// document.write("<br>");
// value++;
// document.write("value after increament is:" + " " + value);
// value = +value + 7;
// document.write("value after addition is:" + " " + value);
// document.write("<br>");
// value--;
// document.write("value after variable decreament is:" + " " + value);
// value = value % 3;
// document.write("<br>");
// document.write("The remainder  is:" + " " + value);

// task 4
// var cost = 600;
// var qty = 5;
// var product = cost * qty;
// document.write("Total Cost to buy % tickets in a movies is " + " " + product + " " + "PKR");

// task 5
// var num = prompt("enter any number");
// for (var i = 1; i <= 10; i++) {
//     var product = num * i;
//     document.write("<br>");
//     document.write(num + "*" + i + "=" + product);
//}

// task 6 

// var c = prompt("Please Enter the temperature in Celcius");
// var f = c * (9 / 5) + +32;
// document.write(c + "\xB0 C" + " " + "is" + " " + f + "\xB0 F");


// var f = prompt("Please Enter the temperature in fehrenheit");
// var c = (f - 32) * (5 / 9);
// document.write(f + "\xB0 F" + " " + "is" + " " + c + "\xB0 C");

// task 8
// var priceA = 200;
// var qtyA = 3;

// var priceB = 300;
// var qtyB = 1;

// var shipingCharges = 100;

// var sum = +priceA + +priceB + +shipingCharges;
// document.write("Price of item 1 is :" + " " + priceA);
// document.write("<br>");
// document.write("Quantity of item 1 is :" + " " + qtyA);
// document.write("<br>");
// document.write("Price of item 1 is :" + " " + priceB);
// document.write("<br>");
// document.write("Quantity of item 1 is :" + " " + qtyB);
// document.write("<br>");
// document.write("Price of item 1 is :" + " " + priceA);
// document.write("<br>");
// document.write("Shipping Charges :" + " " + shipingCharges);
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("Total cost of your order is " + " " + sum);


//task 8 
// var total_marks = prompt("Plesase Enter the total marks");
// var marks_obtain = prompt("Plesase Enter the  marks obtain");
// var per = (total_marks / marks_obtain) * 100;
// document.write("Percentage :" + per + "%");

//task 10
// var Us = 104.80 * 10;
// var SA = 28 * 25;
// var sum = +Us + SA;
// document.write("Total Currency in PKR:" + " " + sum);

//task 10
// var num = 10;
// var exp = ((num + +5) * 10) / 2;
// document.write("Total :" + " " + exp);

//task 11 
// var current_year = 2020;
// var birth_Year = 1993;
// document.write("Current Year :" + current_year);
// document.write("<br>");
// document.write("Current Year :" + birth_Year);
// document.write("<br>");
// var age = current_year - birth_Year;
// document.write("yout age is :" + age);


//task 12
// var r = prompt("Please Enter the radius of the circle");
// var pi = 3.14;
// var sqr = r * r;
// var circum = 2 * pi * r;
// var Area = pi * sqr;

// document.write("Radius of a circle is :" + " " + r);
// document.write("<br>");
// document.write("Circumference of a circle is :" + " " + circum);
// document.write("<br>");
// document.write("Area of a circle is :" + " " + Area);

//task 13
// var fav_snacks = "Lays";
// var current_age = 15;
// var max_age = 65;
// var amt_per_day = 4;





//chapter 6-9
// //task 1
// var a = 10;
// document.write("The value a is " + " " + a)
//     ++a;
// document.write("<br>");
// document.write("The value ++a is " + " " + a)
// document.write("<br>");
// a++;
// document.write("The value a++ is " + " " + a)
// document.write("<br>");
// --a;
// document.write("The value --a is " + " " + a)
// document.write("<br>");
// a--;
// document.write("The value a-- is " + " " + a)
// document.write("<br>");



//task 3
// var user = prompt("Please Enter Your Name");
// document.write("Welcome" + " " + user);
//task 5
// var num = prompt("enter any number");
// for (var i = 1; i <= 10; i++) {
//     var product = num * i;
//     document.write("<br>");
//     document.write(num + "*" + i + "=" + product);
//}

//task  6

// var sub1 = prompt("Please Enter Your Sub 1");
// var sub2 = prompt("Please Enter Your Sub 2");
// var sub3 = prompt("Please Enter Your Sub 3");
// var m1 = prompt("Please Enter Your Sub1 marks");
// var m2 = prompt("Please Enter Your Sub2 marks");
// var m3 = prompt("Please Enter Your Sub3 marks");
// var total = 100;
// var per1 = (m1 / total) * 100;
// var per2 = (m2 / total) * 100;
// var per3 = (m3 / total) * 100;
// document.write("<h6>" + "subject" + " " + "Total Marks" + " " + "Obtain marks" + " " + "Percentage" + "</h6>");
// document.write("<br>");
// document.write(sub1 + " " + "&nbsp &nbsp &nbsp" + total + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + m1 + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + per1+"%");
// document.write("<br>");
// document.write(sub2 + " " + "&nbsp &nbsp &nbsp" + total + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + m2 + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + per2+"%");
// document.write("<br>");
// document.write(sub3 + " " + "&nbsp &nbsp &nbsp" + total + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + m3 + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + per3 +"%");
// document.write("<br>");


// Chapter 9 -11

//task 1
// var city = prompt("Please Enter The City Name");
// if (city == "karachi" || city == "Karachi") {
//     document.write("Welcome to the City of Light");
// } else {
//     document.write("Invalid City ");
// }

//task2

// var gender = prompt("Please Enter Your Gender");
// if (gender == "male") {
//     document.write("Good Morning Sir");
// } else if (gender == "female") {
//     document.write("Good Morning mam");
// } else {
//     document.write("Invalid option");
// }


//task 3
// var traffic_light = prompt("Please Enter Traffic Light");
// if (traffic_light == "red") {
//     document.write("Must Stop");
// } else if (traffic_light == "Yellow") {
//     document.write("Ready to move");
// } else if (traffic_light == "green") {
//     document.write("Move Now");
// } else {
//     document.write("Invalid Light Selection");
// }



//task 4
// var fuel = prompt("Please Enter remaining fuel");
// if (fuel < 0.25) {
//     document.write("Please refill fuel in your car");
// } else {
//     document.write("No need to rifiil");
// }