import http from 'node:http';

function* generateNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) yield i * 2
  }
}

async function processNumbers(limit, batchSize) {
  const generator = generateNumbers(limit);
  const results = [];
  let count = 0;

  for (const num of generator) {
    results.push(num);
    count++;

    if (count % batchSize === 0)
      // Gives control to Event Loop
      await new Promise((resolve) => setTimeout(resolve, 0));
  }

  return results;
}

http.createServer(async (req, res) => {
  const start = process.hrtime();

  if (req.url === '/process') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    processNumbers(15_000_000, 50_000)
      .then((data) => {
        res.end(JSON.stringify(data.slice(0, 10)))
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error while processing: ', err);
      });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running');
  }

  const stop = process.hrtime(start);
  const time = ((stop[0] * 1e9) + stop[1]) / 1e6;

  const execTime = time > 1 ? `${time}ms` : `${(time * 1e3).toFixed(3)}μs`;

  console.log({ execTime }); // execTime: '3ms - 10ms' average
}).listen(3000);