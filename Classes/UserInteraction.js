
class UserInteraction {
  static events;
  constructor() {

  }
  static handler(){
    let eventsForSend = this.events;
    this.events=[];
    return eventsForSend;
  }

}

document.addEventListener('keydown', handlerForDown);//left-37 up-38 right-39 down-40
function handlerForDown(event){
    UserInteraction.events.push(event.keyCode);
}
