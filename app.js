/* mobile menu */
const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.desk-logo');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.desk-nav');

const navLink = document.querySelectorAll('.desk-nav a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  logo.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('active');
  navLink.forEach((link) => link.classList.toggle('active'));
});

navLink.forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  logo.classList.remove('active');
  navMenu.classList.remove('active');
  navBar.classList.remove('active');
  navLink.forEach((link) => link.classList.remove('active'));
}));

/* mobile popup window */
/* Generate card element */

const projectInfo1 = [
  { 
    featureImage: './mob-img/SnapshootPortfolio1.png',
    classMobileImg: 'work-img1',
    classDeskImg: 'desktop-work1',
    featureImageDesk: './desktop-img/SnapshootPortfolio.png',
    projectName: 'Tonic',
    caption: 'Tonic',
    feature: {
      title: 'CANOPY',
      domain: 'backEndDev',
      year: 2015,
    },
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript', 'gitHub', 'Ruby', 'Bootstrap'],
  },

  {

    featureImage: './mob-img/SnapshootPortfolio3.png',
    classMobileImg: 'work-img3',
    classDeskImg: 'desktop-work3',
    featureImageDesk: './desktop-img/SnapshootPortfolio3.png',
    projectName: 'Facebook 360',
    caption: 'Tonic',
    feature: {
      title: 'CANOPY',
      domain: 'backEndDev',
      year: 2015,
    },
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript', 'gitHub', 'Ruby', 'Bootstrap'], 
  }, 
];

const projectInfo2 = [
  {
    featureImage: './mob-img/SnapshootPortfolio2.png',
    classMobileImg: 'work-img2',
    classDeskImg: 'desktop-work2',
    featureImageDesk: './desktop-img/SnapshootPortfolio2.png',
    projectName: 'Multi-Post Stories',
    caption: 'Multi-Post Stories',
    feature: {
      title: 'CANOPY',
      domain: 'backEndDev',
      year: 2015,
    },
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript', 'gitHub', 'Ruby', 'Bootstrap'],
  },

  {
    featureImage: './mob-img/SnapshootPortfolio4.png',
    classMobileImg: 'work-img4',
    classDeskImg: 'desktop-work4',
    featureImageDesk: './desktop-img/SnapshootPortfolio4.png',
    projectName: 'Uber Navigation',
    caption: 'Multi-Post Stories',
    feature: {
      title: 'CANOPY',
      domain: 'backEndDev',
      year: 2015,
    },
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javaScript', 'gitHub', 'Ruby', 'Bootstrap'],
  },
];
  
/* pop up window */

const popUpData = [
  {
    projectDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modidicta suscipit iusto, iste earum quod ad optio aliquid, voluptatum
    aspernatur repellendus! Non quidem, id adipisci aut temporibus fuga dolor hic delectus numquam. Quo eligendi nesciunt reprehenderit voluptatem iure impedit tenetur nisi, officia,
    numquam minima voluptatibus? Obcaecati maxime laudantium nihil beatae?`,
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://christianbiring1.github.io/My_Portfolio/',
    sourceCode: 'https://github.com/christianbiring1/My_Portfolio',
  },
];

/* Grab the container i.e work-section-container */

const workSectionContainer = document.querySelector('.work-section');

/*  Generate the work-section content of card 1 & 3  */

const cardWork1 = projectInfo1.forEach((work) => {
  const layout = document.createElement('article');
  const layoutClass = ['card-work', 'card-work1'];
  layout.classList.add(layoutClass[0]);
  layout.classList.add(layoutClass[1]);
  layout.innerHTML = `<figure><img scr= "${work.featureImage}" class="${work.classMobileImg}">
    <img src= "${work.featureImageDesk}" class="${work.classDeskImg}">
    <figcaption><h2>${work.caption}</h2></figcaption></figure>
    <div class="aside">
      <div class="type">
       <h2>${work.projectName}</h2>
       <ul>
          <li class="title">${work.feature.title}</li>
          <li class="domain">${work.feature.domain}</li>
          <li class="year">${work.feature.year}</li>
       </ul>
      </div>
      <p class="description">${work.projectDescription}</p>
      <div class="languages languages-desk">
        <ul>
          <li><span class="html">${work.technologies[0]}</span></li>
            <li><span class="css">${work.technologies[1]}</span></li>
            <li><span class="js">${work.technologies[2]}</span></li>
          </ul>
      </div>
      <button>See project</button>
    </div>`;
  workSectionContainer.appendChild(layout);
  /* Generate popUp window */

  const popUpWindow = document.createElement('div');
  const classPopUp = 'popup-window';
  popUpWindow.classList.add(classPopUp);  
  popUpWindow.innerHTML = `<h2>${work.projectName}</h2>
    <div class="header">
      <ul class="feature">
        <li class="title">${work.feature.title}</li>
        <li class="domain">${work.feature.domain}</li>
        <li class="year">${work.feature.year}</li>
      </ul>
      <button class="close">&times;</button>
    </div>
    <img src="${work.featureImageDesk}" class="card-work" alt="" />
    <div class="popup-body">
      <p class="description">${popUpData[0].projectDescription}</p>
      <div class="left">
        <div class="popup-languages">
          <ul>
            <li>${work.technologies[0]}</li>
            <li>${work.technologies[1]}</li>
            <li>${work.technologies[2]}</li>
          </ul>
          <ul class="supplement-desk">
            <li>${work.technologies[3]}</li>
            <li>${work.technologies[4]}</li>
            <li>${work.technologies[5]}</li>  
          <ul/>
        </div>
        <div class="popup-btn">
          <button class="live">See live <img src="./desktop-img/liveicon.png" alt="" />
          </button>
          <button class="source">See Source <img src="./desktop-img/sourcevector.png" alt="" />
          </button>
        </div>
      </div>
    </div>`;
})

/* Generate the work-section content of card 2 & 4  */

const cardWork2 = projectInfo2.forEach((work) => {
  const secondLayout = document.createElement('article');
  const layoutClass = ['card-work', 'card-work2'];
  secondLayout.classList.add(layoutClass[0]);
  secondLayout.classList.add(layoutClass[1]);
  secondLayout.innerHTML = `<figure><img scr= "${work.featureImage}" class="${work.classMobileImg}">
    <img src= "${work.featureImageDesk}" class="${work.classDeskImg}">
    <figcaption><h2>${work.caption}</h2></figcaption></figure>
    <div class="aside ordering">
      <div class="type">
       <h2>${work.projectName}</h2>
       <ul>
          <li class="title">${work.feature.title}</li>
          <li class="domain">${work.feature.domain}</li>
          <li class="year">${work.feature.year}</li>
       </ul>
      </div>
      <p class="description">${work.projectDescription}</p>
      <div class="languages languages-desk">
        <ul>
          <li><span class="html">${work.technologies[0]}</span></li>
            <li><span class="css">${work.technologies[1]}</span></li>
            <li><span class="js">${work.technologies[2]}</span></li>
          </ul>
      </div>
      <button>See project</button>
    </div>`;
  workSectionContainer.appendChild(secondLayout);
});

