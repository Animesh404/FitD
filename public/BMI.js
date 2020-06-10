var age = document.querySelector("#age");
var gender = document.querySelector("#gender");
var weight = document.querySelector("#weight");
var height = document.querySelector("#height");
var number = document.querySelector("#number");

$("#big").on("click", ()=>{
	var bmrM = Math.round((88.362 + (13.397 * weight.value) + (4.799 * height.value*100) - (5.677 * age.value) + Number.EPSILON)*10)/10 ;
	var bmrF =  Math.round((447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.330 * age.value) + Number.EPSILON)*10)/10 ;
	var BMI = Math.round(((weight.value)/((height.value)*(height.value)) + Number.EPSILON) * 10) / 10 ;
	$("#result").text("Your BMI is " + BMI);
	$("#result").css("color","#e0f2d8");
	$("#comment").css("color","#e0f2d8");
	$("#bmr").css("color","#e0f2d8");
	$("#type").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
	})
	$("#data").fadeOut(400, ()=>{
		$(this).remove();
	});
	event.stopPropagation();
		if(BMI<=24.9 && BMI>=18.5){
		$("#comment").text("Great! your BMI is ideal") ;
	}else if (BMI<18.5){			
		$("#comment").text("You need to put on some mass") ;
	}else if (BMI<=29.9 && BMI>=25){
		$("#comment").text("You need to loose weight") ;
	}else if (BMI>=30){
		$("#comment").text("It's a bit long journey for you Hold Tight!") ;
	}
	if(gender.value[0].toUpperCase() == "M"){
		$("#bmr").text(bmrM) ;
	}else if (gender.value[0].toUpperCase() == "F"){
		$("#bmr").text(bmrF) ;
	}
});

$("#cut").on("click", ()=>{


	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Number($("#bmr").text())-500);
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").text(Math.round(((protein/5)+Number.EPSILON)*10)/10);
	$(".f").text(Math.round(((fat/5)+Number.EPSILON)*10)/10);
	$(".c").text(Math.round(((carbo/5)+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
		});


});


$("#maintain").on("click", ()=>{


	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Number($("#bmr").text()));
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").text(Math.round(((protein/5)+Number.EPSILON)*10)/10);
	$(".f").text(Math.round(((fat/5)+Number.EPSILON)*10)/10);
	$(".c").text(Math.round(((carbo/5)+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
		});


});

$("#bulk").on("click", ()=>{


	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Number($("#bmr").text())+500);
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").text(Math.round(((protein/5)+Number.EPSILON)*10)/10);
	$(".f").text(Math.round(((fat/5)+Number.EPSILON)*10)/10);
	$(".c").text(Math.round(((carbo/5)+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
		});


});









































































































