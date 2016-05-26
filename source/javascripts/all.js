//= require jquery
//= require bootstrap-sprockets
//= require_tree .


function closeBoxes(){
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
};






$(document).ready(function(){
  closeBoxes();















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
    // This shuffles an array
    // Make two variables for the original and the shuffled word
    var myWord = null;
    var shuffledWord = null;

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

    function doShuffle(element){
     var word = $(element).text();
     var arrayWord = word.split("");
     arrayWord.push(" ");
     shuffle(arrayWord);

     $(element).text(shuffledWord);
   }

   var shuffleId1 = null;
   var shuffleId2 = null;

   $(".info-list").mouseover( function(){
    // myWord = $(this).text();
    var element = this;

    doShuffle(element);

    shuffleId1 = setTimeout(function(){
      doShuffle(element);
    }, 200);

    shuffleId2 = setTimeout(function(){
      doShuffle(element);
    }, 400);

    setTimeout(function(){
      var original = $(element).data('original');
      $(element).text(original);
    }, 650);
  })

   $(".box-info").mouseout( function(){
    //cancel all shuffle timeout
    clearTimeout(shuffleId1);
    clearTimeout(shuffleId2);
    var items = $(".info-list");
    $.each(items, function() {
      var original = $(this).data('original');
      $(this).text(original);
    });
  })


   // Projects: show info on hover

   $(".project-refugapp").on("mouseover", function(){
    $(this).css("border", "10px 10px 5px 0px rgba(125,0,125,0.75)");
    $(".footer-projects").text("Refugapp");
  })

   $(".project-refugapp").on("mouseout", function(){
    $(this).css("opacity", "1");
  })

   $(".project-sneakertours").on("mouseover", function(){
    $(".footer-projects").text("Sneakertours");
  })

   $(".project-plankgasten").on("mouseover", function(){
    $(".footer-projects").text("Plankgasten");
  })



 });



// $(".cross-box").click(function(){
//   console.log("klik");
//   // this.addClass("hidden");
// });
