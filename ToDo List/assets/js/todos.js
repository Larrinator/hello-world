// Check off specific todos by clicking
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

// OOOOOORRRRRRRR USE THIS LONG ASS METHOD!!!!!!
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 	color:"black",
// 	textDecoration: "none"
// 	});

// 	}
// 	else{
// 		$(this).css({
// 	color:"gray",
// 	textDecoration: "line-through"

// });

// 	}

// });



// Click on X to delelte a todo
$("ul").on("click","span", function(event){
$(this).parent().fadeOut(1000, function(){
	$(this).remove();
});
event.stopPropagation();

});

$("input").on("keypress", function(event){
	if(event.which ===13){
// Grabbing new todo text from our input
	var todoText= $(this).val();
	$(this).val("");
// Create a new li and add to our UL
$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-minus-circle").on("click", function(){
$("input").fadeToggle();
});