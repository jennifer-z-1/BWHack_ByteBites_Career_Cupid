"use strict";

let puzzle_list = [
    { "question": "Alok has three daughters. His friend Shyam wants to know the ages of his daughters. Alok gives him three hints. 1. The product of their age is 72.; 2. The sum of their ages is equal to my house number.; 3. The oldest girl likes strawberry ice cream. What are Alok’s daughters’ ages?", "answer": "The ages is 3, 3 and 8. " },
    { "question": "You have 5 jars of pills. Each pill weighs 10 grams, except for contaminated pills contained in one jar, where each pill weighs 9 grams. Given a scale, how could you tell which jar had the contaminated pills in just one measurement?", "answer": "Take out 1 pill from jar 1, 2 pills from jar 2, 3 pills from jar 3, 4 pills from jar 4 and 5 pills from jar 5. Put all these 15 pills on scale. The correct wight is 150 (15*10). But one of the jars has contaminated pills. So the wight will definitely less than 150. If the wight is 149 then jar 1 has contaminated pills because the there is only one contaminated pill. If the wight is 148 then jar 2, if the wight is 147 then jar 3, if 146 then jar 4, if 145 then jar 5." },
    { "question": "An employee works for an employer for 7 days. The employer has a gold rod of 7 units. How does the employer pays to the employee so that the employee gets 1 unit at the end of everyday. The employer can make at most 2 cuts in rod.", "answer": "Employer can pay for seven days by making 2 cuts in a way that he has 3 rods of size 1, 2 and 4. 1st Day: Employer gives 1 unit cut. 2nd day: Takes back 1 unit cut from employee given on first day and gives 2 unit cut. 3rd Day: Gives both 1 unit and 2 unit cuts. 4th Day: Takes back cuts of 1 and 2 units. Gives the cut of 4 units. 5th Day: Gives cut of 1 unit. 6th Day: Takes back cut of 1 unit and gives cut of 2 units. 7th Day: Gives cut of 1 unit." },
    { "question": "There is a room with a door (closed) and three light bulbs inside the room. Outside the room, there are three switches, connected to the bulbs. You may manipulate the switches as you wish, but once you open the door you can’t change them. All bulbs are in working condition and you can open the door only once. Identify each switch with respect to its bulb.", "answer": "Let the bulbs be X, Y, and Z Turn on switch X for 5 to 10 minutes. Turn it off and turn on switch Y. Open the door and touch the light bulb. 1. the light is on from the bulb, it is Y Now we will check the other two off bulbs 2. the bulb which is hot, is X 3. the bulb which is cold, is Z  " },
    { "question": "An employee works for an employer for 7 days. The employer has a gold rod of 7 units. How does the employer pay to the employee, so that the number of employee’s rod units increases by one at the end of each day? The employer can make at most 2 cuts in the rod. (Hint- after the end of the day employee’s can’t spend any part of rod)", "answer": "The employer can pay for seven days by making 2 cuts in a way that he has 3 rods of size 1, 2 and 4. 1st Day: Employer gives 1 unit cut. 2nd day: Takes back 1 unit cut from employee given on the first day and gives 2 unit cut. 3rd Day: Gives 1 unit and then the employer is left with 4 unit rod lengths. 4th Day: Takes back cuts of 1 and 2 units. Gives the cut of 4 units. 5th Day: Gives cut of 1 unit to the employee. 6th Day: Takes back cut of 1 unit and gives a cut of 2 units. 7th Day: Gives cut of 1 unit to the employee. " },
    { "question": "You have got someone working for you for five days and a gold bar to pay him. You must give them a piece of gold at the end of every day. What are the fewest number of cuts to the bar of gold that will allow you to pay him 1/5th each day? ", "answer": "2 cuts. " },
    { "question": "A dealer has 1000 coins and 10 bags. He has to divide the coins over the ten bags so that he can make any number of coins simply by handing over a few bags. How must divide his money into the ten bags? ", "answer": "The idea of filling coins in the powers of 2 can be get from the condition that was given the question that each bag can be given or not given: we are not allowed to open the bag and give some coins. So we can represent each bag as each place value which takes either the value of 0 or 1." },
    { "question": "In year 2001 on October 2, 2001, the date in MMDDYYYY format was a palindrome (same forwards as backwards), 10/02/2001 -> “10022001” When was the last palindrome date before 10/02/2001?", "answer": "One year can have only one palindrome as the year fixes the month and date too, so the year has to be less than 2001 since we already have the palindrome for 10/02. It can’t be any year in 1900 because that would result in a day of 91, same for 1800 down to 1400. it could be a year in 1300 because that would be the 31st day." },
    { "question": "How can you represent days of month using two 6 sided dice? You can write one number on each face of the dice from 0 to 9 and you have to represent days from 1 to 31, for example for 1, one dice should show 0 and another should show 1, similarly for 29 one dice should show 2 and another should show 9. ", "answer": "Dice 1: 0 1 2 3 5 7 Dice 2: 0 1 2 4 6 8 " },
    { "question": "A Lady (L) bought an item of Rs 100 from the Shopkeeper (C). She paid him through a 500 Rs Note. Realizing that he did not have change, the shopkeeper C got change for that note from another shopkeeper (S) and paid Rs 400 to the Lady. After a few days, S realized that the note is fake, And this railed at C and took 500 Rs back from him. So in this whole process how much money did C lose in the end?", "answer": "500" }
]

let i = Math.floor(Math.random() * 10);

var puzzleDiv = document.getElementById('puzzle_q');
puzzleDiv.innerHTML += "<p style='color:#f9c9c9; padding:1% 5%'>" + puzzle_list[i]['question'] + "<p>";

var puzzleDiv2 = document.getElementById('puzzle_a');
puzzleDiv2.innerHTML += "<p style='color:#f9c9c9; padding:1% 5%'>" + puzzle_list[i]['answer'] + "<p>";

$("#puzzleA").hide();

$("#btn_show_answer").click(() => {
    $("#puzzleA").show();
});

$("#btn_new_question").click(() => {
    $("#puzzleA").hide();
    window.location = "daily_puzzle.html"; // refresh the page
});