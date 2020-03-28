// buttonsTab
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let sectionImg1 = document.getElementById("sectionImg1");
let sectionImg2 = document.getElementById("sectionImg2");
let sectionImg3 = document.getElementById("sectionImg3");

function selectTab1() {
  section1.style.display = "block";
  sectionImg1.style.display = "block";
  section2.style.display = "none";
  sectionImg2.style.display = "none";
  section3.style.display = "none";
  sectionImg3.style.display = "none";
}

function selectTab2() {
  section1.style.display = "none";
  sectionImg1.style.display = "none";
  section2.style.display = "block";
  sectionImg2.style.display = "block";
  section3.style.display = "none";
  sectionImg3.style.display = "none";
}

function selectTab3() {
  section1.style.display = "none";
  sectionImg1.style.display = "none";
  section2.style.display = "none";
  sectionImg2.style.display = "none";
  section3.style.display = "block";
  sectionImg3.style.display = "block";
}

// buttonsTab active
let btnContainer = document.getElementById("myDIV");

let btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("activeTab");
    current[0].className = current[0].className.replace(" activeTab", "");
    this.className += " activeTab";
  });
}

// Scroll
let headerHeight = $('nav').outerHeight();

$('.nav-link').click(function(e) {
  let linkHref = $(this).attr('href');
  
  console.log(headerHeight);
  
  $('html, body').animate({
    scrollTop: $(linkHref).offset().top - headerHeight
  }, 200)
 
  e.preventDefault();
});

// let headerHeight = document.getElementsByTagName('nav');
// let myLink = document.getElementsByClassName('nav-link');
// let htmlAnimate = document.getElementsByTagName('html');

// for (i = 0; i <= myLink.length; i++) {

//   myLink[i].onclick = (e) => {

//     let linkHref = this.document.getElementsByName('href');

//     e.preventDefault();
//   }
// }

