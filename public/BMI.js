

$("#cut").on("click", ()=>{
	$("#plan").val("CUT");

	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Math.round((Number($("#bmr").text())-500 + Number.EPSILON)*10)/10);
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").val(Math.round(((protein/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".f").val(Math.round(((fat/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".c").val(Math.round(((carbo/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
		});
	$("#time0").val("08:00");
	$("#time1").val("11:00");
	$("#time2").val("13:00");
	$("#time3").val("16:00");
	$("#time4").val("20:00");
	$("#time5").val("22:00");
 	

	$("#prot0").attr({
		"max": protein,
		"min": 0
	});

	$("#prot0").on('input',()=>{
		$("#prot1").attr({
		"max": (protein-Number($("#prot0").val())),
		"min": 0});
		$("#prot1").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#prot1").on('input',()=>{
		$("#prot2").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())),
		"min": 0});
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#prot2").on('input',()=>{
		$("#prot3").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())),
		"min": 0});
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#prot3").on('input',()=>{
		$("#prot4").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())),
		"min": 0});
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#prot4").on('input',()=>{
		$("#prot5").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val())),
		"min": 0});
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#carbs0").attr({
		"max": carbo,
		"min": 0
	});

	$("#carbs0").on('input',()=>{
		$("#carbs1").attr({
		"max": (carbo-Number($("#carbs0").val())),
		"min": 0});
		$("#carbs1").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#carbs1").on('input',()=>{
		$("#carbs2").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())),
		"min": 0});
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#carbs2").on('input',()=>{
		$("#carbs3").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())),
		"min": 0});
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#carbs3").on('input',()=>{
		$("#carbs4").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())),
		"min": 0});
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#carbs4").on('input',()=>{
		$("#carbs5").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val())),
		"min": 0});
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#fat0").attr({
		"max": fat,
		"min": 0
	});
	$("#fat0").on('input',()=>{
		$("#fat1").attr({
		"max": (fat-Number($("#fat0").val())),
		"min": 0});
		$("#fat1").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#fat1").on('input',()=>{
		$("#fat2").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())),
		"min": 0});
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#fat2").on('input',()=>{
		$("#fat3").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())),
		"min": 0});
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#fat3").on('input',()=>{
		$("#fat4").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())),
		"min": 0});
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#fat4").on('input',()=>{
		$("#fat5").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val())),
		"min": 0});
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

});


$("#maintain").on("click", ()=>{
	$("#plan").val("MAINTAIN");


	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Math.round((Number($("#bmr").text())+Number.EPSILON)*10)/10);
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").val(Math.round(((protein/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".f").val(Math.round(((fat/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".c").val(Math.round(((carbo/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
		});
	$("#time0").val("08:00");
	$("#time1").val("11:00");
	$("#time2").val("13:00");
	$("#time3").val("16:00");
	$("#time4").val("20:00");
	$("#time5").val("23:00");


	
	$("#prot0").attr({
		"max": protein,
		"min": 0
	});

	$("#prot0").on('input',()=>{
		$("#prot1").attr({
		"max": (protein-Number($("#prot0").val())),
		"min": 0});
		$("#prot1").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#prot1").on('input',()=>{
		$("#prot2").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())),
		"min": 0});
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#prot2").on('input',()=>{
		$("#prot3").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())),
		"min": 0});
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#prot3").on('input',()=>{
		$("#prot4").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())),
		"min": 0});
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#prot4").on('input',()=>{
		$("#prot5").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val())),
		"min": 0});
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#carbs0").attr({
		"max": carbo,
		"min": 0
	});

	$("#carbs0").on('input',()=>{
		$("#carbs1").attr({
		"max": (carbo-Number($("#carbs0").val())),
		"min": 0});
		$("#carbs1").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#carbs1").on('input',()=>{
		$("#carbs2").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())),
		"min": 0});
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#carbs2").on('input',()=>{
		$("#carbs3").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())),
		"min": 0});
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#carbs3").on('input',()=>{
		$("#carbs4").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())),
		"min": 0});
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#carbs4").on('input',()=>{
		$("#carbs5").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val())),
		"min": 0});
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#fat0").attr({
		"max": fat,
		"min": 0
	});
	$("#fat0").on('input',()=>{
		$("#fat1").attr({
		"max": (fat-Number($("#fat0").val())),
		"min": 0});
		$("#fat1").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#fat1").on('input',()=>{
		$("#fat2").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())),
		"min": 0});
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#fat2").on('input',()=>{
		$("#fat3").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())),
		"min": 0});
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#fat3").on('input',()=>{
		$("#fat4").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())),
		"min": 0});
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#fat4").on('input',()=>{
		$("#fat5").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val())),
		"min": 0});
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	})

});

$("#bulk").on("click", ()=>{
	$("#plan").val("BULK");


	$("#plans").fadeOut(400, ()=>{
		$(this).remove();
	});
	$("#cal").text(Math.round((Number($("#bmr").text())+500 + Number.EPSILON)*10)/10);
		var fat = 0.3 *Number($("#cal").text())/ 9;
		var protein = 0.3 *Number($("#cal").text())/ 4;
		var carbo = 0.4 *Number($("#cal").text())/ 4;
	$(".p").val(Math.round(((protein/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".f").val(Math.round(((fat/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$(".c").val(Math.round(((carbo/Number($("#nM").text()))+Number.EPSILON)*10)/10);
	$("#chart").hide().delay(500).fadeIn(500, ()=>{
		$(this).removeClass("method");
		});
	$("#time0").val("08:00");
	$("#time1").val("11:00");
	$("#time2").val("13:00");
	$("#time3").val("16:00");
	$("#time4").val("20:00");
	$("#time5").val("23:00");

	
	$("#prot0").attr({
		"max": protein,
		"min": 0
	});

	$("#prot0").on('input',()=>{
		$("#prot1").attr({
		"max": (protein-Number($("#prot0").val())),
		"min": 0});
		$("#prot1").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#prot1").on('input',()=>{
		$("#prot2").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())),
		"min": 0});
		$("#prot2").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#prot2").on('input',()=>{
		$("#prot3").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())),
		"min": 0});
		$("#prot3").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#prot3").on('input',()=>{
		$("#prot4").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())),
		"min": 0});
		$("#prot4").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#prot4").on('input',()=>{
		$("#prot5").attr({
		"max": (protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val())),
		"min": 0});
		$("#prot5").val(Math.round((((protein-Number($("#prot0").val())-Number($("#prot1").val())-Number($("#prot2").val())-Number($("#prot3").val())-Number($("#prot4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#carbs0").attr({
		"max": carbo,
		"min": 0
	});

	$("#carbs0").on('input',()=>{
		$("#carbs1").attr({
		"max": (carbo-Number($("#carbs0").val())),
		"min": 0});
		$("#carbs1").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#carbs1").on('input',()=>{
		$("#carbs2").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())),
		"min": 0});
		$("#carbs2").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#carbs2").on('input',()=>{
		$("#carbs3").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())),
		"min": 0});
		$("#carbs3").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#carbs3").on('input',()=>{
		$("#carbs4").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())),
		"min": 0});
		$("#carbs4").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#carbs4").on('input',()=>{
		$("#carbs5").attr({
		"max": (carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val())),
		"min": 0});
		$("#carbs5").val(Math.round((((carbo-Number($("#carbs0").val())-Number($("#carbs1").val())-Number($("#carbs2").val())-Number($("#carbs3").val())-Number($("#carbs4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	});

	$("#fat0").attr({
		"max": fat,
		"min": 0
	});
	$("#fat0").on('input',()=>{
		$("#fat1").attr({
		"max": (fat-Number($("#fat0").val())),
		"min": 0});
		$("#fat1").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val()))/(Number($("#nM").text()))-1)+Number.EPSILON)*10)/10)

	});

	$("#fat1").on('input',()=>{
		$("#fat2").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())),
		"min": 0});
		$("#fat2").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val()))/(Number($("#nM").text()))-2)+Number.EPSILON)*10)/10)

	});

	$("#fat2").on('input',()=>{
		$("#fat3").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())),
		"min": 0});
		$("#fat3").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val()))/(Number($("#nM").text()))-3)+Number.EPSILON)*10)/10)

	});
	$("#fat3").on('input',()=>{
		$("#fat4").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())),
		"min": 0});
		$("#fat4").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val()))/(Number($("#nM").text()))-4)+Number.EPSILON)*10)/10)

	});
	$("#fat4").on('input',()=>{
		$("#fat5").attr({
		"max": (fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val())),
		"min": 0});
		$("#fat5").val(Math.round((((fat-Number($("#fat0").val())-Number($("#fat1").val())-Number($("#fat2").val())-Number($("#fat3").val())-Number($("#fat4").val()))/(Number($("#nM").text()))-5)+Number.EPSILON)*10)/10)

	})
});
	









































































































