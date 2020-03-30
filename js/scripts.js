$(document).ready(function () {
    $("#user-info").submit(function (event) {
        var faveThing = $("input#thing").val();
        var faveFood = $("input#food").val();
        var faveShoes = $("input#shoes").val();
        var faveSong = $("input#song").val();
        var faveCat = $("input#cat").val();

        let thingsList = [faveThing, faveFood, faveShoes, faveSong, faveCat];

        let userList = thingsList.slice();
        let shortList = userList.splice(0, 3);

        let thingThree = shortList.pop();
        let thingTwo = shortList.pop();
        let thingOne = shortList.pop();


        //pull elements 2, 1 and 3 from var thingsList;
        //declare a variable for each of those elements;



        $("#userList").empty().append(shortList);
        $("#thingOne").empty().append(thingOne);
        $("#thingTwo").empty().append(thingTwo);
        $("#thingThree").empty().append(thingThree);

        event.preventDefault();
    });
});