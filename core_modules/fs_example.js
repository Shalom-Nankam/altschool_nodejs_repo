const fs = require("fs")

// Create a directory named: Students
fs.mkdir('./Students', (err) => {
    if(err) console.log('Error occured')
})

// Create a file named user.js
fs.open('./Students/user.js', 'w+', (err, _) => {
    if(err) console.log('Error in creating file : ', err)
})

// Update the Students directory to Names
fs.rename('./Students', './Names', (err) => {
    if(err) console.log('Error occured in renaming folder')
})

// add name in user.js
fs.writeFile('./Names/user.js', 'Shalom Abrokwah', (err) => {
    if(err) console.log('Error occured while adding name to folder')
})

// update the file and add more info
fs.appendFile('./Names/user.js', '\n I am a Nigerian. \n I am a male. \n I am 25 years of age. \n I am a backend engineering student.', (err) => {
    if(err) console.log('Error occured while updating file')
})

// rename user.js to your name
fs.rename('./Names/user.js', './Names/shalom_abrokwah.js', (err) => {
    if(err) console.log('Error in renaming file', err)
})


// read the contents of shalom_abrokwah.js file
fs.readFile('./Names/shalom_abrokwah.js', 'utf8', (err, data) => {
    if(err) console.log('Error occured in reading file');

    console.log(data)
})

// delete shalom_abrokwah.js file
fs.rm('./Names/shalom_abrokwah.js', (err) => {
    if(err) console.log('Error when deleting file', err)
})

// delete the Names directory
fs.rmdir('./Names/', (err) => {
    if(err) console.log('Error in deleting file', err)
})


