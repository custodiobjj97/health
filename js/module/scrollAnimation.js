export default class scrollAnimation{
    constructor(elements){
        this.elements=document.querySelectorAll(elements);
        this.activeClass="active";
    };

    handleScroll(){
        this.elements.forEach((element) => {
            const top = element.getBoundingClientRect().top;
            const halfHieght = window.innerHeight * 0.6;
            const isSectionOpen = (top - halfHieght) < 0;
            if(isSectionOpen){
                element.classList.add(this.activeClass);
            };
        });
    };


    eventScrol(){
        window.addEventListener('scroll', this.handleScroll);
    };


    bindEvent(){
        this.handleScroll = this.handleScroll.bind(this);
    };


    init(){
        if(this.elements.length){
            this.bindEvent();
            this.eventScrol();
            this.handleScroll();
        }
    }
}