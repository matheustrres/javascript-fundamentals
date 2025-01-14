const start = process.hrtime();

function* generateNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    yield i;
  }
}

function* filterEvenNumbers(iterable) {
  for (const num of iterable) {
    if (num % 2 === 0) {
      yield num;
    }
  }
}

function* doubleNumbers(iterable) {
  for (const num of iterable) {
    yield num * 2;
  }
}

const numbers = generateNumbers(5_000_000);
const evenNumbers = filterEvenNumbers(numbers);
const doubledNumbers = doubleNumbers(evenNumbers);

const stop = process.hrtime(start);
const time = ((stop[0] * 1e9) + stop[1]) / 1e6;

const execTime = time > 1 ? `${time}ms` : `${(time * 1e3).toFixed(3)}μs`;

console.log({ execTime }); // execTime: '123μs' average