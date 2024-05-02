export default class menuMobile{
    constructor(toggle,menu,icon){
        this.toggle=document.querySelector(toggle);
        this.menu=document.querySelector(menu);
        this.icon=document.querySelector(icon);
    }


    activeToggle(event){
        if(event.type === "touchstart"){
            event.preventDefault();
        }

        this.menu.classList.toggle('open');
        this.icon.classList.toggle('open');
    }



    eventMenu(){
        this.toggle.addEventListener('click',this.activeToggle);
        this.toggle.addEventListener('touchstart',this.activeToggle);
    };


    bindEvent(){
        this.activeToggle = this.activeToggle.bind(this);
    };


    start(){
        if(this.menu){
            this.bindEvent();
            this.eventMenu();
        }
    }
}