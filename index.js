document.addEventListener("DOMContentLoaded", () => {

    let password = document.querySelector(".password");
    let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?:"{}|./;,';
    let form = document.querySelector(".passForm");
    let lengthField = document.querySelector("#length")
    let passLength = '';
    

    lengthField.addEventListener('change', function (e) {
        passLength = e.target.value    
    })

    form.addEventListener('submit', function (e) {
         e.preventDefault();
        console.log(e.target);  
        if (passLength) {
            createPassword(passLength);
        } else {
            createPassword(10)
        }
    });



    function createPassword(length) {
        let excludedCharacters = document.getElementById("characters").value.toString().split('');
        let newChar = characters.split('');
        let filteredChar  = newChar.filter(i => !excludedCharacters.includes(i)).join('')
        let result = ' ';
        const filCharactersLength = filteredChar.length;
        for (let i = 0; i < length; i++) {
        result += filteredChar.charAt(Math.floor(Math.random() * filCharactersLength));
        };
        password.textContent = `Super Top Secret Password:  ${result}`
    };
});

