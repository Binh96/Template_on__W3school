const menus= [
    {
        name: 'Coffe',
        price: 'Regular coffee 2.50',
    },

    {
        name: 'Chocolato',
        price: 'Chocolate espresso with milk 4.50',
    },

    {
        name: 'Corretto',
        price: 'Whiskey and coffee 5.00',
    },

    {
        name: 'Iced tea',
        price: 'Hot tea, except not hot 3.00',
    },

    {
        name: 'Soda',
        price: 'Coke, Sprite, Fanta, etc. 2.50',
    },

];

const buttonMenus = document.querySelectorAll('.btn');

buttonMenus.forEach((button) => {
    button.onclick= function(){
        const buttonElement= document.querySelector('.btn.active');
        buttonElement.classList.remove("active");
        this.classList.add('active');
        
});


