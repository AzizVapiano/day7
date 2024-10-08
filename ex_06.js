const robot =document.getElementById("robot")
const speechBubble =document.getElementById("speech-bubble")
const screenText =document.getElementById("screen-text")
const input =document.getElementById("robot-input")



robot.addEventListener('click', function() {
    speechBubble.innerText = "Ooch,that hurts!"
    setTimeout(function() {
        speechBubble.style.display = 'none'; 
    }, 2000)

});


robot.addEventListener('mouseover', function(event) {
    const x= event.clientX;
    const y= event.clientY;
    screenText.textContent = `X: ${X}, Y: ${Y}`
});    

