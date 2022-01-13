const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const sideBarLink= $$('.sidebar-link');
const sideBarSubList= $('.sidebar-sub-list');
sideBarLink.forEach((link, index) =>{
    link.onclick= function(){
        sideBarSubList.classList.add('active');
        this.classList.add('active');
        // $('.sidebar-link.active').classList.remove('active');
    }
});