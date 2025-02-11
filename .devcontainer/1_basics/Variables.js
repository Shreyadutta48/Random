const accountId = 12345
let accountEmail = "shreya@gmail.com"
var accountPassword = "56789"
accountCity = "Rourkela"
let accountState;
//accountId=2 //not allowed
/*
Avoid using var due to block scope and functional scope
*/
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
