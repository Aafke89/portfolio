//= require jquery
//= require bootstrap-sprockets
//= require_tree .
$(document).ready(function(){
  // Hide boxes
  $(".cross-box").on("click", function(){
    $(this).parent().addClass("hidden");
  });
  // Visualize cross when hovering
  $(".cross-box").mouseover(function(){
    $(this).attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Red_Cross.svg/120px-Red_Cross.svg.png")
  });
  $(".cross-box").mouseout(function(){
    $(this).attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Runic_letter_gebo.svg/60px-Runic_letter_gebo.svg.png")
  });
  // Make active if clicked on box
  $(".box").on("click", function(){
    $(".box").removeClass("active");
    $(this).addClass("active");
  })
  // Show box on click in list
  $(".info-list").on("click", function(){
    var target =  $(this).data("target");
    $(target).removeClass("hidden");
    $(".box").removeClass("active");
    $(target).addClass("active");
  })

  // Make boxes draggable\
  var $dragging = null;
  // var $position = null;
  $(document.body).on("mousemove", function(e) {
    if ($dragging) {
      $dragging.offset({
        top: e.pageY - 60,
        left: e.pageX - 100
      });
    }
  });
  $(".box").on("mousedown", function (e) {
    $dragging = $(this);
        // $position = $($dragging).position();

        // if ($position["top"] < 1 || $position["left"] < 1)  {
        //   $($dragging).position["top"] = 10;
        //   $dragging = null;
        // };
        // console.log($position);
      });

  $(document.body).on("mouseup", function (e) {
    $dragging = null;
  });

    // Shuffle function
    function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
      }
      shuffledWord = a.join("");
    }

    var myWord = null;
    var shuffledWord = null;

    $(".info-list").mouseover( function(){
     myWord = $(this).text();
     var arrayWord = myWord.split("");
     shuffle(arrayWord);
     $(this).text(shuffledWord);
     console.log(shuffledWord);
   })

    $(".info-list").mouseout( function(){
     $(this).text(myWord);
   })



  });



// $(".cross-box").click(function(){
//   console.log("klik");
//   // this.addClass("hidden");
// });
