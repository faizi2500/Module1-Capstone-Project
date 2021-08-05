const data = [
  {
    id: 1,
    pic: './assets/image-1.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Chamath',
    designation: 'Canadian venture capitalist',
    history: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital. Palihapitiya was an early senior executive at Facebook, working at the company from 2007 to 2011.',
  },
  {
    id: 2,
    pic: './assets/image-2.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Travis',
    designation: 'Uber Founder',
    history: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital. Palihapitiya was an early senior executive at Facebook, working at the company from 2007 to 2011.',
  },
  {
    id: 3,
    pic: './assets/image-3.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Peter Thiel',
    designation: 'Former founder of PayPal',
    history: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital. Palihapitiya was an early senior executive at Facebook, working at the company from 2007 to 2011.',
  },
  {
    id: 4,
    pic: './assets/image-4.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Chamath',
    designation: 'Canadian venture capitalist',
    history: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital. Palihapitiya was an early senior executive at Facebook, working at the company from 2007 to 2011.',
  },
  {
    id: 5,
    pic: './assets/image-5.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'David Sacks',
    designation: 'Canadian venture capitalist',
    history: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital. Palihapitiya was an early senior executive at Facebook, working at the company from 2007 to 2011.',
  },
  {
    id: 6,
    pic: './assets/image-6.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Toni',
    designation: 'Shopify Founder',
    history: 'He is a venture capitalist, engineer, SPAC sponsor and the founder and CEO of Social Capital. Palihapitiya was an early senior executive at Facebook, working at the company from 2007 to 2011.',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');

data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);