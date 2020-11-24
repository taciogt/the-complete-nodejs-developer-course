const fs = require('fs')

const filePath = 'notes.txt'
fs.writeFileSync(filePath, 'My name is Tácio.')


// Challenge: Append a message to notes.resolveTxt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync(filePath, '\nI will be a Node.js developer.')
