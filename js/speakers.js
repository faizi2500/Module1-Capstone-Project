  // const speakerImage = "assets/image"
import { data } from "./data.js";

const buildFeatureSection = feature => {
 const divSpeakerImage = document.createElement('div');
 const divSpeakerContent = document.createElement('div');
 const speakerImage = document.createElement('img');
 const speakerName = document.createElement('h2');
 const speakerDesignation = document.createElement('p');
 const speakerHistory = document.createElement('p');
//  const speakerSection = document.createElement('section');

//  const sectionFeature = document.getElementById('speaker-section');
 

 document.body.append(divSpeakerImage);
 document.body.append(divSpeakerContent);
 divSpeakerImage.appendChild(speakerImage)
 divSpeakerContent.appendChild(speakerName)
 divSpeakerContent.appendChild(speakerDesignation)
 divSpeakerContent.appendChild(speakerHistory)

 speakerImage.setAttribute("src", feature.pic);
 speakerName.innerHTML = feature.nameOfSpeaker;
 speakerDesignation.innerHTML = feature.designation;
 speakerHistory.innerHTML = feature.history;
}

data.forEach(feature => buildFeatureSection(feature));
