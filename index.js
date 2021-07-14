
for (var i = 0; i < 7; i++) {
    document.getElementsByTagName("button")[i].addEventListener("click", function () {

        
        var buttonhtml = this.innerHTML;
        
        switch (buttonhtml) {
            case 'w':
                var sound = new Audio("sounds/tom-1.mp3");
                sound.play();
                break;

            case 'a':
                var sound = new Audio("sounds/tom-2.mp3");
                sound.play();
                break;
            case 's':
                var sound = new Audio("sounds/tom-3.mp3");
                sound.play();
                break;

            case 'd':
                var sound = new Audio("sounds/tom-4.mp3");
                sound.play();
                break;

            case 'j':
                var sound = new Audio("sounds/snare.mp3");
                sound.play();
                break;

            case 'k':
                var sound = new Audio("sounds/crash.mp3");
                sound.play();
                break;

            case 'l':
                var sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;
        animate(this.innerHTML);





        }
    });
}

    document.addEventListener("keydown",function(event){
        
        
        switch(event.key){
            case 'w':
                var sound = new Audio("sounds/tom-1.mp3");
                sound.play();
                break;

            case 'a':
                var sound = new Audio("sounds/tom-2.mp3");
                sound.play();
                break;
            case 's':
                var sound = new Audio("sounds/tom-3.mp3");
                sound.play();
                break;

            case 'd':
                var sound = new Audio("sounds/tom-4.mp3");
                sound.play();
                break;

            case 'j':
                var sound = new Audio("sounds/snare.mp3");
                sound.play();
                break;

            case 'k':
                var sound = new Audio("sounds/crash.mp3");
                sound.play();
                break;

            case 'l':
                var sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;

            default:
                break;
        }

        animate(event.key);



        




    }
    );
    function animate(keypress){
    

            var activeButton = document.querySelector("." + keypress);
          
            activeButton.classList.add("pressed");
          
            setTimeout(function() {
              activeButton.classList.remove("pressed");
            }, 100);
          
          }





