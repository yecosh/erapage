function app(){
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.img')

    function filter(category,items){
        items.forEach((item) => {
            const isItemFilter = item.classList.contains(category)
            const isAll = category.toLowerCase() === 'all'
            if (isItemFilter && !isAll){
                item.classList.remove('hide')
            }
            else{
                item.classList.add('hide')
            }
            if(isAll){
                item.classList.remove('hide')
            }
        })
    }

    buttons.forEach((button) =>{
        button.addEventListener('click',() => {
            const currectCategory =button.dataset.f
            filter(currectCategory,cards)
            console.log(button.dataset.f)
        })
    })
}
app()
