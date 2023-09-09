document.addEventListener('DOMContentLoaded', () => {
    const navBtns = document.querySelectorAll('nav .btn');
    console.log(navBtns);
    const items = document.querySelectorAll('main .item');
    console.log(items);

    navBtns.forEach((cruntBtn)=>{
        const dataValue = cruntBtn.getAttribute('data-filter');

        cruntBtn.addEventListener('click',(e)=>{
            navBtns.forEach((btn)=>{
            btn.classList.remove('active')
            })
            e.target.classList.add('active');


            items.forEach((item)=>{
                if (dataValue == 'all' || item.classList.contains(dataValue)) {
                    item.style.display = 'block'
                }else{
                    item.style.display = 'none'
                }
            })
        })
    })
})