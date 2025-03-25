const regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

function isValidEmail(email) {
    let isValid = regex.test(email);
    if (isValid) [
        console.log(email + ' is valid')
    ]
    return isValid;
}

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com",
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com",
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru", // Нам такі не підходять
    },
];

const validEmails = arr.filter((element) => isValidEmail(element.email));

