const fs = require('fs')
const path = require('path');
const { stdout } = process;
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let data = '';
stream.on('data', chunk => data += chunk);
stream.on('error', () => console.log('Error'));
stream.on('end', () => stdout.write(data.slice(0,-2)));