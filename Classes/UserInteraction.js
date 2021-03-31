class UserInteraction {
  constructor() {

  }
  handler(){
  document.addEventListener('keydown', handlerForDown);//left-37 up-38 right-39 down-40
  let keyCode = 0;
  function handlerForDown(event){

      if (event.keyCode == 37) {
        keyCode = 37;
        console.log(keyCode);
      }
      else if (event.keyCode == 38) {
          keyCode = 38;
          console.log(keyCode);
      }
      else if (event.keyCode == 39) {
          keyCode = 39;
          console.log(keyCode);
      }
      else if (event.keyCode == 40) {
          keyCode = 40;
          console.log(keyCode);
      }
  }
  return keyCode;
  }

}
