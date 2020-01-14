const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


 let navText = document.querySelectorAll('a')
navText.forEach((link,i) =>{
  link.textContent = siteContent ['nav'][`nav-item-${i + 1}`];
})

let green = document.querySelectorAll('nav a').forEach(link => link.style.color = 'green');


 ///img
const ctaImg = document.getElementById('cta-img');

ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
/// heading
const ctaHeading = document.querySelector('.cta-text h1')

ctaHeading.textContent = siteContent.cta.h1
///button
const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent.cta.button

///middleImg

const middleImg = document.getElementById('middle-img')

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

///topContent

const h4Top = document.querySelectorAll('.top-content h4');

h4Top[0].textContent = siteContent["main-content"]["features-h4"]
h4Top[1].textContent = siteContent["main-content"]["about-h4"]

const pTop = document.querySelectorAll('.top-content p')

pTop[0].textContent = siteContent['main-content']['features-content']
pTop[1].textContent = siteContent['main-content']['about-content']

//bottomContent

const bottomH4 = document.querySelectorAll('.bottom-content h4')

bottomH4[0].textContent = siteContent["main-content"]["services-h4"]
bottomH4[1].textContent = siteContent["main-content"]["product-h4"]
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"]

const bottomP = document.querySelectorAll('.bottom-content p')

bottomP[0].textContent = siteContent["main-content"]["services-content"]
bottomP[1].textContent = siteContent["main-content"]["product-content"]
bottomP[2].textContent = siteContent["main-content"]["vision-content"]

///contact 

const contacth4 = document.querySelector('.contact h4')

contacth4.textContent = siteContent.contact["contact-h4"]

const contactP = document.querySelectorAll('.contact p')

contactP[0].textContent = siteContent.contact.address
contactP[1].textContent = siteContent.contact.phone
contactP[2].textContent = siteContent.contact.email

///footer

const footerP = document.querySelector('footer p')
footerP.textContent = siteContent.footer.copyright