function togglePopup() {
  document.getElementById('popup-1').classList.toggle('active');
}
togglePopup();

function renderFirstCard() {
  const div = document.createElement('div');
  div.className = 'middle-image1-container';
  div.innerHTML = `<img class="middle-image1" src="assets/images/bigimageplaceholder.png" alt="Image place holders">
    <div class="middle-1-container">
      <h2>Multi-Post Stories</h2>
      
      <p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.</p>


      <button type="button">css</button>
      <button type="button"> html</button>
      <button type="button">bootstrap</button>
      <button type="button">Ruby</button>
      <button type="button" onclick="openPopup(6)" id="see-button-one">See project</button>
    </div>
  </div>`;
  document.querySelector('.middle-section').appendChild(div);
}

const projects = [

  {
    url1: 'assets/images/watermarker.png',
    url: 'assets/images/Blurwatermark.png',
    id: 'second-container',
    idBtn: 'notsee1',
    name: 'Profesional Art Printing Data More',
    name1: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",

    technologies: ['html', 'bootstrap', 'Ruby'],

  },
  {
    url1: 'assets/images/watermarker.png',
    url: 'assets/images/Blurwatermark.png',
    id: 'second-container',
    idBtn: 'notsee1',
    name: 'Profesional Art Printing Data More',
    name1: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",

    technologies: ['html', 'bootstrap', 'Ruby'],

  },
  {
    url1: 'assets/images/watermarker.png',
    url: 'assets/images/3watermark.png',
    id: 'third-container',
    idBtn: 'notsee2',
    name: 'Profesional Art Printing Data More',
    name1: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],

  },
  {
    url1: 'assets/images/watermarker.png',
    url: 'assets/images/watermarker.png',
    id: 'forth-container',
    idBtn: 'notsee3',
    name: 'Profesional Art Printing Data More',
    name1: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],

  },
  {
    url1: 'assets/images/watermarker.png',
    url: 'assets/images/Blurwatermark.png',
    id: 'fifth-container',
    idBtn: 'notsee4',
    name: 'Profesional Art Printing Data More',
    name1: 'Data Dashboard Healthcare',

    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],

  },
  {
    url1: 'assets/images/watermarker.png',
    url: 'assets/images/3watermark.png',
    id: 'sixth-container',
    idBtn: 'notsee5',
    name: 'Profesional Art Printing Data More',
    name1: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    name1: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['html', 'bootstrap', 'Ruby'],
  },

];

function renderCards(i) {
  const div = document.createElement('div');
  div.className = 'middle-1-container1';

  div.innerHTML = `<div id="${projects[i].id}" class="middle-1-container1">
        <h2 class="mobile">${projects[i].name}</h2>
      <h3 class="desktop">${projects[i].name1}</h3>
        
        
        <p>${projects[i].description}</p>
  
        <ul class="cardbtn">
              ${projects[i].technologies.map((tech) => `<li id="${projects[i].idSmallbtn}" >${tech}</li>`).join('')}
        </ul>
        <button type="button" id="${projects[i].idBtn}" onclick="openPopup(${i})" class="see-button-one1">See project</button>
      </div>`;
  const nameid = projects[i].id;

  div.querySelector(`#${nameid}`).style.backgroundImage = `url("${projects[i].url}")`;
  document.querySelector('.middle-section').appendChild(div);
}

function popcard(i) {
  const cont = document.querySelector('.popup2');
  cont.innerHTML = `<h1 id="mob-pop"  >${projects[i].name}</h1>
  <h2 id="desk-pop" >${projects[i].name1}</h2>
 <div class="close-button-container2">
   <button type="button"  class="close-button2" onclick="closePopup()"> &times;</button>
 </div>
 
 <ul class="cardbtn">
   <li><button type="button" class="middle-pop">html</button></li>
   <li> <button type="button" class="middle-pop">bootstrap</button></li>
   <li><button type="button" class="middle-pop">Ruby On Rails</button></li>
   
 </ul>
 <div class="images-paragraph">
  <img class="mobile-pop"  src="./assets/images/popup2.png" alt="">
  <img class="desktop-pop" src="./assets/images/bigpop.png" alt="">
 <div class="para-btn">
   <div id="para">
    <p >${projects[i].description}</p>
   </div>
  <div class="popup-btn-container">
      <button type="button" class="popup-btn1">See Live</button>
      <button type="button" id="popBtn" class="popup-btn2">See Source</button>
    </div>
 </div>
</div>`;
}

function openPopup(i) {
  popcard(i);
  const pop = document.querySelector('.popup2');
  pop.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  const blur = document.getElementById('middlesec');
  blur.classList.toggle('active');
}

function closePopup() {
  const pop = document.querySelector('.popup2');
  pop.style.display = 'none';
  document.body.style.overflow = 'visible';
}

renderFirstCard();

for (let i = 0; i < 6; i += 1) {
  renderCards(i);
}

if (1 === 10) {
  openPopup();
  closePopup();
}

const form = document.querySelector('#formcheck');
const message = document.querySelector('#error-disp');

// eslint-disable-next-line no-unused-vars
function submitform() {
  const email = document.getElementById('email-input').value;
  if (email !== email.toLowerCase()) {
    message.textContent = 'Email can\'t contain uppercase letters';
    return false;
  }
  form.setAttribute('action', 'https://formspree.io/f/mvolbbgw');
  form.submit();
  return true;
}

const email = document.getElementById('email-input');
const fullName = document.getElementById('user-name');
const comment = document.getElementById('user-message');
function storageSave() {
  const setData = {
    name: fullName.value,
    Email: email.value,
    Comment: comment.value,
  };
  localStorage.setItem('StorageData', JSON.stringify(setData));
}

function getSave() {
  const getData = JSON.parse(localStorage.getItem('StorageData'));
  email.value = getData.Email;
  fullName.value = getData.name;
  comment.value = getData.Comment;
}

if (!localStorage.getItem('SavedData')) {
  const SavedData = { name: '', Email: '', Comment: '' };
  localStorage.setItem('SavedData', JSON.stringify(SavedData));
} else {
  getSave();
}

form.addEventListener('change', storageSave);