/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});  
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input, .fas, .image-box, .cd-card',{interval: 200}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img , .More-area, .button-area',{delay: 400});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Data Scientist","AI/ML Engineer","Data Analyst","Cloud Data Architect","Data Quality Analyst", "Data Engineer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

document.getElementById("download-btn").addEventListener("click", function () {
    // Path to the resume file
    const resumeUrl = "assets/Ishan_resume.pdf";

    // Open a new page and trigger the download
    const newWindow = window.open();
    if (newWindow) {
        // Write HTML content for the new page
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Downloading Resume</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin: 0;
                        padding: 50px;
                        background-color: #f4f4f4;
                    }
                    h1 {
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <h1>Your download will begin shortly...</h1>
                <p>If the download doesn't start automatically, <a href="${resumeUrl}" download>click here</a>.</p>
                <script>
                    setTimeout(() => {
                        window.location.href = "${resumeUrl}";
                    }, 2000);
                </script>
            </body>
            </html>
        `);
    } else {
        alert("Pop-ups are blocked. Please allow pop-ups for this website.");
    }
});


