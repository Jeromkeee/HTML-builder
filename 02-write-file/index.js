const fs = require('fs')
const path = require('path');
const { stdin, stdout } = process;

fs.writeFile(path.join(__dirname, 'notes.txt'), '', err => {if (err) throw err});
stdout.write('Гамарджоба, дорогой!\n');
stdout.write('Как дела у тебя?\n');

stdin.on('data', data => {
    if (data.toString().includes('exit')) process.exit();
    fs.appendFile(path.join(__dirname, 'notes.txt'), data, err => {if (err) throw err});
});

process.on('exit', () => stdout.write('Ну понятно. Удачи тебе!\n'));
process.on('SIGINT', () => process.exit());