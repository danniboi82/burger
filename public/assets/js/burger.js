// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEat = {
        eaten : newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEat
      }).then(
        function() {
          console.log("changed eat to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger_name").val().trim(),
        eaten: 0,
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new hamburger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  