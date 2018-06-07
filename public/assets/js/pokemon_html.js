$(function(){
    console.log("testing1");
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        console.log("testing2");
        var newPoke = {
            nickName: $("#poke").val().trim()
        };

        $.ajax("/api/pokemon", {
            type: "POST",
            data: newPoke
        }).then(
            function(){
                console.log("creating new pokemon");
                location.reload();
            }
        )
    })







});