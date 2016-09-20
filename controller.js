var controller = {

  init: function(){
    view.init();
    controller.displayPuppies();
  },

  displayPuppies: function(){
    puppyGenerator.getPuppies();
  },

  registerPuppy: function(name, breed){
    puppyGenerator.registerPuppy(name, breed);

  }


}

$(document).ready(function(){
  controller.init();
})