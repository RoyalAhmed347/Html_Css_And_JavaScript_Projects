let creatProductBtn = document.getElementById('creatProductBtn');
let resetBtn = document.getElementById('resetBtn');
let printBtn = document.getElementById('printBtn');

let itemsList = document.getElementById('itemsList')

let totalAount = 0;

creatProductBtn.addEventListener('click',function(){
    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;
    let productQuantity = document.getElementById('productQuantity').value;

    if (productName == '') {
        alert('Plese Enter Product Name')
    } 
    else if(productPrice == '') {
        alert('Plese Enter Price ')
    }
    else if(productQuantity == '') {
        alert('Plese Enter Quantity ')
    }
    else{
        let newItem = document.createElement('li');
        newItem.classList.add('flex');
        let TPrice = productPrice*productQuantity;
        newItem.innerHTML=`           <p>${productName}</p>
            <p>${productPrice}</p>
            <p>${productQuantity}</p>
            <p>${TPrice}</p>`
            itemsList.appendChild(newItem);

            totalPriceUpdate(TPrice);

            document.getElementById('productName').value = '';
            document.getElementById('productPrice').value = '';
            document.getElementById('productQuantity').value = '';
        }
    
})

resetBtn.addEventListener('click',()=>{
    location.reload()
})



const totalPriceUpdate = (price) =>{
    totalAount += price;
    let totalPrice = document.getElementById('totalPrice').innerHTML = totalAount;
     

}