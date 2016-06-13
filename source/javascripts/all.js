//= require jquery
//= require bootstrap-sprockets
//= require_tree .


// 1. Functions to show, close and drag boxes /////////
// 2. Projects info /////////////
// 3. Shuffle functions ////////////////

////////////  1. Functions to show, close and drag boxes /////////////////

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

function infoBox(){
  // Show box on click in list
  $(".info-list").on("click", function(){
    var target =  $(this).data("target");
    $(target).removeClass("hidden");
    $(".box").removeClass("active");
    $(target).addClass("active");
  });
};

function activeBox(){
  // Make active if clicked on box
  $(".box").on("click", function(){
    $(".box").removeClass("active");
    $(this).addClass("active");
  })
}

function boxDraggable(){
  // Make boxes draggable
  var $dragging = null;
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
  });
  $(document.body).on("mouseup", function (e) {
    $dragging = null;
  });
}

/////////////////// 2. Projects info /////////////////////////////////

function projectsInfo(){
  // Projects: show info on hover and make other projects opaque
   $(".project-refugapp").on("mouseover", function(){
    $(".project-img").css("opacity", "0.6");
    $(this).css("opacity", "1");
    $(".footer-projects").text("Refugapp is a project we are working on right now. We are creating a platform to bring locals and refugees together by exchanging skills.");
  })

   $(".project-sneakertours").on("mouseover", function(){
    $(".project-img").css("opacity", "0.6");
    $(this).css("opacity", "1");
    $(".footer-projects").text("Sneakertours is a website I created with a friend to share the best places and events in Amsterdam.");
  })

   $(".project-plankgasten").on("mouseover", function(){
    $(".project-img").css("opacity", "0.6");
    $(this).css("opacity", "1");
    $(".footer-projects").text("Plankgasten is a monthly open mic in CREA that I initiated and organised. After a short course I created this website.");
  })
}

//////////////////// 3. Shuffle functions ////////////////////////////
// shuffle the letters in the infobox

function shuffleWords(){
  shuffleAnimate();
  function shuffle(arrayWord) {
// Shuffle an array with the letters of the word
// and make it a string again
  var j, x, i;
  for (i = arrayWord.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = arrayWord[i - 1];
    arrayWord[i - 1] = arrayWord[j];
    arrayWord[j] = x;
  }
  shuffledWord = arrayWord.join("");
}

// Get the word out of the element, make an array of it and add spaces
// Shuffle this array with the shufflefunction and set this as text
function doShuffle(element){
 var word = $(element).text();
 var arrayWord = word.split("");
 arrayWord.push(" ");
 shuffle(arrayWord);

 $(element).text(shuffledWord);
}

function shuffleAnimate(){
  var shuffleId1 = null;
  var shuffleId2 = null;

  $(".info-list").mouseover( function(){
    // myWord = $(this).text();
    // On hover set this as an element
    var element = this;
    // Do the Shufflefunction 3 times with a small delay
    doShuffle(element);
    shuffleId1 = setTimeout(function(){
      doShuffle(element);
    }, 200);
    shuffleId2 = setTimeout(function(){
      doShuffle(element);
    }, 400);
    // Set it back to the original text
    setTimeout(function(){
      var original = $(element).data('original');
      $(element).text(original);
    }, 650);
  })

  $(".box-info").mouseout( function(){
    //cancel all shuffle timeout and set back the original text
    clearTimeout(shuffleId1);
    clearTimeout(shuffleId2);
    var items = $(".info-list");
    $.each(items, function() {
      var original = $(this).data('original');
      $(this).text(original);
    });
  })
}
}

// Let's enable all the functions when the doc is ready
$(document).ready(function(){

 var myWord = null;
 var shuffledWord = null;

 closeBoxes();
 infoBox();
 activeBox();
 boxDraggable();
 projectsInfo();
 shuffleWords();

 });


 //////// function to write:
 // When closing a box make the next one active
 // Way to do it: remove closed box from array and
 // push every newly open box to the array
 // unless it is already in (in case of 2 clicks)
 //////// Other stuff to improve
 // Make nicer crosses
 // Closer look at skills
 // Set this unicorn as a favicon: https://thenounproject.com/term/unicorn/9584/

