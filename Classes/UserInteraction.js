
class UserInteraction {
  //[0]left-37 [1]up-38 [2]right-39 [3]down-40 [4]space-32
  static events=[0,0,0,0,0];
  constructor() {

  }
  static handler(){
    return this.events;
  }

}

document.addEventListener('keydown', handlerForDown);//left-37 up-38 right-39 down-40
document.addEventListener('keyup', handlerForUp);//left-37 up-38 right-39 down-40

function handlerForDown(event){
    switch (event.keyCode) {
        case 32:
            UserInteraction.events[4] = 32;
        break;
        case 37:--
            UserInteraction.events[0] = 37;
        break;

        case 38:
            UserInteraction.events[1] = 38;
        break;

        case 39:
          UserInteraction.events[2] = 39;
        break;
        case 40:
          UserInteraction.events[3] = 40;
        break;
    }


}

function handlerForUp(event){
  switch (event.keyCode) {
      case 32:
        UserInteraction.events[4] = 0;
      break;
      case 37:
        UserInteraction.events[0] = 0;
      break;

      case 38:
        UserInteraction.events[1] = 0;
      break;

      case 39:
        UserInteraction.events[2] = 0;
      break;
      case 40:
        UserInteraction.events[3] = 0;
      break;
  }
}
