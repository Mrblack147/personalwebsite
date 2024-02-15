/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});





// Destroy the Typed instance when needed (e.g., when removing the element)




ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  strings: ['Global Speaker', 'Developer', 'Author', 'Mentor', 'Blogger', 'AI Expert'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
 
  loop: true
});














// only testimony below 


const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Mohamed Nazrudeen',
    position: 'Student',
    photo: 'images/naseer.jpg',
    text:
      "Meeting Mohammed Azarudeen was truly inspiring His multifaceted skills and engaging stories, left a lasting impact. His global speaking engagements were incredibly interactive, boosting confidence and shedding light on entering the IT sector. His advice isn't just advice; it's a call to develop skills that define us. Learning from him was a great opportunity.",
  },
  
  {
      name: 'Harun Raseed Basheer',
      position: 'Microsoft MCT and Data engineer',
      photo:
        'images/harun.jpg',
      text:
        "Azar is a standout professional in the IT industry, bringing both expertise and enthusiasm to the tech landscape. As a seasoned professional, he not only excels in the IT field but generously shares his knowledge by taking engaging sessions on various Azure topics. What sets Azar apart is his commitment to regularly inspiring college students with insightful talks. I wish you continued success in this journey and the ongoing impact you make on both professionals and the community.",
    },
    {
      name: 'Vivel Raja',
      position: 'Lead - Azure Developer Community (Chennai)',
      photo:
        'images/vivek.jfif',
      text:
        'Azar stands out as an exceptional community speaker and valuable member, recognized within the vibrant Azure Developer Community in Chennai. His notable contributions include serving as a dynamic speaker, driving impactful events, and, perhaps most significantly, offering invaluable mentorship to individuals within the community.',
    },
    {
      name: 'Suresh Babu Lakshmanan',
      position: 'Associate Vice President- ICT Academy',
      photo: 'images/suresh.jpg',
      text:
        "Azar, to me, is a high-octane youngster actively participating in community impact engagements that have received overwhelming feedback from educators and students. As someone actively working towards the goal of creating the next generation of talent, I wish him all the success in his professional journey and hope his tribe continues to thrive",    
        
    },
    {
      name: 'Prathap Reddy',
      position: 'Microsoft MVP and Data Engineer',
      photo: 'images/prathap.jpg',
      text:
        'Azar is a passionate innovator, who actively involves in the global Al community. His enthusiasm for new advancements in AI shines through, making him a valuable asset and inspiring figure within the tech sphere Im following his passion for Al and innovation, active community involvement, and most importantly valuable contributions and expertise on Azure AI',
    },
    {
      name: 'Kadhija',
      position: 'Senior Specialist',
      photo: 'images/kadhija.jpg',
      text:
        "Azar stands out as an outstanding speaker and motivator within the youth community. His speeches are dedicated to inspiring young individuals to pursue and achieve their goals. He consistently goes above and beyond, offering support to those in need. I sincerely appreciate his continuous service and unwavering enthusiasm. I find his smile admirable, and whenever I request his support for community service, I have never heard a refusal from him. Furthermore, he encourages his friends and colleagues to join in his efforts. ",
    },

    {
      name: 'Nandan Hegde',
      position: 'Microsoft MVP (Data)',
      photo: 'images/Nandan.jpg',
      text:
        "Azar is a spirited Developer, actively engaging with the community and sharing his expertise on Cloud concepts/technologies  across multiple forums via blogs, articles, Global speaking engagements and many moreHe passionately engages and guides the next gen developers!!!!Please keep up this great work and thank you for your valuable insights.",
    },
   
    
    
  ]

  let idx = 1;

  function updateTestimonial() {
    const {name, position, photo, text}= testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length -1) {
        idx = 0;
    }

  }

  setInterval(updateTestimonial, 19000);