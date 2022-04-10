const halfCircles = document.querySelectorAll('.half-circle');
const halfCircleTop = document.querySelector('.half-circle-top');
const progressBarCircle = document.querySelector('.progressbar-circle');

document.addEventListener('scroll', ()=>{
	const pageViewPortH = window.innerHeight;
	const pageHeight = document.documentElement.scrollHeight;
	const scrolledPosition = window.pageYOffset;

	const scrolledPortionDegree = (scrolledPosition/(pageHeight - pageViewPortH))*360;
	
	const scrolledPortionPercent = Math.floor(scrolledPortionDegree / 360 * 100);
	
	if ( !(scrolledPortionDegree<0) && !(scrolledPortionDegree>360)) {

		progressBarCircle.textContent = `${scrolledPortionPercent}%`
	
		halfCircles.forEach(el => {
			el.style.transform = `rotate(${scrolledPortionDegree}deg)`;
	
			if(scrolledPortionDegree>= 180){
				halfCircles[0].style.transform = `rotate(180deg)`;
				halfCircleTop.style.opacity = '0';
			} else {
				halfCircleTop.style.opacity = '1';
			}
		})
	}
})