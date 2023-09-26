const main_shop = document.getElementById('main_shop');
const cartItem = document.getElementById('cartItem');
let baskit = JSON.parse(localStorage.getItem('items')) || [];

shopItemsData.forEach((item)=>{
    let {id,name,price,desc,img} = item;

    let newItem = document.createElement("div");
    newItem.classList.add('item');
    newItem.setAttribute('id', id);
    newItem.innerHTML = `
    
<img src="${img}" alt="">
<div class="item_details">
    <h5>${name}</h5>
    <p class="dis">${desc}</p>
    <p class="price">Price <span> <sup>$</sup>${price}</p></span>
    <button class="cartBtn" onclick ="add_to_cart('${id}','${name}','${price}','${img}')" >Add to cart</button>
</div>

`

main_shop.appendChild(newItem)
    
    
})


const  add_to_cart= (id,name,price,img) =>{

    baskit.push({
        id: id,
        name: name,
        price: price,
        img: img
    })

    localStorage.setItem('items', JSON.stringify(baskit))
    cartItemsUpdate();

}

const cartItemsUpdate = () =>{
    cartItem.innerHTML = baskit.length;
}

cartItemsUpdate();