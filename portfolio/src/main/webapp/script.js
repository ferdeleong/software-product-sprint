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

const aboutDescrition = `
“You can’t keep growing and working on yourself without accepting where 
you are right now. Acceptance is your key to freedom.”

I believe that my education in BS Architecture and developed creativeness 
combined with Computer Science  give me an especially great advantage when 
approaching problems or challenges that require creative solutions or to 
think out of the box, so I can bring new and fresh ideas to the table
 
What I love about CS is that it gives you the tools to explore and 
materialize the vast universe of ideas and thoughts that humans create. 
I build for those who can’t and need us. I build to promote autonomous 
human development, social cohesion and citizen integration through retribution.
 
Im looking forward to create an app to facilitate communication between 
foreigners and foreign students to find roommates based on hobbies,
life style, habits, etc, and create meaningful connections
`;

const projectsDescrition = `
* Developed a decentralized voting system over the Ethereum blockchain 
using smart contracts in Solidity. Microservices architecture built with 
Node.js, Docker, and IBM Cloud.
* Created a Chrome extension for speed reading  using facial recognition 
to control speed, and play/stop the session. The extension was built with 
React and Javascript. 
The ML models use ML5 library to have them web based to ensure fast feedback.
`;

const galleryDescrition = `
I enjoy photographing architecture because it's the combination between math and art. 
It’s amazing how it reflects the lifestyle and ideologies of the society at the time 
of construction, so everytime you see a building you are looking directly at 
a time capsule.
`;

const meDescrition = `
School: Tec de Monterrey
Hometown: Monterrey, México 

BS Architecture (08.2018 - 01.2021)
BS Computer Science and Technology (01.2021- 12.2024)
English (CEF B2 certification), Spanish (Native)
`;