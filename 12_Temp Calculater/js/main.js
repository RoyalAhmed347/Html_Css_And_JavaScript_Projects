const celtofarn = (cle) =>{
    cle = (cle * 9/5) + 32
    return cle;
}

const farntocel = (farn) =>{
    farn = (farn -32) * 5/9
    return farn;
}

let result;

const calculator = () =>{
    let tempNumber = document.getElementById('tempNumber').value;

    let tempType = document.getElementById('tempType');

    let selectedValue = tempType.options[tempType.selectedIndex].value;

    

    if (selectedValue == 'cle') {
        result = celtofarn(tempNumber);
        document.getElementById('tempResult').textContent = `
        = ${result} °Fahrenheit
        `
    } else {
        result = farntocel(tempNumber);
        document.getElementById('tempResult').textContent = `
        = ${result} °Celsius
        `
    }

}

