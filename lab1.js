'use strict';

/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Here are some examples for how to use the assert method:
*/

assert(1 === 1);
assert(1 === 2, 'this is an assertion failure example. 1 === 2');

/*------------------Assertions-------------------------------------------------
 TODO: 8 points
 Invoke assert twice. (In other words, create two assertions like the ones above.)
 Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/

assert('monkey' === 'monkey');
assert('monkey' === 'tarantula', 'Far too many legs, my friend. Try again.');

/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';

/*
 TODO: 20 points
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.  Use
 **two** different kinds of loops to implement this. (10 points each.)
 HINT: the 'split' method on String will be useful.
*/

sentence1 = sentence1.split(' ');
sentence2 = sentence2.split(' ');

for (var i = 0;i < sentence1.length;i++) {
  sentence1[i] = 'chirp';
}

sentence1 = sentence1.join(' ') + '.';

var i = 0;
while (i < sentence2.length) {
  sentence2[i] = 'chirp';
  i++;
}
sentence2 = sentence2.join(' ') + '.';

console.log(sentence1);
console.log(sentence2);

assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.',
  'sentence 2 should have 9 chirps');

/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/

var favoriteAnimals = [ 'elephant', 'penguin', 'eagle', 'camel' ];
var nextAnimal;

// TODO: 12 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

nextAnimal = favoriteAnimals[(Math.floor(Math.random() * favoriteAnimals.length))];

assert(nextAnimal, 'assign something to nextAnimal');

/* ----------------- Hungry Lion ----------------------------------------
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/

// number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [ 5, 4, 3, 6, 2, 4, 3, 4, 5, 1 ];
var tooHungryDay;

var mealsTotal = 0;
var avgMealsDay = Math.round(mealsTotal / (i + 1) * 100) / 100;
var avgMealsDayArr = [];

for (var i = 0; i < mealsPerDay.length; i++) {
  mealsTotal += mealsPerDay[i];
  avgMealsDay = Math.round(mealsTotal / (i + 1) * 100) / 100;
  avgMealsDayArr.push(avgMealsDay);

  console.log('The lion has eaten ' + avgMealsDay + ' meals on average.');
}

for (var i = 0; i < avgMealsDayArr.length; i++) {
  if (avgMealsDayArr[i] < 4) {
    tooHungryDay = i;
    break;
  }
}

assert(tooHungryDay, 'remember to assign the answer to tooHungryDay');
assert(tooHungryDay < 10, 'the lion is too hungry before the end of the array');

/* ----------------- Code Style ----------------------------------------
 TODO: 10 points
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 Now, type
  grunt
   and it will run both jshint and jscs on your code.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
