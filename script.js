//your JS code here. If required.
const h1=document.querySelector("h1");
window.addEventListener('resize',()=>{
	h1.innerHTML =`width: ${window.innerWidth} and height: ${window.innerHeight}`
})
