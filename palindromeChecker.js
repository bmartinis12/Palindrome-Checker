function palindrome(str) {
  let lower = str.toLowerCase();
  let arr = lower.match(/[a-z0-9]/gi);
  let newStr = lower.match(/[a-z0-9]/gi);
  let newArray = [arr.length];
  for (let i = 0; i < arr.length; i++) {
    newArray[arr.length - 1 - i] = arr[i];
  }
  for ( let j = 0; j < newStr.length; j++){
    if(newStr[j] !== newArray[j]){ 
      return false;
    }
  }
  for ( let w = 0; w < newStr.length; w++){
    if(newStr[w] === newArray[w]){ 
      return true;
    }
  }
}
palindrome("almostomla");
