/*
How many licks does it take to get to the tootsie roll center of a tootsie pop?

A group of engineering students from Purdue University reported that its licking machine, modeled after a human tongue, took an average of 364 licks to get to the center of a Tootsie Pop. Twenty of the group's volunteers assumed the licking challenge-unassisted by machinery-and averaged 252 licks each to the center.

Your task, if you choose to accept it, is to write a function that will return the number of licks it took to get to the tootsie roll center of a tootsie pop, given some environmental variables.

Everyone knows it's harder to lick a tootsie pop in cold weather but it's easier if the sun is out. You will be given an object of environmental conditions for each trial paired with a value that will increase or decrease the number of licks. The environmental conditions all apply to the same trial.

Assuming that it would normally take 252 licks to get to the tootsie roll center of a tootsie pop, return the new total of licks along with the condition that proved to be most challenging (causing the most added licks) in that trial.

Example:

totalLicks({ "freezing temps": 10, "clear skies": -2 });
Should return:

"It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps."
Other cases: If there are no challenges, the toughest challenge sentence should be omitted. If there are multiple challenges with the highest toughest amount, the first one presented will be the toughest. If an environment variable is present, it will be either a positive or negative integer. No need to validate.
*/

function totalLicks(env) {
    const standart = 252;
    const condition = [];
    for (let prop in env) {
        condition.push(env[prop]);
    }
    const sum = condition.reduce((a, b) => a + b, 0);
    let property = null;
    const length = Object.keys(env).length;
    if (length > 1 && Math.max(...condition) > 0) {
        property = Object.keys(env)[condition.indexOf(Math.max(...condition))];
        return `It took ${standart + sum} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was ${property}.`;
    } else {
        return `It took ${standart + sum} licks to get to the tootsie roll center of a tootsie pop.`;
    }

}
