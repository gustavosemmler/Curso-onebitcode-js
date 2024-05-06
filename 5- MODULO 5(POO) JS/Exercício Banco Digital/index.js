const App = require("./App")

App.createUser('gustavo@gmail.com', "geleia-san")
App.createUser('sdfsdf@gmail.com', "krikor-san")
App.createUser('dfgdfg@gmail.com', "supi-san")

App.deposit("gustavo@gmail.com", 100)

App.transfer("gustavo@gmail.com", "sdfsdf@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("dfgdfg@gmail.com", 2000, 24)

console.log(App.findUser("gustavo@gmail.com"))
console.log(App.findUser("gustavo@gmail.com").account)
console.log(App.findUser("sdfsdf@gmail.com"))
console.log(App.findUser("sdfsdf@gmail.com").account)
console.log(App.findUser("dfgdfg@gmail.com"))
console.log(App.findUser("dfgdfg@gmail.com").account)