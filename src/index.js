module.exports = function reverse (n) {
    let str = n.toString();
    let reverseStr = str.split('').reverse().join('');  
    return parseInt(reverseStr);
}
