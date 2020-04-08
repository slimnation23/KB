Vue.component("ukr", {
    template: `
    
<div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
  
  <div class="carousel-inner" id="header" role="listbox">

    <!-- First slide -->
    <div class="carousel-item active">
      <div class="view">
        <img class="d-block w-100 slider-img" src="img/header/header-photo.jpeg"
          alt="First slide">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <i class="fa fa-home fa-3x brand-icon" aria-hidden="true">
          <span class="ml-2 text-white">КБ</span>
        </i>
        <h1 class="text-uppercase my-4 text-white font-weight-bold">
          Проектування та будівництво будинків в Україні
        </h1>
        <p class="my-4" style="color: #dbdbdb">
        Будь-який проект на нашому сайті - ідеальне рішення для будівництва 
          сучасного енергозберігаючого будинку
        </p>
        <i class="fa fa-angle-double-down fa-2x arrow-down" href="#about-us" aria-hidden="true"></i>
      </div>
    </div>

    <!-- Second slide -->
    <div class="carousel-item">
      <div class="view">
        <img class="d-block w-100 slider-img" src="img/header/photo-hrader2.jpg"
          alt="First slide">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <i class="fa fa-home fa-3x brand-icon" aria-hidden="true">
          <span class="ml-2 text-white">КБ</span>
        </i>
        <h1 class="text-uppercase my-4 text-white font-weight-bold">
          Проектування та будівництво будинків в Україні
        </h1>
        <p class="my-4" style="color: #dbdbdb">
        Будь-який проект на нашому сайті - ідеальне рішення для будівництва 
          сучасного енергозберігаючого будинку
        </p>
        <i class="fa fa-angle-double-down fa-2x arrow-down" href="#about-us" aria-hidden="true"></i>
      </div>
    </div>

    <!-- Third slide -->
    <div class="carousel-item">
      <div class="view">
        <img class="d-block w-100 slider-img" src="img/header/serseya-min.jpg"
          alt="First slide">
        <div class="mask rgba-black-strong"></div>
      </div>
      <div class="carousel-caption">
        <i class="fa fa-home fa-3x brand-icon" aria-hidden="true">
          <span class="ml-2 text-white">КБ</span>
        </i>
        <h1 class="text-uppercase my-4 text-white font-weight-bold">
          Проектування та будівництво будинків в Україні
        </h1>
        <p class="my-4" style="color: #dbdbdb">
        Будь-який проект на нашому сайті - ідеальне рішення для будівництва 
          сучасного енергозберігаючого будинку
        </p>
        <i class="fa fa-angle-double-down fa-2x arrow-down" href="#about-us" aria-hidden="true"></i>
      </div>
    </div>

  </div>
</div>



<div class="container-fluid" style="background-color: #f7f7f7;">
  <div class="container py-5" id="about-us">
    <h1 class="text-uppercase text-center mb-3">Про компанію</h1>
    <div style="width: 70px; height: 2px; background-color: #fb3; margin-left: auto; margin-right: auto;"></div>
    <p class="text-center my-3 grey-text">
      Будівництво будинків за канадською технологією
    </p>

    <div class="row d-flex justify-content-center text-center my-5">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <i class="fa fa-lightbulb-o fa-4x" aria-hidden="true"
          style="border: 2px solid #fb3; border-radius: 50%; padding: 20px 35px; color: #fb3;"></i>
        <h5 class="text-center my-3 font-weight-bold">Індивідуальне проектування</h5>
        <p class="text-center my-3 grey-text">
          Проектуємо нестандартні об'єкти будівництва
        </p>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <i class="fa fa-building-o fa-4x" aria-hidden="true"
          style="border: 2px solid #fb3; border-radius: 50%; padding: 20px 30px; color: #fb3;"></i>
        <h5 class="text-center my-3 font-weight-bold">Будівництво "під ключ"</h5>
        <p class="text-center my-3 grey-text">
          Будівництво "під ключ": каркасних і модульних будинків, дач, котеджів, саун, міні-готелів, 
          будинків за канадською технологією та з sip-панелей
        </p>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <i class="fa fa-exclamation fa-4x" aria-hidden="true"
          style="border: 2px solid #fb3; border-radius: 50%; padding: 20px 40px; color: #fb3;"></i>
        <h5 class="text-center my-3 font-weight-bold">Працюємо понад 10 років</h5>
        <p class="text-center my-3 grey-text">
          За цей час збудовано понад 100 об'єктів в Україні та за її межами
        </p>
      </div>
    </div>
  </div>
</div>


<!-- Technology -->
<div class="container-fluid fixed-bg" style="background-image: url(img/mr-white-pattern.jpg);" id="techno">
<div class="container">
  <div class="row py-5">
    <div class="col-lg-6 col-sm-12 text-center">
      <img src="img/adult-architect-blueprint-business-416405.jpg" alt="image_window" class="w-100 z-depth-5 rounded mt-2 mb-4">
    </div>
    <div class="col-lg-5 offset-lg-1 col-sm-12">
      <h5 class="font-weight-bold py-3">ПРОЕКТУЄМО</h5>
      <div style="width: 70px; height: 2px; background-color: #fb3;"></div>
      <p class="my-3 grey-text">
        Будівництво кожного об'єкта починається з вибору проекту - архітектури будинку. 
        Ми пропонуємо вибір з безлічі варіантів вже готових (типових) проектів або розробку 
        індивідуального проекту з урахуванням особистих побажань замовника. 
        Проектування об'єкта - складний і мультизадачний процес, який вимагає правильного підходу, 
        знання програм та участі експертів. Тому ми намагаємося робити його максимально прозорим, 
        зрозумілим і вигідним для замовника.
      </p>
    </div>
  </div>
</div>
</div>

<div class="container-fluid" style="background-color: #f7f7f7;" id="about">
  <div class="container">
    <div class="row py-5">
      <div class="col-lg-5 col-sm-12 p-0">
        <h5 class="font-weight-bold py-3">БУДУЄМО</h5>
        <div style="width: 70px; height: 2px; background-color: #fb3;"></div>
        <p class="my-3 grey-text">
          Завдяки унікальній технології будівництва приватний будинок можна звести за 2-3 місяці. 
          Кожен етап будівництва ми виконуємо самостійно силами наших професійних бригад. 
          Кожен з наших будівельників - майстер своєї справи, який має великий досвід в будівництві приватних будинків.
          Ми дотримуємось строків будівництва та робимо доступним і зрозумілим для замовника кошторис. 
          Всі здані нами об'єкти в результаті стають найкращим місцем на землі для наших замовників. 
        </p>     
      </div>
      <div class="col-lg-6 offset-lg-1 col-sm-12 text-center">
        <img src="img/selective-focus-photography-cement-2219024.jpg" alt="image_window" class="w-100 z-depth-5 rounded mt-2 mb-4">
      </div>
    </div>
  </div>
</div>
<!-- Technology -->

<!-- Projects -->
<div class="container-fluid fixed-bg" id="project" style="background-image: url(img/mr-white-pattern.jpg);">
  <div class="container">
    <div class="row">
      <div class="col-lg-2 col-md-12 flex-column align-self-center text-center mb-3" id='myDIV'>
        <button onclick="selectTab1()" type="button" class="btn btn-dark tab activeTab">Проекти до 100</button>
        <button onclick="selectTab2()" type="button" class="btn btn-dark tab">Проекти від <br /> 100 до 200</button>
        <button onclick="selectTab3()" type="button" class="btn btn-dark tab">Проекти від 200</button>
      </div>
      <!-- Section 1 -->
      <div class="col-lg-5 col-md-12 animated pulse" id="section1">
        <h3 class="font-weight-bold pt-3">Проекти до 100 кв. м</h3>
        <p style=" color: rgb(134, 135, 139);" class="pt-4">
          Будинки до 100 кв. м. дуже популярні у наш час. Це вибір сімей, 
          яким потрібне компактне та практичне житло. Також серед наших проектів будинків оберете відмінний варіант для невеликої ділянки.
        </p>
        <p style="font-size: 14px; color: rgb(134, 135, 139);" class="pt-3">
          Нижче ви можете переглянути проекти будинків до 100 кв. м. 
          та обрати свій, який сподобався Вам найбільше.
        </p>
      </div>

      <!-- Section 2 -->
      <div class="col-lg-5 col-md-12 animated pulse" id="section2">
        <h5 class="font-weight-bold pt-3">Проекти від 100 до 200 кв. м</h5>
        <p style="font-size: 14px; color: rgb(134, 135, 139);" class="pt-4">
          Якщо ви збираєтесь збудувати будинок для своєї сім’ї, то проекти будинків до 200 кв. м – найкраще рішення. 
          Вони дозволяють включити в будинок всі необхідні зручності та мають достатню житлову площу навіть для декількох сімей.
        </p>
        <p style="font-size: 14px; color: rgb(134, 135, 139);" class="pt-3">
          Нижче ви можете переглянути проекти будинків від 100 до 200 кв. м 
          та обрати свій, який сподобався Вам найбільше.
        </p>
      </div>

      <!-- Section 3 -->
      <div class="col-lg-5 col-md-12 animated pulse" id="section3">
        <h5 class="font-weight-bold pt-3">Проекти від 200 кв. м</h5>
        <p style="font-size: 14px; color: rgb(134, 135, 139);" class="pt-4">
          Якщо ви переглядали наші проекти та вам не підійшов жоден із них, перегляньте проекти будинків на 200 м. кв. і більше. 
          Можливо один із них стане для вас оптимальним.
        </p>
        <p style="font-size: 14px; color: rgb(134, 135, 139);" class="pt-3">
          Нижче ви можете переглянути проекти будинків від 200 кв. м 
          та обрати свій, який сподобався Вам найбільше.
        </p>
      </div>
      
      <div class="col-lg-4 offset-lg-1 col-md-12 mt-5 animated pulse" id="sectionImg1">
        <img src="img/home100/s142-19-1.jpg" alt="home100" class="d-none d-lg-block w-100 z-depth-4 rounded">
      </div>
      <div class="col-lg-4 offset-lg-1 col-md-12 mt-5 animated pulse" id="sectionImg2">
        <img src="img/home100-200/Proekt-odnopoverhovogo-budynku-S166-19-.jpg" alt="home100-200"
         class="d-none d-lg-block w-100 z-depth-4 rounded">
      </div>
      <div class="col-lg-4 offset-lg-1 col-md-12 mt-5 animated pulse" id="sectionImg3">
        <img src="img/home200+/PROEKT-budynku-ION-.jpg" alt="home200" class="d-none d-lg-block w-100 z-depth-4 rounded">
      </div>
    </div>

    <!-- Projects100 -->
    <section id="project100">
      <div id="project1">
        <project100></project100>
      </div>
    </section>

    <!-- Projects 200 -->
    <section id="project200">
      <div id="project2">
        <project200></project200>
      </div>
    </section>

    <!-- Projects 300 -->
    <section id="project300">
      <div id="project3">
        <project300></project300>
      </div>
    </section>

    <div class="text-center">
      <button type="button" class="btn btn-warning drop-up" href="#project">
        <i class="fa fa-angle-double-up fa-3x" aria-hidden="true"></i>
      </button>
    </div>

  </div>
</div>
<!-- Projects -->

<!-- Custom Section -->
<div class="container-fluid custom-bg" style="background-image: url(img/man-holding-wooden-stick-while-drilling-hole-1094767.jpg);">
  <div class="custom-bg-content">
    <h1 class="text-uppercase text-center mb-4">Каркасне будівництво</h1>
    <p class="text-center"">
      З нами ви отримаєте саме той будинок про який мріяєте!  
    </p>
    <button type="button" class="btn btn-outline-light drop-down" href="#contacts">Зв'язатися з нами</button>
  </div>
</div>
<!-- Custom Section -->

<!-- Contact Us -->
<div class="container-fluid fixed-bg" id="project" style="background-image: url(img/mr-white-pattern.jpg);">

  <div class="container py-5" id='contacts'>
    <h1 class="text-uppercase text-center mb-3">Зв'язатися з нами</h1>
    <div style="width: 70px; height: 2px; background-color: #fb3; margin-left: auto; margin-right: auto;"></div>
    <p class="text-center my-3" style="font-size: 14px; color: rgb(134, 135, 139);">
      З вами зв'яжеться наш представник
    </p>
    
    <form class="form2 text-center" id="contact-form" name="contact-form" action="mail.php" method="POST">
      <input type="email" class="form2-field" name="email" placeholder="E-Mail" id="inputContact">
      <button class="btn2 btn2-primary btn2-inside uppercase" onclick="validateForm();">Відправити</button>
    </form>
    <div class="status"></div>
          
  </div>
</div>
<!-- Contact Us -->
  `
  });
  
  var projUkr = new Vue({
    el: "#locUkr",
    data: {}
  });