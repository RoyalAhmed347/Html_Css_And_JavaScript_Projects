const cartItem = document.getElementById('cartItem');
const cartItmeData = document.getElementById('cartItmeData');
let baskit = JSON.parse(localStorage.getItem('items')) || [];


const cartItemsUpdate = () =>{
    cartItem.innerHTML = baskit.length;
    let serial = 0;
    let total_Product_Price = 0;
    let shiping_Chargies = 100;
    let total_Amount = 0;
    cartItmeData.innerHTML = "";


    if (baskit.length == 0) {
        let newCreatItem = document.createElement('div');
            newCreatItem.classList.add('emptyitem');
        
            newCreatItem.innerHTML = " "
            newCreatItem.innerHTML = `
            
                                <h4>Your Cart is empty</h4>
                                
                            
            `;
        
            cartItmeData.appendChild(newCreatItem);
        
    } else {
        baskit.forEach((item) => {
            let {id,name,price,img} = item;
            let newCreatItem = document.createElement('div');
            newCreatItem.classList.add('cart_item');
        
            serial++;
            
                
            newCreatItem.innerHTML = " "
            newCreatItem.innerHTML = `
            
                                <h5>${serial} #</h5>
                                <img src="${img}" alt="">
                                <div class="item_info">
                                    <h5>${name}</h5>
                                </div>
                                <div class="itme_price">
                                    <h5>$${price}</h5>
                                </div>
                                <i class="fa-solid fa-trash trash" onclick=" removeItem(${id})"></i>
                            
            `;
        
            cartItmeData.appendChild(newCreatItem);
        
                function totalCalculate(){
                    total_Product_Price += (+price);

                    total_Amount = shiping_Chargies + total_Product_Price;

                    document.getElementById('total_Projuct_Amount').innerHTML = `$${total_Product_Price}`;
                    document.getElementById('shiping_Chargies').innerHTML = `$${shiping_Chargies}`;
                    document.getElementById('total_Amount').innerHTML = `$${total_Amount}`;
                }
                totalCalculate()
        
        });
    }
}



cartItemsUpdate();




function removeItem(id) {
    baskit = baskit.filter((item)=> {
        return item.id != id
    })

    localStorage.setItem('items', JSON.stringify(baskit))
    cartItemsUpdate();

}