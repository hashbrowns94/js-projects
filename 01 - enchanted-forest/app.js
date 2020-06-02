/*
    # write a function that associates a sound with the key down event
        # function name(e)
            # to find the keycode of the keyboard event: console.log(e.keyCode);
            # create a variable to manipulate the audio
            # create a variable to hold the key down animation
                # element = document.querySelector(selectors[`attribute selectors="${value}"`])
                    # questions to ask:
                        # what is the logical CSS selector if i want to manipulate audio?
                        # what attribute links the <div> tags and the <audio> tags that we might want to select here?
                        # using ES6, how can we set one value to change based on the key code? 
            # write a conditional that will stop the audio from running if we did not assign a key any audio
            # allow a sound to restart if hit in quick succession by using the .currentTime method
            # trigger the sound to start by using a method assoc with the variable you created to manipulate sound
            # link the sound with the animation by creating a class for the animation associated with the css you wrote for it
                # questions to ask:
                    # how do you append a class to an element using the DOM?
    # make a function that removes the transition after a key is pressed
        # function name(e)
            # write a conditional that will skip any event that does not have the 'transform' CSS property
            # use console.log(e) to determine the transition events possible
        #use the 'this' keyword to remove the class you assigned the animation
    # create a variable that listens to all keys that make transitions so that we can end the transition
        # element = document.querySelectorAll('selector');
            # choosing the selector:
                # what CSS selector includes the transition event?
    # add an event listener by using the forEach() method with the variable you made to listen for transition ends
        # what to pass into the () of the forEach:
            # select the variable you made to hold the key down animation
            # add an event listener, using an arrow function to add the method for adding event listeners
            # what to pass into the () of the addEventListener:
                # two arguments
                    # 'transitionend' - read up on why
                    # the function you wrote for removing the transition
    # add an event listener by using window.addEventListener
        # two arguments
            # 'keydown' - read up on why
            # the function you wrote that triggers the sound to play

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