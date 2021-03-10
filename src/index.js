module.exports = function reverse (n) {
    let nPositiv = n > 0 ? n: -n;
    return +String(nPositiv).split('').reverse().join('');
}
