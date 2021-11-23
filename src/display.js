export const display = document.createElement('div');
display.className = 'display';
display.id = 'display';
display.style.backgroundColor = 'rgba(0,177,255,' + (Math.random() * 0.5 + 0.25) + ')';
display.textContent = "Valve model no.7";
display.style.height = "390px";
display.style.width = "400px";
display.style.fontSize = "30px";
display.style.textAlign = "center";
display.style.lineHeight = "1.8";

const offButton = document.createElement('div')
offButton.className = 'offButton'
offButton.textContent= '[close details]'

display.appendChild(offButton);

offButton.addEventListener("click", function() {
   
    const dispalyDetails = document.getElementsByClassName('display')[0];
    dispalyDetails.style.visibility='hidden'

})