//LOGIN MODAL

let activate = document.getElementById("modal-btn-1"); //
let modal = document.getElementById("modal");
let close = document.getElementById("close");

activate.addEventListener("click", openLogIn);

function openLogIn() {
  modal.style.display = "flex";
}

close.addEventListener("click", closeLogIn);

function closeLogIn() {
  modal.style.display = "none";
}

//SIGN UP MODAL
let activate2 = document.getElementById("modal-btn-2");
let modal2 = document.getElementById("modal2");
let close2 = document.getElementById("close2");

activate2.addEventListener("click", openSignUp);

function openSignUp() {
  modal2.style.display = "flex";
}

close2.addEventListener("click", closeSignUp);

function closeSignUp() {
  modal2.style.display = "none";
}




//DISPLAY CARDS



let cards = [{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/400_tennis_sgniee.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/bball_280_lo12bf.jpg",
  caption: "",
  title: "Basketball on a sunny day!"
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/soccor_350_tauwrg.jpg",
  caption: "Worldwide soccer",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/track_360_tns8du.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538810/Pinterest/bball_250_qmtbmw.jpg",
  caption: "",
  title: "Heey! Batter Batter!"
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/bball_310_ho0j1d.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/swim_200_clmu3p.jpg",
  caption: "",
  title: "Take a dive."
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/track_290_bt54pm.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/275_weight_w4u3jc.jpg",
  caption: "",
  title: "Lorem, ipsum dolor."
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/bike_220_wtjpha.jpg",
  caption: "Lorem ipsum dolor sit amet.",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/175_hiking_e7g8uv.jpg",
  caption: "Lorem ipsum dolor sit.",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/250_baseball_ugnp38.jpg",
  caption: "",
  title: "Out of the park!"
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/275_weight_w4u3jc.jpg",
  caption: "",
  title: "How much can you lift?"
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/soccor_350_tauwrg.jpg",
  caption: "Worldwide soccer",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/100_baseball_b3nbju.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/bball_310_ho0j1d.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/bike_220_wtjpha.jpg",
  caption: "See the world on two wheels.",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/bball_280_lo12bf.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538810/Pinterest/bball_250_qmtbmw.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/300_football_fh99so.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/track_360_tns8du.jpg",
  caption: "",
  title: "Speedy Gonzales."
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/400_tennis_sgniee.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/swim_200_clmu3p.jpg",
  caption: "",
  title: "Take a dive."
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/track_290_bt54pm.jpg",
  caption: "",
  title: "Lorem,"
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/300_football_fh99so.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/175_hiking_e7g8uv.jpg",
  caption: "Hikes can be relaxing.",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/250_baseball_ugnp38.jpg",
  caption: "",
  title: ""
},
{
  img: "https://res.cloudinary.com/dsip2gx3i/image/upload/v1599538809/Pinterest/100_baseball_b3nbju.jpg",
  caption: "",
  title: ""
}]

// PIN NUMBER COUNT
let pinNumber = document.querySelector(".number");
pinNumber.textContent = cards.length


window.addEventListener('DOMContentLoaded', function(){
  let imageSection = document.querySelector(".card-columns");

  displayCards = cards.map(function(card){
      return `<div class="tiles">
                  <img src="${card.img}" alt="sports pic" class="sports-pic" />
                  <div class="tile-body">
                      <h3 class="tile-title">${card.title}</h3>
                      <p>${card.caption}</p>
                  </div>
              </div>`
  })

  displayCards = displayCards.join("");
      imageSection.innerHTML = displayCards;
})


/*
  `<div class="tiles">
      <img src="${card.img}"" alt="sports pic" class="sports-pic" />
      <div class="tile-body">
          <h3 class="tile-title">${card.title}</h3>
          <p>${card.caption}</p>
      </div>
  </div>`
*/