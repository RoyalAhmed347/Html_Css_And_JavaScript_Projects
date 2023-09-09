const upercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const specialSet = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"



let passShowBox = document.getElementById('passShow');
let totalCharInput = document.getElementById('totalChar');
let upperCaseInput = document.getElementById('Uppercase');
let lowerCaseInput = document.getElementById('Lowercase');
let NumberInput = document.getElementById('Number');
let SymbolesInput = document.getElementById('Symboles');
let btn = document.getElementById('btn');



function getWrongWorld(dataSet) {
   return dataSet[Math.floor(Math.random() * dataSet.length)]
}



function gernatePassword(password = "") {
    if (upperCaseInput.checked) {
        password += getWrongWorld(upercaseSet)
    }
    if (lowerCaseInput.checked) {
        password += getWrongWorld(lowercaseSet)
    }
    if (NumberInput.checked) {
        password += getWrongWorld(numberSet)
    }
    if (SymbolesInput.checked) {
        password += getWrongWorld(specialSet)
    }

    if (password.length < totalCharInput.value) {
        return gernatePassword(password);
    }

    passShowBox.innerHTML = truncateString(password, totalCharInput.value)

    
}


btn.addEventListener('click',function () {
    gernatePassword();
})


function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) ;
    } else {
      return str;
    }
  }