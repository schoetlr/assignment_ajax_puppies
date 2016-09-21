var puppyGenerator = {

  getPuppies: function(){
    $.ajax( {

      url: "https://ajax-puppies.herokuapp.com/puppies.json",

      type: "GET",

      // the type of data we expect back
      dataType : "json",

      // Success callback to run if the request succeeds.
      // The response is passed to the function
      // as a variable, usually called `data` or `json`
      success: function( json ) {

          view.displayPuppies(json);
      },

      // Error callback to run if the request fails
      // (e.g. server returns an error code like 301)
      // The raw request and any status codes are 
      // passed to the callback
      error: function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
      },

      // Complete callback to run regardless of the outcome
      complete: function( xhr, status ) {
          console.log( "The request is complete!" );
      }
    });
  },//end getPuppies

  getBreeds: function(){
    $.ajax( {

      url: "https://ajax-puppies.herokuapp.com/breeds.json",

      type: "GET",

      // the type of data we expect back
      dataType : "json",

      // Success callback to run if the request succeeds.
      // The response is passed to the function
      // as a variable, usually called `data` or `json`
      success: function( json ) {

          view.breedOptions(json);
      },

      // Error callback to run if the request fails
      // (e.g. server returns an error code like 301)
      // The raw request and any status codes are 
      // passed to the callback
      error: function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
      },

      // Complete callback to run regardless of the outcome
      complete: function( xhr, status ) {
          console.log( "The request is complete!" );
      }
    });
  },

  registerPuppy: function(name, breed){
    $.ajax("https://ajax-puppies.herokuapp.com/puppies.json", {


      // the data to send (will be converted to a query string)
      // note that this is an object

      //when converting to jSON string with JSON.stringify it is 
      //"unprocessable"?
      data: JSON.stringify({name: name, breed_id: breed}),


      // HTTP verb (aka "Type" of request)
      type: "POST",
      async: true,

      // the type of data we expect back
      dataType: "json",

      contentType: "application/json",

      // Success callback to run if the request succeeds.
      // The response is passed to the function
      // as a variable, usually called `data` or `json`
      success: function( json ) {

          // for example, build a post object onto the body
          view.addPuppy(json);
      },

      // Error callback to run if the request fails
      // (e.g. server returns an error code like 301)
      // The raw request and any status codes are 
      // passed to the callback
      error: function( xhr, status, errorThrown ) {
          alert( "Sorry, there was a problem!" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
      },

      // Complete callback to run regardless of the outcome
      complete: function( xhr, status ) {
          alert( "The request is complete!" );
      }
    });
  }


}