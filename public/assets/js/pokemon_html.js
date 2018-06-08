$(function () {

    $.fn.extend({
        animateCss: function (animationName, callback) {
            console.log("entered animateCss");
            var animationEnd = (function (el) {
                var animations = {
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };

                for (var t in animations) {
                    if (el.style[t] !== undefined) {
                        return animations[t];
                    }
                }
            })(document.createElement('div'));
            console.log("added animationEnd");
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
                console.log("removed classes")
                if (typeof callback === 'function') callback();
            });

            console.log(this);
            return this;
        },
    });


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

        $("#pokeball-" + id).removeClass("animated-hover infinite rotate")

        $("#pokeball-" + id).animateCss('throw', function () {
            //callback (things to do after all animations are done)
            $("#pokeball-" + id).animateCss('wobble', function () {
                catchPokemon();
            });
        });

        function catchPokemon() {
            $.ajax("/api/pokemon/" + id, {
                type: "PUT",
                data: newCaughtState
            }).then(function () {
                //console.log("changing caught state to", newCaught);
                location.reload();
            });
        }


    })





});