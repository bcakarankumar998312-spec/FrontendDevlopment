// Write a javascript function to extract unique characters fromm a string.

let str = 'abcdeabcd';

function unq(str){
    let unique = '';
    for(let i=0; i<str.length; i++){
        if(!(unique.includes(str[i]))){
            unique+=str[i];
        };
    };
    return unique;
}

console.log(unq(str))


//Write a javaScript function that accepts a list of country names as input and returns the longest country name as output.

let country = ["australia", "germany", "united state of america"];

function longestName(country){
    let ansIdx = 0;
    for(let i=0; i<country.length; i++){
        let anslen = country[ansIdx].length;
        let currlen = country[i].length;
        if(anslen < currlen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(longestName(country));


// Write a javaScript function to count the number of vowels in a string argument.

let name = "apnacollege";

function countVowels(str){
    let count = 0;
    for(let i=0; i<name.length; i++){
        if(name.charAt(i) == "a" || name.charAt(i) == "e" || name.charAt(i) == "i" || name.charAt(i) == "o" || name.charAt(i) == "u"){
            count++;
        }

    }
    return count;
}

console.log(countVowels(name));


// Write a javascript function to genrate a random number within a range(start, end).

let start = 100;
let end = 200;

function rgenrate(start ,end){
    let num = Math.floor(Math.random()*(end-start))+(start+1);
    return num;
}

console.log(rgenrate(start, end));