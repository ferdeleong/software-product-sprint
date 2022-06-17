async function getHello() {
    const response = await fetch("/hello");
    const data = await response.json();
    // ["I love ice skating", "I enjoy watching The Office", "I love pasta"]
    const randomFact = document.getElementById("random-fact");
    randomFact.innerHTML = data[Math.floor(Math.random() * data.length)];
    
} 
  