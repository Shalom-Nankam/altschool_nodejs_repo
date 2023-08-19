const path = require("path")
const os = require("os")
const process = require("process")

// print current working directory
const workingDir = path.resolve()
console.log({workingDir})

// print the separator of a given file path
const sep = path.sep
console.log({sep})

// print out the extension name of a file path
const ext = path.extname('/Users/shalomabrokwha/Desktop/Node /Projects/altschool/assignment_one/index.js')
console.log({ext})

// print out the process id of the current running process
const pid = process.pid
console.log({pid})

// print out the user information of the os
const userInfo = os.userInfo()
console.log({userInfo})

// print out the platform of an operating system
const opSys = os.platform()
console.log({opSys})