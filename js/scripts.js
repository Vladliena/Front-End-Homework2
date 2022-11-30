let hours;

do{
    hours = parseFloat(prompt('add hours'));
} while (!hours || isNaN(hours))

const secondsInHours = hours * 3600;

alert(secondsInHours)