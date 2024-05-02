import menuMobile from "./module/menuMobile.js";
import SlideNav from "./module/slidenav.js";
import scrollAnimation from "./module/scrollAnimation.js";
import scrollSmooth from "./module/scrollSmooth.js";

const menu = new menuMobile('.toggle','.list-menu','.line');

menu.start()


const slide= new SlideNav('.slide','.slider-wrapper');

slide.init();

slide.addControl('.custom-control')


const scroll = new scrollAnimation('.js-scroll');

scroll.init();


const smooth = new scrollSmooth('.list-menu a[href^="#"]');

smooth.init();