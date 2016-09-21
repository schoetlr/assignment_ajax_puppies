var view = {

  init: function(){
    $("#refresh").click(function(event){
      controller.displayPuppies();
    })

    $("#register-btn").click(function(event){
      event.preventDefault();
      var name = $("#name").val();
      var breed = $("#breeds").find(":selected").val();

      controller.registerPuppy(name, breed);
    })

    $("#form").submit(function(event){
      event.preventDefault();
    })


  },

  breedOptions: function(breeds){
    breeds.forEach(function(breed){
      var name = breed.name;
      var id = breed.id;

      $option = $("<option></option>");
      $option.text(name);
      $option.val(id);

      $("#breeds").append($option);
    })
  },

  addPuppy: function(puppy){
    var $puppy = $("<li>" + puppy.name + "</li>");
    $("#puppies").prepend($puppy);
  },


  displayPuppies: function(json){
    
    json.forEach(function(puppy){
      var $puppy = $("<li>" + puppy.name + "</li>");
      $("#puppies").append($puppy);
    })
  },

  displayBreeds: function(breeds){
    // append option to #breeds for each breed
  }

}