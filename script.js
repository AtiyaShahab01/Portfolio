// REVEAL + COUNTER
const reveals = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
let started = false;

window.addEventListener("scroll", () => {

    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("active");

            if(!started){
                startCounters();
                started = true;
            }
        }
    });

    revealSkills();
});

// COUNTER
function startCounters(){
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;

        function update(){
            count++;
            counter.innerText = count;

            if(count < target){
                requestAnimationFrame(update);
            }
        }
        update();
    });
}

// // SKILLS
// const skillItems = document.querySelectorAll(".skill-item");

// function revealSkills(){
//     skillItems.forEach((item,i)=>{
//         const top = item.getBoundingClientRect().top;

//         if(top < window.innerHeight - 80){
//             setTimeout(()=>{
//                 item.classList.add("active");
//             }, i*100);
//         }
//     });
// }


// SERVICES ANIMATION

const serviceItems = document.querySelectorAll(".service-item");

function revealServices(){
    serviceItems.forEach((item, index) => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            setTimeout(() => {
                item.classList.add("active");
            }, index * 120); // smooth stagger effect

        }

    });
}

// SCROLL EVENT
window.addEventListener("scroll", revealServices);

// PROJECTS
const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry,i)=>{
        if(entry.isIntersecting){
            setTimeout(()=>{
                entry.target.classList.add("show");
            }, i*150);
        }
    });
},{threshold:0.2});

cards.forEach(card=>observer.observe(card));

const words = ["Online Presence", "Shopify Store", "eCommerce Brand"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

  if(!typing) return;

  currentWord = words[i];

  if(isDeleting){
    typing.textContent = currentWord.substring(0, j--);
  } else {
    typing.textContent = currentWord.substring(0, j++);
  }

  let speed = isDeleting ? 50 : 100;

  if(!isDeleting && j === currentWord.length){
    speed = 1500;
    isDeleting = true;
  } 
  else if(isDeleting && j === 0){
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();








/* Testimonials*/
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".testimonial-container");
  const cards = document.querySelectorAll(".testimonial-card");
  const dotsContainer = document.querySelector(".dots");

  if (!container || cards.length === 0) return;

  let index = 0;

  /* Create dots */
  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 20; // card + gap
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });

    cards.forEach(card => card.classList.remove("active"));
    if (cards[index]) cards[index].classList.add("active");

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  /* Click card to activate */
  cards.forEach((card, i) => {
    card.addEventListener("click", () => {
      index = i;
      updateSlider();
    });
  });

  /* Intersection Observer for initial fade-in animation */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {threshold: 0.2});

  cards.forEach(card => observer.observe(card));

  /* Initialize */
  updateSlider();
});










/* Skilss Section*/
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 100); // stagger animation
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});