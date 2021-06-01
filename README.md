# leonids-toys
This is the second book made by NSS for their students. Concepts covered throughout this book will help students acquire newfound knowledge or review essential material needed to code an application in the Javascript language. Data types, data structures, objects, arrays, iteration, functions, properties, conditional statements, and more are covered in Book 2. 

Book 2 - Leonid's Bespoke Toy Shoppe
In this book, you will gain the knowlege and understanding of working with data in the JavaScript language. You will apply that knowledge in two small projects and then take a self-assessment to gauge how much you have learned.

Data Types for Leonid's Toys
Leonid Androvsky is a second-generation Lithuanian who took over the hand-made toy shoppe that his father, Antonin, started and managed for 42 years. What was once known as Antonin's Toy World got renamed by Leonid to Leonid's Bespoke Toy Shoppe to attract more modern parents.

Leonid has hired you to write some code that will help him keep track of his toy inventory. He knows nothing about code or software, so you need to learn the basics so that he can start to automate his business practices.

Learning Objectives
You should be able to remember the basic data types you will be working with in JavaScript.
You should be able to describe the data type of different properties of real-world things that you represent in code.
Describing Toys as Data
As a software developer, you will always be thinking about data - the type of your data, the structure of your data, the format of your data, and how to display your data to humans in a Web browser. In the beginning of the course, here are the basic data types you will be working with.

Strings
You will use strings to represent words to be stored in your applications. A string is surrounded by double-quotes.

const firstName = "Emily"
const lastName = "Lemmon"
Numbers
If you store a person's age, or a measurement, or a count of something, you will store it as a number. There are two types of numbers.

Integers
These are whole numbers: 1, 3, 45, 1024

const applesInTheBasket = 16
Floats
Any fraction represented in decimal format: 1.333, 2.414, 3.14159, 86.75, 309.1

const pi = 3.14159
Booleans
The logical values of true and false. You will use these values as you might expect in your applications. For example, if you want to track if a user account is currently active or not, you can use true if the account is active, or false if it is inactive.

const accountIsActive = true
Practice: Toy Data Types
Think about what kind of data that Leonid would need to store about his toys. For example, the name of the toy. What data type would that be?

Write down some other properties of toys that he would need to keep track of, and the data type for each. When you're done, talk with your teammates, or talk to a member of your instruction team to review your ideas.

Data Structures
Data structures are also types in a software language, and therefore can be referred to as structural types, that are more complex than their more primitive cousins that you learned about in the previous chapter. There are two common data structures that you will be using in the course.

Learning Objectives
You should be able to remember the two data structures you will be working with in JavaScipt.
You should be able to explain the purpose of each data structure.
You should be able to understand that each individual resource in a data system requires a unique identifier.
You should be able to identify which property on an object is the unique idenifier.
Arrays
Arrays are used to store a list, or collection, of things. Just like when you go to the grocery store and you write down a list of things you need to buy. You could represent your list of grocery items in an array.

Insted of curly braces, an array of items is surrounded by square brackets [].

const groceryList = [ "Milk", "Tomato Sauce", "Bananas", "Taco Shells", "Jalapeno", "Sour cream"]
Object
An object is a collection of values that have keys assigned to them. Much the way you define variables to store values...

const age = 31
A key is used on an object to refer to values about the object. For example, you want to store all of the properties of a patient visiting a doctor's office. You would create an object to store all of those properties in a single data structure instead of in separate variables.

const megan = {
    id: 1,
    age: 31,
    firstName: "Megan",
    lastName: "Debity"
}

const jack = {
    id: 2,
    age: 28,
    firstName: "Jack",
    lastName: "Parsons"
}
You could also be selling phones and want to represent each phone as an object.

const iPhone = {
    id: 1,
    name: "iPhone",
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}

const galaxy = {
    id: 2,
    name: "Galaxy",
    maker: "Samsung",
    operatingSystem: "Android",
    price: 600,
    weight: 1.4
}
All of the keys and values are contained within the opening and closing curly braces {}. Each key/value pair is separated by a comma (except after the last one).

Unique Identifier
You may be wondering why all of the objects above have that weird id property on them. The reason is that nearly all data storage systems that you will use as a professional will have the requirement that every single time you create a new thing to be stored, it must have a unique, integer identifier.

Therefore, the first thing you create will have an id value of 1. The second thing you create will have an id value of 2. The unique identifier continues to get incremented by one every time you create something.

Because of this, you are going to add an id property to every single object you create from now one.

Eventually, you won't even need to do it. It will be handled for you. You just need to get used to the fact that everything will have that property.

Toy Objects
In this chapter, you will be using the object data structure that you learned about in Chapter 2 to represent some toys in code.

Learning Objectives
You should be able to demonstrate that you can create objects with the correct syntax.
You should be able to explain that variables are labels that refer to values, not the value itself.
Setup
Run these commands to have a file in which you can write your code.

mkdir ~/workspace/toy-objects
cd ~/workspace/toy-objects
touch leonids-toys.js
Then open that directory in Visual Studio Code with the following command.

code .
And open the leonids-toys.js file and follow the directions.

Directions
In the last chapter, you wrote down all of the properties of a toy that Leonid would need to track for his shoppe. Now you need to create some JavaScript objects to represent a couple of toys.

Define three toys of your choosing. Assign each one to a different variable name. Make your key names as descriptive as possible. Do not abbreviate or use shortcuts. For example, if you chose manufacturer as a property of a toy, do not shorten it to mfr.

For reference, here's the phone objects that were examples in the last chapter.

const iPhone = {
    id: 1,
    name: "iPhone",
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}

const galaxy = {
    id: 2,
    name: "Galaxy",
    maker: "Samsung",
    operatingSystem: "Android",
    price: 600,
    weight: 1.4
}
When you have defined three toy objects, review with a teammate or a member of your instructional team. When describing your object, also be as descriptive as possible and mention the data types.

"The iPhone object has a string maker property, a string operating system property, an integer price property, and a float weight property."

Toy Collection
In this chapter, you will build an array filled with objects. Each item in the array will be one of your toys.

Learning Objectives
You should be able to define an array that contains multiple objects.
You should be able to explain that objects defined directly in an array do not need to be assigned to variables.
You should be able to demonstrate that you can create an array of objects using the correct syntax.
Objects in Arrays
In the previous chapters, you created multiple objects and assigned each one to its own variable to be used later.

const iPhone = {
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}

const galaxy = {
    maker: "Samsung",
    operatingSystem: "Android",
    price: 600,
    weight: 1.4
}
Now you are going to put both of those objects into an array, rather than being discrete variables. Here's how you would put those phone objects into an array as one, large data structure.

const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]
Notice that the individual variables for each phone are gone. Now the entire array of phones is assigned to a single variable named, shockingly, phones. Naming the variable whose value is an array should always be plural. If you have an array of farm animals, call the variable animals, or even more descriptively, farmAnimals.

You get the point.

One thing you might do as a beginner is forget to put a comma between the two arrays. Look at the array above again and notice that there is a comma after the first closing curly brace, and before the second opening one.

[
    {

    },  <-- Don't forget this comma
    {

    },  <-- Or this one
    {

    }   <-- Don't need one at the end
]
Practice: Array of Toy Objects
Open your leonids-toys.js file again in Visual Studio Code, and re-write it so that the toy objects you created are all contained within a single array. Make sure you assign the array to a variable named toys.

After you rewrite the code, put console.log(toys) at the end of the code.

const toys = [
    // Add your objects here
]

console.log(toys)
To see if you got the syntax correct, open your terminal and navigate to the directory where your code file is located.

cd ~/workspace/toy-objects
Then run the following command to see the fruits of your labor.

node leonids-toys.js
If your syntax is correct, you should see your array of objects immediately displayed in the terminal.



If you syntax is incorrect, you will see a lot of gibberish that won't make much, if any, sense. If this happens, check your syntax again, but if you can't make it work, talk to a teammate or an instructor.

Note Collection
In this chapter, you will build an array filled with objects that represent notes about your daily learning.

Setup
These commands will create a directory for this project, and a JavaScript file in which you can write your code. Lastly, it will open up the directory is Visual Studio Code.

cd ~/workspace
mkdir daily-notes
cd daily-notes
touch notes.js

code .
Objects in Arrays
Just like with your phones and toys from the previous project, start with a variable whose value is an array. Define 2 objects in that array. Each object should have the following properties on it.

id (Unique identifier, or primary key)
subject (What you learned about)
date (The date you learned it)
feeling (How you felt when learning it)
timeSpent (Roughly how long you learned about it, minutes)
Vocabulary check: What is the data type of each property? Which ones should be a string type, and which should be an integer?

Here's some starter code. You add the rest of the properties to each object. You decide what the values of each property should be. Think back on the last few days of what you have worked on at NSS.

~/workspace/daily-notes/notes.js
const notes = [
    {
        id: 1,
    },
    {
    }
]
When you are done, use console.log() to display the data structure to the terminal. Then run the following command in the terminal to see if it works correctly and displays the array, or if you have a syntax error. If you do have an error, make sure you have all the commas that you need after your properties.

node notes.js
Did you remember to add an id property to the second object?

Display Toy Properties
Learning Objectives
You should be able to demonstrate how to display a properties's value on an object.
You should be able to explain the purpose of a for..of loop in JavaScript.
You should be able to identify the variable that represents the array in a for..of loop.
You should be able to identify the variable that represents each individual item in a for..of loop.
Accessing Properties
To access a property of an object, you use a dot (.). You start with the variable name whose value is the object, type a dot, then type the name of the property you want to see. Let's use our phones as an example again.

const iPhone = {
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}
If you want to see just the price of the iPhone, and nothing else, here's how you would display it with console.log().

const iPhone = {
    name: "iPhone",
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}

console.log(iPhone.price)
There's the pattern. iPhone is the variable whose value is the entire object, followed by a dot, then the name of the property to display.

Display All Prices with Iteration
You want to see the price of all phones that are stored in an array, like the one from the previous chapter.

const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]
Since those objects in the array aren't assigned to their own variables, then you have to iterate the array with a for..of loop. Here's how you do it.

for (const phone of phones) {
    console.log(phone)
}
What will be displayed in the console? The entire array? No, it won't. This for loop iterates the array, which is a fancy word for "access the first item in the array, then the next, then the next until there are no more items to access".

In this loop, the individual objects will now be stored in the variable phone. Each time. Here you see the power of variables. That's the definition of variable. Something whose value varies.

In this case, the value of the phone value varies as the for loop moves through the array one item at a time.



Notice that there are no square brackets [] around the output. Each object is displayed, one at a time.

Now you can use the dot notation to just display the prices instead of the entire object.

for (const phone of phones) {
    console.log(phone.price)
}


You can even be fancy and use string interpolation to put a dollar sign in front of the prices when they are output.

for (const phone of phones) {
    console.log(`Price is $${phone.price}`)
}


Practice: Display Property of All Toys
You get to pick one of the properties that you would like to display for all three of your toys in your array. Write a for..of loop that will iterate your array and use console.log() to display that property of each toy.

For example, if you have a name property on each toy, try accessing that property with dot notation inside the for..of loop and you should see output like this.

Adding New Objects to Arrays
In this chapter you will learn about the push() method that is available on every array which allows you to add things to the array.

Add a New Phone
Ok, so far, your phone business is pretty limited. You're only selling the iPhone and the Samsung Galaxy. You want to add the Google Pixel to your catalog. The first step is to define the new phone.

Make sure that each object you create has an id property value that is 1 greater than the last one.

// Existing phone catalog
const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

// Define a new phone
const pixel = {
    id: 3,
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 750,
    weight: 1.3
}
Now that you have a new phone object assgined as the value of the pixel variable, you can add that new object to the end of your array with push().

phones.push(pixel)
Now, when your for..of loop runs, you will see three prices listed instead of two.



Practice: New Toys
Your turn now.

Create 2 new toy objects after the initial array is created. Give each one a unique id property value.
Use the push() array method twice to add each object to the initial array.
Run your code with node leonids-toys.js in the terminal.
You should now see two new values being displayed in the terminal.

Adding a New Note
In this chapter you will practice using the push() method that is available on every array to add things a new notes to your array.

After your initial array definition, create a new note about today. Give it the same properties as the other two notes.

Don't forget the id property.

const noteAboutToday = {

}
Now that you have a new note object, add that new object to the end of your notes array with the push() method. Make sure you write this code before the console.log() so that all of your notes will be displayed in the terminal.

Displaying the Toy Catalog
String Interpolation
A quick reminder about string interpolation if you saw it in the pre-work. Otherwise, this is an introduction to string interpolation.

String interpolation is available in most high level languages like JavaScript, Python and C#. It allows you to easily build a long string with the value of variables injected into specific locations.

Here's a simple example first.

const age = 27
const name = "Melissa Bell"

const interpolatedString = `${name} is ${age} years old`
console.log(interpolatedString)
Note that the string is built with the backtick character. That's not a single quote at the beginning and end of the string. You can find the backtick character above the TAB key on your keyboard.

Then you use ${} to place the value of any variable into the string.

The above code would output the following string.

Melissa Bell is 27 years old
Phone Catalog String
Say you want to display the string "The Apple, Inc. iPhone costs 900 dollars."

All of that data is currently contained in the object representation you have been using in the previous chapters.

{
    id: 1,
    name: "iPhone",
    maker: "Apple, Inc.",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}
Here's how you could display that sentence for every phone in the array.

for (const phone of phones) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars.`)
}
Iterate Leonid's Toy Catalog
Your job is to display a simple catalog for Leonid's toys. Use string interpolation, dot notation to access object properties and your for..of loop to display it.

At this point, we're going to assume that you have properties like name, price, and color. Using those as an example, when you run node leonids-toys.js in the terminal, you could display this.



You may have different properties, so use whatever properties you have to build a sample string to be used in the bare bones, terminal-based catalog.

Displaying Your Note Journal
Your job is to display a list of your learning notes in the terminal. Remember to use string interpolation, dot notation to access object properties, and your for..of loop.

Display each note to look like the output below. The number on the first line is the primary key (the id property).

Note 1
2/14/2021
I learned JavaScript Objects.
I spent 124 minutes working on it
I felt frustrated.
To have a string output on multiple lines, just press enter when you want a line break. Here's an example.

const chickens = [
    {
        id: 1,
        name: "Little",
        fame: "Falling sky"
    },
    {
        id: 2,
        name: "Foghorn",
        fame: "Stupidity"
    }
]

for (const bird of chickens) {
    console.log(`Chicken ${bird.id}
Name is ${bird.name}
Famous for ${bird.fame}
---------
`)
}
The above code would output the following text to the terminal.

Chicken 1
Name is Little
Famous for Falling Sky
---------
Chicken 2
Name is Foghorn
Famous for Stupidity

Grocery Run
You open your refrigerator on Saturday morning and are immediately forlorn when you stare at the largely empty shelves. You need to make a run to the supermarket.

Setup
cd ~/workspace
mkdir shopping-list
cd shopping-list
touch shopping.js

code .
High Priority Items
Open shopping.js and declare a variable whose value will be an array filled with objects. Each object will represent an item that you first think of when you go to the store.

Common items are:

Milk
Eggs
Pizza rolls
A protein
Your favorite fruit
Sandwich buns
Condiments
You can create as many objects as you like. Make sure each one has a primary key and a price property. The rest of the properties are completely up to you.

Once you have an array of grocery item objects, use console.log() to output the contents of the array to the terminal. Run your code and make sure no errors are displayed.

Performing Logic in Loops
In the last chapter, you used string interpolation to output a more human-readable string based on the less human-readable JavaScript object properties. You used a for..of loop to step through an array and perform the same operation on every item in the array.

In this chapter, you will do one more operation before you output the string representation of your toys.

Times are tough for Leonid. He's finding that the market for bespoke, artisinal, locally sourced, hand crafted toys doesn't have quite the broad appeal that he thought. He has some loyal customers, but he does have the number of sales each month that he feels he needs to become more profitable.

To account for lower number of sales, he decides to increase the price of all of his toys across the board. After a few months of increased revenue, he believes he will have the cash needed to buy from other distributors and expand his offerings to appeal to a broader audience.

He thinks that having vegan-friendly toys with zero carbon footprint will be the extra appeal needed to start moving more products.

Heavier Phones
Your phone store just got notified by all of the major manufacturers that a new battery technology was just implemented in all of their phones. The battery will last 3x longer, but it has the side-effect of adding 0.4 grams of weight to every phone.

Rather than going and modifying every phone in your inventory (yeah, I know you only have 3 phones right now, but let's just imagine that you have 529), you decide to just display the increased weight when you print the catalog.

Since your output is done in a loop, and logic done in a loops is run for every item in the loop, you can write the following code.

// Step through the array of phones
for (const phone of phones) {
    // Add 0.4 grams to the weight of each phone
    phone.weight = phone.weight + 0.4

    // Add the weight to the output
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}


Yep. We see it, too. There's tons of extra numbers in the decimal places for some of those numbers. Don't worry. You didn't do anything wrong. Your computer isn't broken.

It's just an issue with how floats work with JavaScript. You can dig into that later in your career. Just ignore it for now.

Practice: Increasing Leonid's Prices
Using the strategy above, modify the current for..of loop that displays the toy catalog and increase the price of each toy before it is printed for the terminal-based catalog.

He wants the price of every toy to be inceased by 5%.

For example, here is the current example output for the catalog.



Here's the output if every toy's price is increased by 5%.

Finding an Item in an Array
Now that you have a basic catalog that Leonid can see in the terminal, he has a request. He wants to be able to find a single product by providing the unique id property. Your code should then display the details of the phone which has the specified id value.

If Inside For Loop
Your phone shop is getting popular these days. You have expanded your offerings and now you need the ability to have customers use a terminal in your store to find the information about a particular phone.

They come into your store after looking at your catalog, and should be able to enter in the unique id of a phone and then be shown all the details.

You are going to simulate this by specifying the id that you want to find at the very top of your code.

const phoneToFind = 2
Next, you need to modify the for..of loop to only display the product details if a condition is true. In your code, that condition is if the current phone's id value matches the value of the phoneToFind variable's value.

for (const phone of phones) {
    // Only one phone will cause the condition below to evaluate to true
    if (phone.id === phoneToFind) {
        phone.weight = phone.weight + 0.4
        console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
    }
}
With that condition in place, only one phone will be displayed instead of all phones.



This is a very basic implementation of tools that you use on the Web when you search for, or filter, products on a company's product page.

Finding a Note
In this chapter, you need to define a variable named searchTerm. Its value can be the value of any property value you like from your notes. For example, if one of your notes has a feeling property whose value is "Compunctious", your variable declaration would be the code below.

const searchTerm = "Compunctious"
Use that search term in your for..of loop to output only the object that has the value for the corresponding property.

Here is boilerplate code. You need to enter in the proper condition for the if code block. Refer back to the code you wrote for Leonid's toys since you won't remember this code yet.

It takes a long time to do it from memory.

for (const note of notes) {
    if () {

    }
}

Now That I Think About It...
After you wrote the initial, high-priority list of items you need to buy at the supermarket, you realize that there are lower-priority ones, and then there downright "wants".

You realize that the list might get very long, and you don't want to keep track of the primary key for each object that gets added to your shopping list.

Write a function named addToShoppingList that will add a new grocery item to your array. The function should add an id property to the grocery object that you provide as an argument when the function is invoked.

Also add a dateCreated property to the object whose value will be the current date and time.

Use your function to add 5 new items to your shopping list with a variety of prices ranging from $4 to $16.

Inventory Purchase Function
Time to revisit the unique identifier that you have been adding to every object. It's the id property on the object. It was mentioned in a previous chapter that you will eventually learn how to use database systems that will handle adding the id property to your data, and automatically increment the value by 1 each time a new resource is created.

In this chapter you are going to write a JavaScript function that will do that task for you for every toy that gets added to Leonid's catalog.

Phone
You are going to start with writing a function that adds a new phone to your phone store's inventory. In the example code so far, the phone properties include a primary key - which is the id property. Time to write a function that will add that property for you when you want to add a new phone to the array.

First, here's an array of phones you can use for reference.

const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]
Next, you can define an object to represent a new phone for your inventory. This time, don't add an id property intially. The function you will write will perform that task.

const pixel = {
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 399,
    weight: 1.2
}
Now write a function to add a phone to the array, with an id property added to it. The final code block is at the bottom of the chapter, and includes comments in the code to explain every step.

const addPhoneToInventory = (phoneObject) => {
    const lastIndex = phones.length - 1
    const currentLastPhone = phones[lastIndex]
    const maxId = currentLastPhone.id
    const idForNewPhone = maxId + 1

    phoneObject.id = idForNewPhone
    phones.push(phoneObject)
}

/*
    Now that the function is defined, you can invoke it
    and put a value in the parenthesis (a.k.a. the argument).
    The object will be stored in the `phoneObject`
    parameter for use in the function.
*/
addPhoneToInventory(pixel)

// Display all the phones
for (const phone of phones) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}


You can even display the raw data just to prove that the id property was added to the phone object.

addPhoneToInventory(pixel)

// Display all the phones
for (const phone of phones) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}

// Now show the raw data
console.log(phones)


Practice: Adding Toys with Functions
Add a similar function to your code for Leonid's application. The code will be nearly identical. You will be using different variable names - because proper variable naming is what professional developers always do - but the logic will be the same.

Final Example Code
const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

const addPhoneToInventory = (phoneObject) => {
    /*
        Step 1: Get maximum id current in array
    */
    // Get index of last item in array
    const lastIndex = phones.length - 1

    // Get the last object in the array
    const currentLastPhone = phones[lastIndex]

    // Get id property value of last phone
    const maxId = currentLastPhone.id


    /*
        Step 2: Increase the current max id by 1
    */
    const idForNewPhone = maxId + 1


    /*
        Step 3: Add the id property to the phone object
    */
    phoneObject.id = idForNewPhone


    /*
        Step 4: Add the phone object to the array
    */
    phones.push(phoneObject)
}

const pixel = {
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 399,
    weight: 1.2
}

addPhoneToInventory(pixel)

for (const phone of phones) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}

console.log(phones)


/*
    Commented out the "find" code
 */

// const phoneToFind = 2
//
// for (const phone of phones) {
//     if (phone.id === phoneToFind) {
//         phone.weight = phone.weight + 0.4
//         console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
//     }
// }

Writing New Note with no Id
Write a function named createNote that will add a new note to the notes array. The function should add an id property to the note object that you provide as an argument when the function is invoked.

const createNote = (note) => {
    /*
        Your code for adding `id` property to note object
     */

    notes.push(note)
}

// Create a new note object
const moreNewerNote = {

}

// Specify object as argument for function
//         |
//         |
//         V
createNote()
Optional Challenge: Date Created
One of the properties on your notes is date which provides information about the date you learned a concept. However, you may not actually create the note until the next day - perhaps you got caught in a crowd of maniacal porcupines on the way home, and the trauma prevented you from entering the note.

Whatever the reason, you want to record the exact moment that the note was stored in the array, even if was for a previous date.

In your function, add another property named dateCreated and make its value be the current date and time. The JavaScript Date() object is something to investigate to find out the current date/time.

If you want to try this challenge, and give it a few tries but get stuck, talk to your teammates or instruction team and get some helpful hints.

Filtering Your Grocery List
Now that you have a comprehensive grocery list, and are using your glorious function to add new items to it, it may be time to reevaluate some of the more expensive items on your list.

Show Only High Ticket Items
Use a for..of loop and an if() condition inside it to only display the items that cost more than $8 (if you don't have any items currently more expensive than that, go change a couple).

Now that you can display the more expensive items on your list, you can do some soul searching and think about if you really need four boxes of coffee cake snacks.

Functions
Functions are discrete units of work. They should perform one task, and do it well. Sometimes a function needs some input from you to do its job. Functions are difficult to understand for most beginners. This chapter lets you practice writing and using functions to help your knowledge of the syntax and understanding their behavior.

Setup
Create a new directory in your workspace. Add make an HTML page and a JavaScript file.

mkdir ~/workspace/functions
cd $_
touch index.html practice.js
Add boilerplate HTML and create a <script type="module" src="./practice.js"> before the closing body tag.

Introduction: Age in Dog Years
Imagine you want to build an application that lets people see what their age in dog years is. For this application, a calculation needs to be performed. You will take a person's age and divide it by 7. For this unit of work, you would create a function.

You would name the function for exactly what its purpose is.

const calculateAgeInDogYears = () => {

}
That's the syntax and structure for most simple functions.

Now, the next question you ask yourself is: In order for this function to do its job, does it require any input? Can it perform its unit of work without any external data?

In this case, the answer is no. It needs to know what the age of the person is. That's input. If a function needs input, then you define a parameter. A parameter is a fancy name for a variable that will hold the value of the input.

It's just a variable.

You should name the variable to reflect what value it is referencing. In this case, it's the person's age.

const calculateAgeInDogYears = (ageOfPerson) => {

}
The next thing is to write the instructions for its unit of work. For this function, you will divide the age of the person by 7. You need another variable to reference - or store - the calculated value.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
}
At this point, all you have done is write some instructions. Those instructions haven't been followed yet. Defining a function does not run the instructions.

To run the instructions, you need to type the name of the function somewhere else in your code.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
}

calculateAgeInDogYears()
Make sure your code is the same as above and run your code in the browser. Make sure you have your developer console open.

You'll see nothing, because you don't have any console.log() instructions. You want to see the result of the unit of work. So what should we log? First, log the variable that holds the result of the calculation.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    console.log(ageInDogYears)
}

calculateAgeInDogYears()
When you run that code, you will see NaN (meaning "not a number") in the console. Why? Well, it is because you did not provide a value for the ageOfPerson parameter that you defined for the function. Again, a parameter's purpose is to store the value of any inputs.

You provide input when you invoke the function. More specifically, you put the value in the parenthesis. Calculate the age in dog years for someone who is 56.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    console.log(ageInDogYears)
}

calculateAgeInDogYears(56)
Refresh the browser, and now will see the number 8 in the developer console.

Now, to see the importance of function parameters, delete the parameter you defined.

const calculateAgeInDogYears = () => {
    const ageInDogYears = ageOfPerson / 7
    console.log(ageInDogYears)
}

calculateAgeInDogYears(56)
Refresh the browser and now you will see an error, or "exception" as developers call them, in the console.

Uncaught ReferenceError: ageOfPerson is not defined
    at calculateAgeInDogYears (main.js:2)
    at main.js:6
Without the parameter defined, you can't use the value of 56 in the function. Now put the parameter back in place.

The next step is to make sure the function is pure. A pure function means that a function does its job and returns a value. Right now, your function performs the calculation and logs the result. This is not pure. To make it pure, you will use the keyword of return.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

calculateAgeInDogYears(56)
Refresh your browser. Again, you'll see nothing because you got rid of the console.log(). Ok, so when a function returns some value, the instructions to run the function becomes the return value. In this case, here how JavaScript sees the code after it runs.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

8
Your instructions of calculateAgeInDogYears(56) evaluated to the value of 8 since the function returned a value. The next step is to reference that value with a variable.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(56)
Again, after the code runs, this is what the evaluated code looks like to JavaScript when the input to the function is 56.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = 8
Change the input value to 45. What would calculateAgeInDogYears(45) evaluate to?

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
No need to guess, or do the math yourself, just log the value of dogAge.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)
Refresh your browser and you will see 6.428571428571429 in the console. Therefore, after the code ran, JavaScript sees the following instructions.

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = 6.428571428571429
console.log(dogAge)
Exploration Tasks
Remove the return statement and see what happens.
Specify the number 22 as input to the function and see what the output is.
Change the parameter to age instead of ageOfPerson and see what happens. Then see if you can resolve any issues that it causes.
Remove const dogAge = so that you just invoke the function, but don't store what it returns and see what happens.
Practice: Best in Show
Write a function that takes a string of a dog breed as an argument (like 'border collie')
Have the function return the value of "My favorite dog breed is schnauzer" if an argument of "schnauzer" is provided.
Store the return value of the function into a variable. (e.g. const myFavorite = someFunction())
Log the string of "When it comes to pets," plus the returned value of the function.
If, and only if, an argument value of "meow" is provided to the function, it should return the string "I like cats".
Questions to Ask
Does the function require input to do its job?
Does the function need to return a value?
Am I referencing the return value with a variable?
What should I do with the return value?
What happens if I don't provide an argument at all?
What happens when I remove the parameter from the definition of the function?
Practice: Addition
In this exercise, you are going to define more than one parameter for functions.

Write a function named add that returns the sum of two numbers.
Log the result of the add function.
Modify the function to return the sum of three numbers.
If the values of 17, 4, and 11 are provided as arguments, then the function must evaluate to 32.
Exploration Tasks
Switch the order of your parameters. For example, if your parameters are (first, second, third), then change it to (second, first, third). What effect does that have on the unit of work?
Remove one parameter, but not the others. Does the function still work?
Change the order of the variables when you add them together in the function. Does that affect the output of the function?
Practice: Self-Driving Cars
Create a function named go that takes 2 arguments:
direction (forwards, backwards, etc.)
speed (mph).
The function, when invoked, will log out the following message format in the console:
The car is moving forwards at 45 mph.
The car is moving backwards at 8 mph.
The car is moving in circles at 12 mph.
Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!
Example: The car is moving forward at 82 mph. SLOW DOWN!

Practice: Evens or Odds
Design a function named evenOrOdd that takes a single number as an argument.
It should return the string "Even" if the number is evenly divisible by two.
It should return the string "Odd" if the number is not evenly divisible by two.
Log the result of the function.
Hint: Use the modulo - or remainder - operator in JavaScript to accomplish this.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Exploration Tasks
Create an array of numbers outside the function. Some even, some odd. After the function is defined, iterate the array of numbers with a for..of loop, and invoke the evenOrOdd function with each number as the argument.
What happens when you pass the argument value of 0?
Practice: Double Functions
For this exercise, you are going to utilize two functions; each function will have a single responsibility. The goal of the exercise is to convert an array of words into a sentence, but some of the words in the array should not be included in the sentence.

Therefore, you need two functions.

One function to filter out the unwanted words.
One function to convert an array of words into a single sentence.
Each function needs to return a value.
The return value from one function needs to be passed to the other function.
In the array of words below, filter out any word that starts with the letter k. With the remaining words, combine them all into a single string and log that string to the console.

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */


/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


console.log()
Practice: You Can Tune a Piano, But You Can't...
Sven the Norwegian fisherman goes out at 5:32 AM every day to fish for tuna in the North Sea. Each time he casts his line, he has a 33% chance of catching a tuna.

On a side note, did you know that you can ask JavaScript for a random number? You use the Math.random() method which, by default, returns a number between 0 and 1. If you mutiply the result by 2, you will get a number between 0 and 2. This would allow you to simulate a coin flip. You could check if the value was between 0 and 1 (heads), or between 1 and 2 (tails).

Math.random() * 2  // Number between 0 and 2
Write a function that simulates Sven's chances of catching a tuna. The function needs no input, and it simply returns true or false. If a random number falls in a certain range, return true. If it falls in any other range, return false.

Invoke the function and then log one of the following messages to the console.

Sven hooked a tuna!  :)
or

Sven came up empty-handed.  :(
Exploration Tasks
Try multiplying the random() method by different values and see how it affects how often Sven catches a fish.
Instead of hard-coding the number by which you multiple random(), see if you can pass that number in as an argument to the function.
Is your function a pure function? Why or why not? If you're unsure, talk to your teammates or your instructors.
What happens if you multiply random() by 0?
Practice: Fast Food (Multiple Parameters)
Your job in this exercise is to write a function that returns an object that represents a fast food meal. The customer will be able to order a sandwich, a side item (like fries or apples), a drink, and a dessert. Your function should take all of those externally defined values as input (i.e. parameters) and then return an object like this.

{
    "sandwich": "Ultimate Slammer",
    "side": "Potato wedges",
    "drink": "Mr. Pepper",
    "dessert": "Fudge sundae"
}
Tip: Since each of these values are separate items, then there needs to be one parameter for each one. Then you need to specify four arguments.

const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
Exploration Tasks
What happens if you define more parameters than arguments?
What happens if you change the order of your parameters?
What happens if you change the order of your argument values when you invoke the function?
What happens if you remove one of your parameters?
Practice: Same Chores, Different Days
Here's a fancy term for you: Higher Order Functions. It's a function that takes another function as a parameter and uses it for its own purposes.

Here's a simple example. This is a function that reads in a number, then returns that number multiplied by 2.

const twice = number => number * 2

twiceTwo = twice(2)
console.log(twiceTwo)  // 4

twiceSix = twice(6)
console.log(twiceSix)  // 12

twiceThirteen = twice(13)
console.log(twiceThirteen)  // 26
You can make functions that multiply numbers by any amount. Make two more functions: one that multiplies by 5, and one that squares a number.

const timesFive = number => number * 5
console.log(timesFive(2))  // 10
console.log(timesFive(5))  // 25

const square = number => number * number
console.log(square(4))  // 16
console.log(square(13))  // 169
So now you have three functions, each of which does something different to a number.

const twice = number => number * 2
const timesFive = number => number * 5
const square = number => number * number
Now you can define another function that takes one of those functions as input. It's a more generic function that will perform any task on a number, but needs you to tell it what it should do.

/*
    I can make any number bigger, but you need to tell
    me how much bigger by giving me the function you
    want me to invoke on the number
*/
const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}
Now take the same number and perform all three operations on it by invoking bigify().

const number = 7
const by2 = bigify(number, twice)  // 14
const by5 = bigify(number, timesFive)  // 35
const byItself = bigify(number, square)  // 49
Lightning Exercise: Define another function that cubes a number. Then augment the code above by passing the function to bigify()

You are now going to do something similiar. You are going to make the same person perform a series of three chores. Then you get to decide which three chores, depending on the day.

Defining the Chores
First define six (6) functions that defines a single parameter whose value should be an object. That object will look like this.

{
    firstName: "Donald",
    lastName: "McLelland"
}
Each function should return a string in the following format, if the object parameter represents Donald McLelland.

"Donald McLelland went to the grocery store"
or

"Donald McLelland got the engine oil changed"
So think of six random tasks that you perform on a regular basis and define a function for each one. We will start you off with a hint.

const xxxxx = person => `${} ${} `
Lazy Day
Now define a function that has three parameters. The purpose of each parameter is as follows:

chore - A function that will perform a chore
person - An object representing a perform. It should have a firstName and a lastName property.
day - The weekday to perform the task (e.g. "Tuesday")
We suggest you name this higher order function dayPlanner().

The return value of dayPlanner should be a string in the following format, assuming the person object represents Yolanda Johnson, the chore was mowing the lawn, and the day was Thursday.

"Yolanda Johnson mowed the lawn on Thursday."
Log that output to the developer console.

Busy Day
Refactor the dayPlanner higher order function to accept five (5) parameters. The first three should be functions. The fourth should be the person object. The fifth should be the day string.

(firstChore, secondChore, thirdChore, person, day)
Inside the higher order function, invoke all three chore functions and format the return value for dayPlanner to follow this format.

"On Monday, Yolanda Johnson mowed the lawn, and Yolanda Johnson
picked up the dry cleaning, and Yolanda Johnson replaced the
batteries in the smoke detectors."
Log that output to the developer console.

Remove Item Function
Learning Ojectives
You should be able to understand that each item in an array has a numeric index that specifies its location in the array.
You should be able to identify a function parameter.
You should be able to identify where a function is invoked.
You should be able to identify where arguments are provided for a function when it is invoked.
You should be able to understand that if a function needs input to perform its task, it needs parameters.
You should be able to explain that, if a function has 1 or more parameters defined, when the function is invoked, values need to be provided as arguments.
You should be able to explain the purpose of the splice() array method.
Discontinued Toys
Sometimes Leonid gets news from his suppliers that a toy has been discontinued, which means that he needs to remove it from his inventory.

Your job is to write another function that will perform this task, when needed.

Write a function and assign it to a variable named removeProduct.
When the function is invoked, the numeric id property of a particular toy will be specified as an argument, so define a single parameter for the function to store that number.
The function should find the index of the toy whose id equals the value of the parameter.
Use that index, along with the splice() method on the toy array to remove that item.
To verify that the item was removed, use console.log() to display the array.

Scope in JavaScript
When we use the word scope in programming, we are talking about some code's accessibility to other code. In JavaScript, this is driven by the curly braces. The curly braces build a virtual wall around the code which prevents any code that is outside the wall from seeing it.

Yet the code inside the walls has a special power. It can see outside the walls and access, or modify, that code - as long as that code, itself, is not contained in an equal, or lower scope. More on that in a bit.

To use the true power of block scopes in JavaScript, you need to use the let and const keywords for declaring variables. If you use var, block scope no longer applies, because those variables declared with var get hoisted and initialized. Always use let and const for variable declarations to avoid unintended side-effects of hoisting and initialization.

Scopes You Know
You've already encountered several type of scope definitions in the course so far.

For Loop Scope
for loops define a scope because they use curly braces to define what code will be executed on each iteration.

for (let i = 0; i <=10; i++)
{ // Beginning of `for` scope

    /*
        Code outside of this scope has no idea that
        the `tenPlus` variable even exists.
        Only the code inside the block can access it.
    */
    const tenPlus = i + 10

    // Still inside the `for` block, so `tenPlus` is accessible
    if (tenPlus > 100) {
        console.log("Your number was too high")
    }

} // End of `for` scope

/*
    This will throw an exception stating that `tenPlus`
    is not defined. This is external code to the `for`
    loop's scope, and is therefore not capable of accessing
    anything inside it
*/
console.log(tenPlus)
If Scope
let dog = "Great Dane"
let monthlyFoodCost = 0

if (dog === "Great Dane")
{  // Beginning of `if` scope

    /*
        This code can look out into the "outer" scope
        and modify a variable defined out there.
    */
    const monthlyFoodCost += 23.00

}  // End of `if` scope
Function Scope
JavaScript functions also have a block scope, but they also have something called lexical scope, also known as static scope. We will cover lexical scope later, so for now, we just look at it's block scope.

const userWord = document.getElementById("word").innerHTML

function containsVowels (wordParameter)
{  // Beginning of `function` scope

    /*
        The `doesItHaveOne` variable can only be accessed
        within the curly braces of this function. The match()
        method on a string will return `null` if there
        are no matches, otherwise, an array will be returned.
    */
    const doesItHaveOne = wordParameter.match(/[aeiou]/gi)

    return doesItHaveOne !== null

}  // End of `function` scope

const itContainedVowels = containsVowels(userWord)

console.log(itContainedVowels) // true or false
console.log(doesItHaveOne) // doesItHaveOne is undefined
Videos to Watch
JavaScript | The Scope Chain
Javascript Tutorial | Scope & Closures | Ep20
Environment, Scope and Closures in JS / Intro to JavaScript ES6 programming, lesson 16
Keeping Track of "This" in JavaScript
Scope Exercises
Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; y < cookies.length; x++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
Conjunction Function
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)
Mod Squad
{
    const modSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    const HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        const HTMLRepresentation += `<div>${member}</div>`
    })
}

console.log(HTMLRepresentation)
Simon Says
There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {

    if (location[0] > 2) {
        const invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}
Advanced Challenge: Lambda Llama
Not only can functions take other functions as arguments, but functions can also return functions! This is marked as an advanced challenge because you haven't been introduced to this concept yet.

The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.

Remember, come to the staff and ask questions if you decide to take this one on and get stuck.

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
    }

    return name + suffix
}

nameMaker = llamaNamer()
console.log(nameMaker())

The Perry Scope
There is a popular children's character named Perry. He's a beaver that is a secret agent and solves silly mysteries with his sidekick, Pamphlet the Kangaroo.



Leonid sells one of the accessories that Perry uses during his spy operations. It's a special telescope that uses x-ray vision to see inside structures.

The Perry Scope.

Add the following code to your JavaScript module. It's only task is to sell the highly popular Perry Scope. Unfortunately, the original developer made a mistake in the scope of her variables. See if you can fix it.

const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    for (const toy of inventory) {
        let availableForPurchase = false

        if (toy === "Perry Scope") {
            availableForPurchase = true
        }
    }

    if (availableForPurchase) {
        console.log("Enjoy your new Perry Scope")
    }
}

sellPerryScope()