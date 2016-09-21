var controller = {

  init: function(){
    view.init();
    controller.displayPuppies();
    controller.displayBreeds();
  },

  displayPuppies: function(){
    puppyGenerator.getPuppies();
  },

  registerPuppy: function(name, breed){
    puppyGenerator.registerPuppy(name, breed);

  },

  displayBreeds: function(){
    puppyGenerator.getBreeds();
  }


}

$(document).ready(function(){
  controller.init();
})