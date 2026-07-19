/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});

/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("themeToggle");

const body = document.body;

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

".card,.portfolio-card,.timeline-item,.about-grid div,.testimonial-card,.case-box,.tool-grid div,.section-title"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up","active");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(el=>observer.observe(el));

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters=document.querySelectorAll(".counter-grid h1");

const speed=60;

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

const increment=Math.ceil(target/speed);

count+=increment;

if(count<target){

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================================
   CONTACT FORM
========================================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.borderColor="red";

valid=false;

}else{

input.style.borderColor="#ddd";

}

});

if(valid){

alert("Thank you! Your message has been sent.");

form.reset();

}

});

}

/* ==========================================
   STICKY NAVBAR SHADOW
========================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{

position:"fixed",

bottom:"30px",

right:"30px",

width:"55px",

height:"55px",

border:"none",

borderRadius:"50%",

background:"#111",

color:"#fff",

cursor:"pointer",

display:"none",

fontSize:"18px",

zIndex:"999"

});

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

document.querySelectorAll(".portfolio-card img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* ==========================================
   CURRENT YEAR
========================================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

console.log("Portfolio Loaded Successfully 🚀");

.meeting-card{
    background:#151515;
    padding:35px;
    border-radius:18px;
    text-align:center;
    border:1px solid rgba(255,255,255,.08);
}

.meeting-card h3{
    color:#fff;
    margin-bottom:15px;
}

.meeting-card p{
    color:#cfcfcf;
    margin-bottom:25px;
}

.meeting-btn{
    display:inline-block;
    background:#fff;
    color:#111;
    padding:14px 28px;
    border-radius:50px;
    text-decoration:none;
    font-weight:700;
    transition:.3s;
}

.meeting-btn:hover{
    transform:translateY(-3px);
}
