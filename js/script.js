let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let sectionImg1 = document.getElementById('sectionImg1');
let sectionImg2 = document.getElementById('sectionImg2');
let sectionImg3 = document.getElementById('sectionImg3');

function selectTab1(a) {
    section1.style.display = 'block'
    sectionImg1.style.display = 'block'
    section2.style.display = 'none'
    sectionImg2.style.display = 'none'
    section3.style.display = 'none'
    sectionImg3.style.display = 'none'
}

function selectTab2() {
    section1.style.display = 'none'
    sectionImg1.style.display = 'none'
    section2.style.display = 'block'
    sectionImg2.style.display = 'block'
    section3.style.display = 'none'
    sectionImg3.style.display = 'none'
}

function selectTab3() {
    section1.style.display = 'none'
    sectionImg1.style.display = 'none'
    section2.style.display = 'none'
    sectionImg2.style.display = 'none'
    section3.style.display = 'block'
    sectionImg3.style.display = 'block'
}

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeTab");
    current[0].className = current[0].className.replace(" activeTab", "");
    this.className += " activeTab";
  });
}





