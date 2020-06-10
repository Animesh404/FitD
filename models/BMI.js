var mongoose	= require("mongoose");

var bmiSchema	= mongoose.Schema({
	bmr: Number,
	bmi: Number,
	meals: Number,
	day: Date,
	t1: Number,
	t2: Number,
	t3: Number,
	t4: Number,
	t5: Number,
	t6: Number,
	p1: Number,
	p2: Number,
	p3: Number,
	p4: Number,
	p5: Number,
	p6: Number,
	c1: Number,
	c2: Number,
	c3: Number,
	c4: Number,
	c5: Number,
	c6: Number,
	f1: Number,
	f2: Number,
	f3: Number,
	f4: Number,
	f5: Number,
	f6: Number,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	}
});

module.exports	= mongoose.model("BMI", bmiSchema);
