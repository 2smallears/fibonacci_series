'use strict';

function fibonacci_series(n) {
    var fibonacci = [0,1];
    for (var i = 2; i <= n; i++){
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    }
    return fibonacci;
}

module.exports = fibonacci_series;
