// my attempt to create a function to calculate factorial from cache

const getFactorialFromCache = (() => {
    const cache = {};
    const getFactorial = (n) => {
        if (cache[n]) {
            return cache[n];
        } else {
            if (n === 0) {
                return 1;
            } else {
                cache[n] = n * getFactorial(n - 1);
                return cache[n];
            }
        }
    };

    return (n) => {
        cache[n] = getFactorial(n);
        return cache[n];
    };
})();
