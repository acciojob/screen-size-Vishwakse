//your JS code here. If required.
    function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeDisplay = document.querySelector('#sizeInfo h1');  
    sizeDisplay.textContent = `Width: ${width} and Height: ${height}`;
}
window.addEventListener('resize', updateWindowSize);

updateWindowSize();