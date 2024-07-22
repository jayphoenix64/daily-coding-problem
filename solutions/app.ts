import * as readline from 'readline';
import { exec } from 'child_process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter the day number: ', (input) => {
  const number = parseInt(input.trim(), 10);

  if (!isNaN(number)) {
    const fileName = `day${String(number).padStart(4, '0')}.js`;

    exec(`node ${fileName}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing ${fileName}: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error in script ${fileName}: ${stderr}`);
        return;
      }
      console.log(`Output of ${fileName}: \n\n${stdout}`);
    });
  } else {
    console.error('Invalid input. Please enter a valid number.');
  }

  rl.close();
});
