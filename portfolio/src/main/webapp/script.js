// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const content = {
    about: {
      quote: `
        You can’t keep growing and working on yourself without accepting where you are right now.
        Acceptance is your key to freedom.
      `,
      paragraph: [
        `
          I believe that my education in BS Architecture and developed creativeness 
          combined with Computer Science give me an especially great advantage when 
          approaching problems or challenges that require creative solutions or to 
          think out of the box, so I can bring new and fresh ideas to the table
        `,
        `
          What I love about CS is that it gives you the tools to explore and 
          materialize the vast universe of ideas and thoughts that humans create.
          I build for those who can’t and need us. I build to promote autonomous 
          human development, social cohesion and citizen integration through retribution.
        `,
        `
          Im looking forward to create an app to facilitate communication between 
          foreigners and foreign students to find roommates based on hobbies,
          life style, habits, etc, and create meaningful connections
        `
      ]
    },
    projects: [
      {
        name: "Hackathon",
        description: `
          Developed a decentralized voting system over the Ethereum blockchain 
          using smart contracts in Solidity. Microservices architecture built with 
          Node.js, Docker, and IBM Cloud.
        `,
      },
      {
        name: "Chrome extension",
        description: `
          Created a Chrome extension for speed reading  using facial recognition 
          to control speed, and play/stop the session. The extension was built with React and Javascript. 
          The ML models use ML5 library to have them web based to ensure fast feedback.
        `
      }
    ],
    gallery: {
      description: `
        I enjoy photographing architecture because it's the combination between math and art. 
        It’s amazing how it reflects the lifestyle and ideologies of the society at the time 
        of construction, so everytime you see a building you are looking directly at 
        a time capsule.
      `,
      images: ["image1.jpeg"]
    },
    me: {
      hometown: "Monterrey, México",
      education: {
        school: "Tec de Monterrey",
        degrees: [
          `BS Architecture (08.2018 - 01.2021)
          `,
          `BS Computer Science and Technology (01.2021- 12.2024)
          `,
          `English (CEF B2 certification), Spanish (Native)
          `
        ]
      },
      skills: {
        languages: ["C++", "Javascript", "Python", "Solidity"],
        knowledge: ["fullstack web development", "databases", "blockchain"],
      },
    },
};
  
/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function loadContent () {
    //About section
    const quote = document.getElementById("quote");
    quote.innerText = content.about.quote;

    const aboutParagraph = document.getElementById("aboutParagraph");
    aboutParagraph.innerText = content.about.paragraph;
    
    //Projects section
    const project1 = document.getElementById("project");
    project1.innerText = content.projects;

    //Gallery section
    const galleryDescription = document.getElementById("galleryDescription");
    galleryDescription.innerText = content.gallery.description;
    
    //Me section
    const hometown = document.getElementById("hometown");
    hometown.innerText = content.me.hometown;

    //Education sub-section
    const school = document.getElementById("school");
    school.innerText = content.me.education.school;

    //Skills sub-section
    const degrees = document.getElementById("degrees");
    degrees.innerText = content.me.education.degrees;

}