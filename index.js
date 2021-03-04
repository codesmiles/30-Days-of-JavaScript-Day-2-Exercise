//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";

//2.Print the string on the browser console using console.log()
console.log(challenge);

//3.Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//4.Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//6.Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3,18));
console.log(challenge.substring(3,18));
//slight diff just noticed the substring counts as index(n-1) while substr counts as index(n-1 and later just n)

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(0,3));

//8.Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//9.Split the string into an array using split() method
console.log(challenge.split());

//10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let socialMedia  = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(socialMedia.split(' '));

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript","Python"));

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"))

//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentenceFact = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentenceFact.indexOf("because"));

//18. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceFact.lastIndexOf("because"));

//19. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());

//20. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("Script"));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"));
console.log(challenge.match(/a/gi));//regex

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let a = "30 Days of", b = " JavaScript"

console.log(a.concat(b));

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

//LEVEL 2

//1. Using console.log() print out the following statement:The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;
console.log(quote);

//2. Using console.log() print out the following quote by Mother Teresa:"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let tenString ="10", tenNum = 10; 
console.log(typeof tenString==tenNum);

let tenStringInt = parseInt(tenString);
console.log(tenStringInt==tenNum);

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let nineFloat = parseFloat('9.8');
console.log(nineFloat==tenNum);
//refering to the previously assigned variable
console.log(Math.round(nineFloat)==tenNum);
//Using math method

//5. Check if 'on' is found in both python and jargon
let py = "Python", ja = "jargon";
console.log(py.includes("on"),ja.includes("on"));

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let course = "I hope this course is not full of jargon"
console.log(course.includes("jargon"));

//7. Generate a random number between 0 and 100 inclusively.
let rdmNum = Math.random(), rdmNumToHundred = rdmNum*101;

console.log(rdmNumToHundred);

//8. Generate a random number between 50 and 100 inclusively.
function getRandomInt(min, max) {
min = Math. ceil(min);
max = Math. floor(max);
return Math. floor(Math. random() * (max - min + 1)) + min;
}
getRandomInt(50,100);//still trying to figure it out

//9. Generate a random number between 0 and 255 inclusively.
let rdmNumToTwoFiftyFive = rdmNum*256;
console.log(rdmNumToTwoFiftyFive);

//10, Access the 'JavaScript' string characters using a random number.
// no clue LOL

/*11. Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
console.log(" 1\t 1\t 1\t 1\t 1\n 2\t 1\t 2\t 4\t 8\n 3\t 1\t 3\t 9\t 27\n 4\t 1\t 4\t 16\t 64\n 5\t 1\t 5\t 25\t 125");

//12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceFact)
console.log(sentenceFact.substr(30,24));

//LEVEL 3

//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let loriIro = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let lv = loriIro.match(/love/gi);
console.log(lv.length);

//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceFact);
console.log(sentenceFact.match(/because/gi).length);

/*3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'*/
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/%/gi,''));//no clue of whats next 

//4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let txt =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

//extracted first value
let salaryPerMonth = txt.substr(9,4);
console.log(salaryPerMonth);
//convert first value to integer
let salaryPerMonthInt = parseInt(salaryPerMonth);
console.log(typeof salaryPerMonthInt);

//extracted second value
let euroAnnualBonus = txt.substr(42,6)
console.log(euroAnnualBonus);
//converted second value to integer
let euroAnnualBonusInt = parseInt(euroAnnualBonus);
console.log(typeof euroAnnualBonusInt);

//extracted the third value
let euroOnlineCoursesPerMonth = txt.substr(67,6)
console.log(euroOnlineCoursesPerMonth);
console.log(typeof euroOnlineCoursesPerMonth);
//convert third value to integer
let euroOnlineCoursesPerMonthInt = parseInt(euroOnlineCoursesPerMonth);
console.log(typeof euroOnlineCoursesPerMonthInt);

//txt and the extracted value
console.log(txt)
console.log(salaryPerMonthInt);
console.log(euroAnnualBonusInt);
console.log(euroOnlineCoursesPerMonthInt);

//solution
console.log(`The total amount he earns is ${salaryPerMonthInt*12 + euroOnlineCoursesPerMonthInt*12 + euroAnnualBonusInt}`);