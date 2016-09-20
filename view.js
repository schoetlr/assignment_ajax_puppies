var view = {

  init: function(){
    $("#refresh").click(function(event){
      controller.displayPuppies();
    })

    $("#register-btn").click(function(event){
      event.preventDefault();
      var name = $("#name").val();
      var breed = $("#breed").val();
      controller.registerPuppy(name, breed);
    })

    $("#form").submit(function(event){
      event.preventDefault;
    })
  },


  displayPuppies: function(json){
    
    json.forEach(function(puppy){
      var $puppy = $("<li>" + puppy.name + "</li>");
      $("#puppies").append($puppy);
    })
  }

}