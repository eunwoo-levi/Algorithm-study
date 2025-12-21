const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = Number(input[0]);

const stack = [];
const out = [];

for (let i = 1; i <= n; i++) {
  const [cmd, val] = input[i].split(' ');

  switch (cmd) {
    case 'push':
      stack.push(val);
      break;
    case 'pop':
      out.push(stack.length ? stack.pop() : -1);
      break;
    case 'size':
      out.push(stack.length);
      break;
    case 'empty':
      out.push(stack.length ? 0 : 1);
      break;
    case 'top':
      out.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

process.stdout.write(out.join('\n'));
