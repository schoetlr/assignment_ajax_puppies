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

    $("#puppies").click(".adopt-link", function(event){
      event.preventDefault();
      controller.destroyPuppy(event);
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
    $puppy.attr("data-id", puppy.id);
    $("#puppies").prepend($puppy);
  },


  displayPuppies: function(json){
    
    json.forEach(function(puppy){
      var $puppy = $("<li>" + puppy.name + "</li>");
      $puppy.attr("data-id", puppy.id);
      $puppy.append("<a href='#' class='adopt'>Adopt</a>")
      $("#puppies").append($puppy);
    })
  },

  removePuppy: function(puppy){
    console.log("REMOVING");
  }

}