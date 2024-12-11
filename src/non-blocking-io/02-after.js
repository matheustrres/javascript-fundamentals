import express from 'express';
import { Worker } from 'node:worker_threads'

const app = express();

function performHeavyComputationInBackground(input) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(`
      const { parentPort, workerData } = require('worker_threads');

      function performHeavyComputation(input) {
        let result = 0;
        for (let i = 0; i < 1e9; i++) {
          result += Math.sqrt(input * i);
        }
        return result;
      }

      const result = performHeavyComputation(workerData.input);
      parentPort.postMessage(result);
    `, {
      eval: true,
      workerData: {
        input
      }
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error('Worker exited with code ', code));
    })
  });
}

app.get('/calculate', (_, res) => {
  const start = process.hrtime();

  // Replies to the customer immediately
  res.json({ message: 'The calculation is being processed and you will be notified when it is complete.' });

  // Async function in background
  performHeavyComputationInBackground(100)
    .then((result) => {
      const stop = process.hrtime(start);
      const time = ((stop[0] * 1e9) + stop[1]) / 1e6;
      console.log({ execTime: `${time.toFixed(3)}ms`, result });
    })
    .catch((err) => console.error(err));
});

app.listen(3000, () => console.log('Server is running.'));