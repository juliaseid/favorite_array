$(document).ready(function () {
    $("#user-info").submit(function (event) {
        var faveThing = $("input#thing").val();
        var faveFood = $("input#food").val();
        var faveShoes = $("input#shoes").val();
        var faveSong = $("input#song").val();
        var faveCat = $("input#cat").val();

        let thingsList = [faveThing, faveFood, faveShoes, faveSong, faveCat];

        let userList = thingsList.slice()


        //pull elements 2, 1 and 3 from var thingsList;
        //declare a variable for each of those elements;



        $("#userList").empty().append(thingsList);

        event.preventDefault();
    });
});