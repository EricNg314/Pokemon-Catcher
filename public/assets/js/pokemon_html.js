$(function () {
    console.log("testing1");
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log("testing2");
        var newPoke = {
            nickName: $("#poke").val().trim()
        };

        $.ajax("/api/pokemon", {
            type: "POST",
            data: newPoke
        }).then(function () {
            // console.log("creating new pokemon");
            location.reload();
        })
    });

    $(".catch-pokemon").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newCaught = $(this).data("newcaught");

        var newCaughtState = {
            caught: newCaught
        }

        $.ajax("/api/pokemon/" + id, {
            type: "PUT",
            data: newCaughtState
        }).then(function () {
            //console.log("changing caught state to", newCaught);
            location.reload();
        })


    })





});