function nonRepeated(str){
  const charCount = {}

//count occurences of each character in given string
  for (const char of str){
    charCount[char] = (charCount[char] || 0) + 1;
  }

// figure out first char with count 1
  for (const char of str){
    if (charCount[char] === 1) {
      return char
    }
  }
return null
}

console.log(nonRepeated("swiss"))
console.log(nonRepeated("dundalk"))