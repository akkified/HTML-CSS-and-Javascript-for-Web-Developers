// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "Blue";

// console.log(company);
// console.log(company.name + "'s CEO's name is " + company.ceo.firstName)

// console.log(company.ceo["firstName"])
// var stockPropName = "stock of company";
// company[stockPropName] = 110

// console.log("Stocks have gone up until $" + company[stockPropName])

// // Better way for same thing: object literal

var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        lastName: "Zuckerberg",
        favColor: "blue"
    },
    "stock of company": "$110"
};

console.log(facebook)       