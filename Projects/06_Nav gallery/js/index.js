document.addEventListener('DOMContentLoaded',()=>{
    const manuBtn = document.querySelectorAll('.ul .btn');
    const itemBox = document.querySelectorAll('.item-box');

    manuBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            const filterData = btn.getAttribute('data-filter');
            const cruntBtn = e.target;
            manuBtn.forEach((btn)=>{
                btn.classList.remove('active')
            })
            cruntBtn.classList.add('active')

            itemBox.forEach((box)=>{                
                if (filterData ==  'all' || box.classList.contains(filterData)) {
                    box.style.display = 'block'
                }else{
                    box.style.display = 'none'
                }
            })
        })
    })
})
