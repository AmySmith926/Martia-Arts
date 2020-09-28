let buttons = JSON.parse(localStorage.getItem("savedElements")) || {};
$(".counter").each(function () {
  //go through each button
  if (!buttons[$(this).attr("id")]) {
    buttons[$(this).attr("id")] = {
        count: 0,
        element: null
    };
  }
  //set button values by default to 0
});
$(".counter").click(function () {
  let id = $(this).attr("id");
  let index = id.replace("button", "");
  let element = document.getElementById("element" + index);
  console.log(element);
  //once a button has been clicked, get ID..
  buttons[id].count++;
  buttons[id].element = element.innerHTML;
  //and then increment
  $(this).addClass("clicked");

  if (buttons[id].count >= $(this).attr("value")) {
    $(this).addClass("overLimit");
    $(this).html("TOO MUCH!");
    buttons[id].count = $(this).attr("value");
  }
  //check if the button has reached the maximum value set
  localStorage.setItem("savedElements", JSON.stringify(buttons));
  $("label[for=" + id + "]").html(
    alert("You have saved this item" + buttons[id].count)
  );
 
});
//reset buttons
$("#reset").click(function () {
  buttons["button1"] = 0;
  buttons["button2"] = 0;
  buttons["button3"] = 0;
  buttons["button4"] = 0;

  //once reset button is clicked, it sets buttons to default value

  $(".counter").each(function () {
    $(this).removeClass();
    $(this).addClass("counter");
    $(this).html("Save for later");
  });

  //and all the classes added for button states are removed

  $("label").each(function () {
    $(this).html("");
  });
});

$(document).ready(function () {
  //function for changing the style of a paragraph
    $("p").on({
        mouseenter: function () {
        $(this).css("background-color", "green");
        },
    });
    //functions to fade images in and out and to stop
    $("#btn4").click(function () {
        $("p").fadeOut(3000);
    });
    $("#btn3").click(function () {
        $("p").fadeIn(3000);
    });
    //function to slide all elements
    $("#p1").click(function () {
        $("*").css("background-color", "red").slideUp(5000).slideDown(500);
    });
});

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}