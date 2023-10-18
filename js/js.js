document.addEventListener('click', (e)=>{
    e.preventDefault()
})

class MobileNavBar{
    constructor(mobileMenu,navList,navLinks,redes,redesLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.redes = document.querySelectorAll(redes)
        this.redesLinks = document.querySelectorAll(redesLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link,index) =>{
         link.style.animation
         ? (link.style.animation = "")
         : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass) 
        this.mobileMenu.classList.toggle(this.activeClass) 
        this.animateLinks()
    }

addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
}

init(){
    if(this.mobileMenu){
        this.addClickEvent()
    }
    return this
}

}

const mobileNavBar = new MobileNavBar(
    ".tres-barrinha",
    ".info",
    ".info li",
)

mobileNavBar.init()