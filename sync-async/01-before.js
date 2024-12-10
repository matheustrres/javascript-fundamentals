import http from 'node:http';

function processNumbers(limit) {
  const results = [];
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) results.push(i * 2);
  }
  return results;
}

http.createServer((req, res) => {
  const start = process.hrtime();

  if (req.url === '/process') {
    const data = processNumbers(5_000_000);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data.slice(0, 10)));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running')
  }

  const stop = process.hrtime(start);
  const time = ((stop[0] * 1e9) + stop[1]) / 1e6;

  const execTime = time > 1 ? `${time}ms` : `${(time * 1e3).toFixed(3)}μs`;

  console.log({ execTime }); // execTime: '95ms - 120ms' average
}).listen(3000);