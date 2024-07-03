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

// refactor from chatGPT

const getFactorialFromCache = {
  cache: {},
  getFactorial(n) {
    if (this.cache[n]) {
      return this.cache[n];
    } else {
      if (n === 0) {
        return 1;
      } else {
        this.cache[n] = n * this.getFactorial(n - 1);
        return this.cache[n];
      }
    }
  },
  calculate(n) {
    if (typeof n !== 'number' || n < 0) {
      throw new Error('Input must be a non-negative number');
    }
    this.cache[n] = this.getFactorial(n);
    return this.cache[n];
  }
};
