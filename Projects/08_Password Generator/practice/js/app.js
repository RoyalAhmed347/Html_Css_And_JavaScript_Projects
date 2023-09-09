const upercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const specialSet = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"



const passShow = document.getElementById('passShow');
const numberInput = document.getElementById('numberInput');
const upperCase = document.getElementById('upperCase');
const lowCase = document.getElementById('lowCase');
const number = document.getElementById('number');
const symbole = document.getElementById('symbole');
const btn = document.getElementById('btn');


function getRandomNumber(data){
    return data[Math.floor(Math.random() * data.length)]
}


function getRandomPassword(password = ''){
    if (upperCase.checked) {
        password += getRandomNumber(upercaseSet)
    } 
    if (lowCase.checked) {
        password += getRandomNumber(lowercaseSet)
    } 
    if (number.checked) {
        password += getRandomNumber(numberSet)
    } 
    if (symbole.checked) {
        password += getRandomNumber(specialSet)
    } 
    if (password.length < numberInput.value) {
        return getRandomPassword(password);
    }
    passShow.innerHTML = truncateString(password,numberInput.value)
    

}


btn.addEventListener('click',function(){
    getRandomPassword()
})

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) ;
    } else {
      return str;
    }
  }