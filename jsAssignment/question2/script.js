function checkPallindrome(event) {
    event.preventDefault();

    var str = document.getElementById("text").value;
    var result = document.getElementsByClassName("isPallindrome")[0];

    let i = 0;
    let j = str.length - 1;
    let isPalindrome = true;

    while (i < j) {
        if (str[i] !== str[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }

    if (isPalindrome) {
        result.innerHTML = `"${str}" is a Palindrome`;
    } else {
        result.innerHTML = `"${str}" is NOT a Palindrome`;
    }
}
