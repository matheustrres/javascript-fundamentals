const start = process.hrtime();

const data = Array.from({ length: 5_000_000 }, (_, i) => i);
const evenNumbers = data.filter(num => num % 2 === 0);
const doubledNumbers = evenNumbers.map(num => num * 2);

const stop = process.hrtime(start);
const time = ((stop[0] * 1e9) + stop[1]) / 1e6;

const execTime = time > 1 ? `${time}ms` : `${(time * 1e3).toFixed(3)}μs`;

console.log({ execTime }); // execTime: '719ms' average