const removeTransition = function(e){
    e.target.classList.remove('animate');
}

const hideAnimal = function(e){
    e.target.classList.remove('visited');
}

const play = function(e){
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.tree[data-key="${e.keyCode}"]`);
    const animal = document.querySelector(`.photos[data-key="${e.keyCode}"]`);
    if (!sound){
        return;
    }

    key.classList.add('animate');
    animal.classList.add('visited');
    sound.currentTime = 0;
    sound.play();

    //make the sound files play for a uniform amount of time
    sound.addEventListener('timeupdate', function(){
    const time = sound.currentTime;
    if (time > 4){
        sound.pause();
    }
   })
   
};

const tree = Array.from(document.querySelectorAll('.tree'));
const hiding = Array.from(document.querySelectorAll('.photos'));
tree.forEach (key => key.addEventListener('transitionend', removeTransition));
hiding.forEach(animal => animal.addEventListener('transitionend', hideAnimal));
window.addEventListener('keydown', play);

/*

    # resources
        # querySelector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
        # attribute Selector: https://www.w3schools.com/css/css_attribute_selectors.asp
        # currentTime method: https://www.w3schools.com/tags/av_prop_currenttime.asp
        # play() method: https://www.w3schools.com/tags/av_met_play.asp
        # classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
        # transition end events: https://developer.mozilla.org/en-US/docs/Web/API/Document/transitionend_event
        # forEach() method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        # arrow functions: https://javascript.info/arrow-functions-basics

*/