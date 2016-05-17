      var link = document.querySelector(".js-feedback");
      var popup = document.querySelector(".feedback-bg");
      var popup2 = document.querySelector(".feedback");  
      var close = popup.querySelector(".feedback-close");


    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("feedback-show");
        popup2.classList.add("feedback-animation");
        if (storage) {
          login.value = storage;
          email.focus();
        } else {
          login.focus();
        }
      });

    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("feedback-show");
      });
        
//    popup.addEventListener("click", function(event) {
//        event.preventDefault();
//        popup.classList.remove("feedback-show");
//      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
          }
        }
      });