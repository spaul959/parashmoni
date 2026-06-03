let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");
let detailModal = document.getElementById("doctorDetail");
let overlay = document.getElementById("overlay");

let count = 0;

// Initialize slide positions
slide.forEach(function(slides, index){
   slides.style.left = `${index * 100}%`;
});

function myFun(){
   slide.forEach(function(curVal){
       curVal.style.transform = `translateX(-${count * 100}%)`;
   });
}

// Slider logic
setInterval(function(){
   count++;
   if(count == slide.length){
       count = 0;
   }
   myFun();
}, 3000); // Increased to 3 seconds for better readability

// Card Modal Logic
card.forEach(function(cards){
   cards.addEventListener("click", function(){
       detailModal.style.display = "block";
       overlay.style.display = "block";
       
       document.querySelector(".content").innerHTML = `
       <img src="${cards.firstElementChild.src}" alt="Doctor Image">
       <div class="contentText">
           <h1>Subham Paul</h1>
           <p>General Physician, MBBS, BSMCH.</p>
           <p style="margin-top: 15px; color: #666; line-height: 1.5;">Dedicated professional with extensive experience in general medicine, providing comprehensive care and consultation.</p>
       </div>
       `;
   });
});

// Close Modal Logic
function closeModal() {
    detailModal.style.display = "none";
    overlay.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Form Validation
connectBtn.addEventListener("click", function(e){
   e.preventDefault(); // Prevent default form submission behavior
   
   let email = document.getElementById("email");
   let pass = document.getElementById("password"); // Fixed ID mapping here

   if(email.value.trim() === "" || pass.value.trim() === ""){
       alert("Please enter both Email and Password details.");
   } else {
       alert("Successfully Logged In!");
       email.value = "";
       pass.value = "";
   }
});