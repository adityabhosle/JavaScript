function isPalindrome(str){
    reverse = str.split("").reverse().join("");
    if(str == reverse){
        console.log("Is a Palindrome")
    }else{
        console.log("Not a Palindrome")
    }
}

//cannot use reverse on its own since it is an array function
isPalindrome("swiss")