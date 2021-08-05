const toggler = document.querySelector("#menuToggler")
const menu = document.querySelector("#menu")

toggler.addEventListener('click',

()=>{
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        
    }
    else {
        menu.classList.add('hidden');
    }
})