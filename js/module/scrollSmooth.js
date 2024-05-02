export default class scrollSmooth{
    constructor(links){
       this.links = document.querySelectorAll(links);
       this.handleSmooth = this.handleSmooth.bind(this);
    };


    handleSmooth(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior:'smooth',
            block:'start',
        });
    };


    eventSmooth(){
        this.links.forEach((link)=>{
            link.addEventListener('click', this.handleSmooth)
        });
    };

    init(){
        if(this.handleSmooth.length){
            this.eventSmooth()
        }
        return this
    }
};