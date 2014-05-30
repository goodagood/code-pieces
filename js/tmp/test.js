function isEmpty(str) {
    return (!str || 0 === str.length);
}

//For checking if a string is blank, null or undefined I use:

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}
