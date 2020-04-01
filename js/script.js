// buttonsTab
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let sectionImg1 = document.getElementById("sectionImg1");
let sectionImg2 = document.getElementById("sectionImg2");
let sectionImg3 = document.getElementById("sectionImg3");
let scrollDown = document.getElementsByClassName("arrow-down");

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
let headerHeight = $("nav").outerHeight();

$(".nav-link").click(function(e) {
  let linkHref = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(linkHref).offset().top - headerHeight
    },
    200
  );

  e.preventDefault();
});

$(".arrow-down").click(function(e) {
  let linkHreff = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(linkHreff).offset().top - headerHeight
    },
    100
  );

  e.preventDefault();
});

$(".drop-down").click(function(e) {
  let dropDown = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(dropDown).offset().top - headerHeight
    },
    100
  );

  e.preventDefault();
});

// Slider
$(".carousel").carousel({
  interval: 2500
});

// Focus contact

function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}
