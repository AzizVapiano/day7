document.addEventListener("DOMContentLoaded", function() {
    function reduceOpacity() {
    document.getElementById('square').style.opacity = 0.5; 
    }
    
    function resetOpacity() {
    document.getElementById("square").style.opacity = 1; 
    }

    let flou = document.getElementById('square'); 
    flou.addEventListener("mouseover", reduceOpacity); 
    flou.addEventListener("mouseout", resetOpacity); 
});