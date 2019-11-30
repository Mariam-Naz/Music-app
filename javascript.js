window.addEventListener("load",()=>{
    const sounds = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const color = [
       "lightblue",
        "lightcoral",
        "lightgreen",
        "slateblue",
        "rgb(10, 216, 216)",
        "chocolate"
    ];
    console.log(pads)
    pads.forEach((pad,index) => {
        pad.addEventListener('click', function(){ // on click sound will play
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
            
        });
});


//for creating bubbles
const createBubbles=(index)=>{
    const bubbles = document.createElement("div");
    visual.appendChild(bubbles);
    bubbles.style.backgroundColor = color[index];
    bubbles.style.animation = "jump 1s ease";
}
});
