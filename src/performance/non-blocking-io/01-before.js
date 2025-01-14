import express from 'express';

const app = express();

function performHeavyComputationSync(input) {
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += Math.sqrt(input * i);
  }
  return result;
}

app.get('/calculate', (_, res) => {
  const start = process.hrtime();

  const result = performHeavyComputationSync(100);

  // Replies to the client only when the calculation result is available
  res.json({ message: 'Cálculo concluído!', result });

  const stop = process.hrtime(start);
  const time = ((stop[0] * 1e9) + stop[1]) / 1e6;

  const execTime = time > 1 ? `${time}ms` : `${(time * 1e3).toFixed(3)}μs`;

  console.log({ execTime });
});

app.listen(3000, () => console.log('Server is running.'));
