const testData = {
validUser: {
username: "standard_user",
password: "secret_sauce"
},

invalidUser: {
username: "standard_user",
password: "wrong_password"
},

noUsername: {
username: "",
password: "secret_sauce"
},

noPassword: {
username: "standard_user",
password: ""
},

checkoutData: {
firstName: "Vina",
lastName: "QA",
postalCode: "12345"
}
}

module.exports = testData