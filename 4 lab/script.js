//2
$(document).ready(function() {
    $("#popup-error-name").hide();
    $("#popup-error-lastName").hide();
    $("#popup-error-number").hide();
    $("#submit").hide();
})
//1
function validateForm() {
    if (checkIsEmptyName()) {
        document.getElementById("popup-error-name").setAttribute("style", "display: visible !important; color: red;");
    }
    else  $("#popup-error-name").hide();
    if (checkIsEmptyLastName()) {
        document.getElementById("popup-error-lastName").setAttribute("style", "display: visible !important; color: red;");
    }
    else  $("#popup-error-lastName").hide();
    if (checkIsNumber()) {
        document.getElementById("popup-error-number").setAttribute("style", "display: visible !important; color: red;");
    }
    else $("#popup-error-number").hide();
}

function checkIsEmptyName() {
    return document.getElementById("name").value.length == 0;
}

function checkIsEmptyLastName() {
    return document.getElementById("lastName").value.length == 0;
}

function checkIsNumber() {
    return document.getElementById("gimMetai").value.length == 0 || isNaN(document.getElementById("gimMetai").value);
}
//2
$(document).ready(function(){
    $("#check").click(function(){
        $("#submit").toggle();
    });
});
//3.1
$(document).ready(function() {
    $("#changeText").click(function() {
        $(".textForChange").text(generateRandomText());
    });
});
// 3.2.
$(document).ready(function() {
    $("#changeColor").click(function() {
        $(".textForChange").css({"color": getRandomColor()});
    });
});
// 3.3.
$(document).ready(function() {
    $("#deleteParagraph").click(function() {
        var elemToRemove = $("#para").val();
        $("." + elemToRemove).remove();
    });
});
// 3.4.
$(document).ready(function() {
    $("#appendParagraph").click(function() {
        $("div.paragraphs").append(
            '<p>' + $("#paraTxt").val() + '</p>'
        )
    });
});
//3.1
function generateRandomText() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    let randomText = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    } 
    return randomText;
  }

//3.2
function getRandomColor() {
    const myColors = ["red", "blue", "black", "green", "darkgray","darkgreen","darkred","darkblue"];
    const randomIndex = Math.floor(Math.random() * myColors.length);
    const color = myColors[randomIndex];
    return color;
}

let responseId = "";

$("#submit").click(function () {
    let jsonData = {
        "name": $("#name").val(),
        "lastName": $("#lastName").val(),
        "age": $("#gimMetai").val(),
        "email": $("#email").val(),
        "agreed": true
    }

    $.ajax({ 
        type:"POST",
        url:"https://jsonblob.com/api/jsonBlob/",
        data: JSON.stringify(jsonData), 
        contentType: 'application/json',
        success: function(res) {
            $(".table-for-info").append(
                '<tr>' + 
                '<td>' + res.name + " " + res.lastName + '</td>' 
                + '<td>' + res.age + '</td>'
                + '<td>' + res.email + '</td>'
                + '<td>' + res.agreed + '</td>' 
                + '</tr>'
            )
            console.log(res);
            console.log("Added");
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(xhr, status, err.toString());
        }.bind(this)
    }); 
});