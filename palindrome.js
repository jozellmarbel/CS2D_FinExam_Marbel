function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, "");
  
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}


function checkPalindrome() {
    let str1 = prompt("Enter the first string:");
    let str2 = prompt("Enter the second string:");


    console.log("Original string 1:", str1);
    const reversedStr1 = str1.split("").reverse().join("");
    console.log("Reversed string 1:", reversedStr1);
    console.log("Is string 1 a palindrome?", isPalindrome(str1));


    console.log("\nOriginal string 2:", str2);
    const reversedStr2 = str2.split("").reverse().join("");
    console.log("Reversed string 2:", reversedStr2);
    console.log("Is string 2 a palindrome?", isPalindrome(str2));
}

checkPalindrome();
