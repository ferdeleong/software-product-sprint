async function getHello() {
    const response = await fetch("/hello");
    const data = await response.text(); 
    const randomFact = document.getElementById("random-fact");
    randomFact.innerHTML = data;
} 