function firstWord(s) {
  // your code here
	const match = s.match(/^\S+/);
    
    // Check if a match is found
    if (!!match) {
        return match[0]; // Return the matched word
    } else {
        return s; // Return the entire string if no match found
    }
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
