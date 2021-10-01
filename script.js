


  let dogDiv = document.querySelector("#doggo");
  //console.log(dogDiv)


let dogTbrow = document.querySelector("#doggo-votes");


  let dogBtn = document.createElement("button");
      dogBtn.textContent = "Vote for Doggo";  
      dogDiv.append(dogBtn);


      dogBtn.addEventListener("click",function(){
     //console.log("button was clicked");
        console.log(dogTbrow);
      });





