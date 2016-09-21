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
  },

  destroyPuppy: function(event){
    var $puppy = $($(event.target).parent());
    var puppy_id = $puppy.attr("data-id");
    puppyGenerator.removePuppy(puppy_id, $puppy);
  }


}

$(document).ready(function(){
  controller.init();
})