try {
  function randomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
} catch (error) {}

try {
  const letters= document.querySelectorAll('.letter');
  setInterval(function(){
    for(let letter of letters) {
      const color = randomRGBColor();
      letter.style.color = color;
    }
  },500)
  
} catch (error) {
  
}