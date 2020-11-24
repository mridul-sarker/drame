const body = document.querySelector("body");
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 
   if(!audio) return;// stop the function
   audio.currentTime= 0;// reuined tho the start 
   audio.play();
   key.classList.add('playing');
}
function removeTransion(e){
if(e.propertyName !== 'transform') return; //skip if its not a transform 
this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(function(key){
    key.addEventListener("transitionend", removeTransion)
});
body.addEventListener("keydown",playSound);