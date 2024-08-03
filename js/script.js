//covid msg cross
      var cross = document.getElementById("cross");
      var searchAndSign = document.querySelector(".search-and-sign");
      var covidMsg = document.getElementById("covid-msg");
      var navBar = document.getElementById("navbar");

      // console.log(covidMsg);
      // console.log(navBar);
      // //Cross covid div
      // function removeCovidDiv(){
      //   console.log("hurry")
      //   covidMsg.style.display = "none"
      //   navBar.style.maxHeight = "70px"
      //   // navBar.style.border = "1px solid red"
      //   searchAndSign.style.top = "18px"
      // }
      // console.log(cross)
      // // cross.addEventListener('click',removeCovidDiv)
      // cross.addEventListener('click',removeCovidDiv)


      var midContBox = document.getElementById("mid-cont-box");
      var getStartedBtn = document.getElementById("get-started-btn");
      var midContBoxH1 = midContBox.querySelector("h1");
      var midContBoxP = midContBox.querySelectorAll("p");


      var stepCounter = 1;

      function backToPrevPage(){
        // console.log(stepCounter);
        if(stepCounter == 2){
          stepCounter = stepCounter-1;
          getStartedBtnClick();
        }else{
          stepCounter = stepCounter-2;
          getStartedBtnClick();
        }
      }



      function getStartedBtnClick(event){
        // console.log("hurry");
        var steps = document.getElementById('step');
        var back = document.getElementById('back');


        if(steps != null ){
          // console.log(steps);
          // console.log(back)

            steps.remove();
            if(back != null){
              back.remove();
            }  
        }
        var allBtns = document.querySelectorAll("button");
        //Adding Elements
        var stepCounterP = document.createElement("p");
        stepCounterP.setAttribute('id','step');

        var btn1 = document.createElement("button");
        var btn2 = document.createElement("button");
        var btn3 = document.createElement("button");

        //back styling and attribute
        var backP = document.createElement("a");
        backP.setAttribute('id','back');
        backP.setAttribute('href','#');
        backP.innerText = "Back"
        backP.style.textAlign = "left";
        backP.style.display = "block";
        backP.style.textDecoration = "none";
        backP.style.fontSize = "18px";
        backP.style.marginTop = "15px"

        

        // document.getElementById('step').remove();
        midContBox.insertBefore(stepCounterP,midContBoxH1);
        stepCounterP.textContent = "Step " + stepCounter + " of 5";

        //Adding style
        midContBoxH1.style.fontSize = "46px";
        midContBoxH1.style.fontWeight = "400";
        btn1.style.backgroundColor = "#0B8180";
        btn2.style.backgroundColor = "#0B8180";
        btn3.style.backgroundColor = "#0B8180";

        //Removing Element whuch are present in container so we can add new btns
        getStartedBtn.remove();
        midContBoxP.forEach(function(el){
          el.remove();
        })
         //Removing buttons
         allBtns.forEach(function(el){
            el.remove();
          })

        if(stepCounter == 1){
          midContBoxH1.textContent = "Have you run payroll yet this calendar year?";
          btn1.textContent = "Yes";
          btn2.textContent = "No";

          midContBox.appendChild(btn1);
          midContBox.appendChild(btn2);

          // midContBox.appendChild(backP);

        } else if(stepCounter == 2){
          //Adding style and content
          midContBoxH1.textContent = "How do you currently run payroll?";
          btn1.textContent = "We’re new to running payroll";
          btn2.textContent = "We use another online payroll software";
          btn3.textContent = "We do it ourselves manually";
          midContBox.appendChild(btn1);
          midContBox.appendChild(btn2);
          midContBox.appendChild(btn3);

          midContBox.appendChild(backP);

        } else if(stepCounter == 3){
          //Adding style and content
          midContBoxH1.textContent = "How would you describe your business setting?";
          btn1.textContent = "We work in an office";
          btn2.textContent = "We work in retail or food service";
          btn3.textContent = "We work in a factory, construction, or in the field";
          midContBox.appendChild(btn1);
          midContBox.appendChild(btn2);
          midContBox.appendChild(btn3);

          midContBox.appendChild(backP);

        } else if(stepCounter == 4){
          //Adding style and content
          midContBoxH1.textContent = "What type of workers do you need to pay?";
          btn1.textContent = "Employees (W-2s)";
          btn2.textContent = "Contractors (1099s)";
          btn3.textContent = "Both (W-2s & 1099s)";
          midContBox.appendChild(btn1);
          midContBox.appendChild(btn2);
          midContBox.appendChild(btn3);

          midContBox.appendChild(backP);

        } else if(stepCounter == 5){
          //Adding style and content
          midContBoxH1.textContent = "Interested in offering health benefits to your team?";
          btn1.textContent = "Yes";
          btn2.textContent = "No";
          midContBox.appendChild(btn1);
          midContBox.appendChild(btn2);

          midContBox.appendChild(backP);

        } 
        //Adding attribute in the back
        backP.addEventListener('click',backToPrevPage)
        btn1.addEventListener('click', getStartedBtnClick);
        btn2.addEventListener('click', getStartedBtnClick);
        btn3.addEventListener('click', getStartedBtnClick);
        
        if(stepCounter > 5){
          btn1.removeEventListener('click', getStartedBtnClick);
          btn2.removeEventListener('click', getStartedBtnClick);

          stepCounterP.remove()

          //form
          var inputName = document.createElement("input");
          var inputEmail = document.createElement("input");

          inputName.setAttribute('placeholder','Full Name');
          inputEmail.setAttribute('placeholder','Work Email Address');

          //below form
          var div1 = document.createElement("div");
          var div2 = document.createElement("div");

          div1.innerHTML = `Already use Gusto? <a href ='#'>Sign in here.<a>`
          div2.innerHTML = `By creating an account, you agree to the <a href ='#'>terms & conditions</a>, the <a href ='#'>payroll terms</a>, and <a href ='#'> our privacy policy.</a>`
       
          midContBoxH1.innerHTML = `Based on your response, Gusto could be a great fit for your business.`;
          midContBoxH1.style.fontSize = "34px";
          midContBoxH1.style.lineHeight = "43px";
          midContBoxH1.style.fontWeight = "400";

          btn1.innerHTML=`<img src="https://clipground.com/images/google-logo-clipart-transparent.png">Sign up with Google`;


          btn2.innerHTML = `<a href="login.html">Get Started</a>`;
          
          btn1.style.color = "black";
          btn1.style.backgroundColor = "#f8f5f2da";
          btn2.style.backgroundColor = "#F35D48";
          midContBox.appendChild(btn1);
          midContBox.appendChild(inputName);
          midContBox.appendChild(inputEmail);
          midContBox.appendChild(btn2);

          midContBox.appendChild(div1);
          midContBox.appendChild(div2);
          
        }

        stepCounter++;
        
      }
     
     getStartedBtn.addEventListener("click",getStartedBtnClick)





    
    var hamButton = document.getElementById("hamburger");
    var ham = document.getElementById("ham");
    
    var mainul = document.querySelector(".main-ul") 
    var hamPresent = 0;
    function sizeOfWindow(){
      if(window.innerWidth < 993){
        hamPresent = 1;
        // searchAndSign.style.top = "px"
        searchAndSign.style.right = "70px"
      } else{
        hamPresent = 0;
        navBar.style.height= "110px";
        navBar.style.width= "100%";
        searchAndSign.style.right = "26px"
      }
    }

    var hamClickCount = 1;
    function showNavBar(){
      document.body.scroll = "none";
      if(hamPresent == 1 && hamClickCount % 2 == 1){
        mainul.style.display = "flex";

        navBar.style.height= "100vh";

        ham.setAttribute('class','fas fa-times fa-2x');
      } 
      else{
        // console.log("hi")
        mainul.style.display = "none";
        navBar.style.height= "110px";

        ham.setAttribute('class','fas fa-bars fa-2x');
      }
      hamClickCount++;
    }

    window.addEventListener('resize', sizeOfWindow);
    hamButton.addEventListener('click',showNavBar);


  var clickItem = document.querySelectorAll(".main-li > a");
  // var sebmenu = document.querySelectorAll(" .sebmenu");
  
  var sebmenuCount = 0;

  function clickOnNav(event){
    // console.log(event.target);
    var sebmenu = event.target.parentNode.querySelector(" .sebmenu");
    // var arrow = event.target.parentNode.parentNode.querySelector("i")
    // console.log(sebmenu)
    // console.log(arrow)
    if(sebmenuCount % 2 == 0){
      sebmenu.style.display = "block";
      
      // arrow.style.transform= "rotate(225deg)"
    } else{
      sebmenu.style.display = "none";
    }
    sebmenuCount++;
  }

  clickItem.forEach(function(el){
    el.addEventListener('click',clickOnNav);
  })
  

 