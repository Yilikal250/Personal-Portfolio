/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
function togglePopup() {
  // eslint-disable-next-line indent
  document.getElementById('popup-1').classList.toggle('active');
}

// eslint-disable-next-line no-undef

function renderFirstCard() {
  const div = document.createElement('div');
  div.className = 'middle-image1-container';
  div.innerHTML = `<img class="middle-image1" src="assets/images/bigimageplaceholder.png" alt="Image place holders">
    <div class="middle-1-container">
      <h2>Multi-Post Stories</h2>
      
      <p>
        A daily selection of privately personalized reads; no accounts or
        sign-ups required. has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a standard dummy text.
      </p>


      <button type="button">css</button>
      <button type="button"> html</button>
      <button type="button">bootstrap</button>
      <button type="button">Ruby</button>
      <button type="button" onclick="openPopup()" id="see-button-one">See project</button>
    </div>
  </div>`;
  document.querySelector('.middle-section').appendChild(div);
}

const projects = [
  {
    url1: 'assets/images/watermarker.png',
    url: 'assets/images/Whitewatermark.png',
    idSmallbtn: 'notseebtn',
    id: 'first-container',
    idBtn: 'notsee0',
    name: 'Profesional Art Printing Data More',
    name1: '',
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

];

function renderCards(i) {
  const div = document.createElement('div');
  div.className = 'middle-1-container1';

  div.innerHTML = `<div id="${projects[i].id}" class="middle-1-container1">
        <h2 class="mobile">${projects[i].name}</h2>
      <h3 class="desktop">${projects[i].name1}</h3>
        
        
        <p>${projects[i].description}</p>
  
        <ul class="cardbtn">
              ${projects[i].technologies.map((tech) => `<li><button type="button" id="${projects[i].idSmallbtn}" class="middle-1-container1-btn">${tech}</button></li>`).join('')}
        </ul>
        <button type="button" id="${projects[i].idBtn}" onclick="openPopup()" class="see-button-one1">See project</button>
      </div>`;
  // eslint-disable-next-line prefer-const
  let nameid = projects[i].id;

  // eslint-disable-next-line prefer-template
  div.querySelector('#' + nameid).style.backgroundImage = `url("${projects[i].url}")`;
  document.querySelector('.middle-section').appendChild(div);
}

// eslint-disable-next-line no-unused-vars
function openPopup() {
  const pop = document.querySelector('.popup2');
  // eslint-disable-next-line quotes
  pop.style.display = "flex";
  // eslint-disable-next-line no-var
  const blur = document.getElementById('middlesec');
  blur.classList.toggle('active');
}

// eslint-disable-next-line no-unused-vars
function closePopup() {
  const pop = document.querySelector('.popup2');
  pop.style.display = 'none';
}

renderFirstCard();
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 6; i++) {
  renderCards(i);
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
