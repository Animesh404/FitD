var express 	= require("express"),
 	app 		= express(),
  	bodyParser 	= require("body-parser"),
  	mongoose 	= require("mongoose"),
    flash     = require("connect-flash"),
  	passport	= require("passport"),
  	LocalStrategy = require("passport-local"),
  	methodOverride = require("method-override"),
  	User 					= require("./models/user");
  	BMI 					= require("./models/BMI");
var router	= express.Router();

var quotes = [("“By choosing healthy over skinny you are choosing self-love over self-judgement.”"+"– Steve Maraboli" ),("“Your diet is a bank account. Good food choices are good investments.” – Bethenny Frankel"),("“You are what you eat, so don’t be fast, cheap, easy, or fake.” – Unknown"),("“Healthy eating is a way of life, so it’s important to establish routines that are simple, realistically, and ultimately livable.” – Horace"),("“Let food be thy medicine, thy medicine shall be thy food.” – Hippocrates")
];


mongoose.set('useNewUrlParser', true); //Fix For Deprecation Warning
mongoose.set('useFindAndModify', false); //Fix For Deprecation Warning
mongoose.set('useCreateIndex', true); //Fix For Deprecation Warning
mongoose.set('useUnifiedTopology', true);

//mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect('mongodb://localhost/fitD', {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(()=>{
  console.log("Connected to the DB!");
}).catch(err =>{
  console.log("ERROR!: ", err.message);
});
app.use((req, res, next)=>{
	res.locals.currentUser = req.user;
	next();
});
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
	secret: "Its true...10years for being a billionare",
	resave: false,
	saveUninitialized: false
}));
app.use(flash())

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// var id: req.user._id

app.use((req, res, next)=>{
	res.locals.currentUser = req.user;
  	res.locals.error =  req.flash("error");
  	res.locals.success =  req.flash("success");
	next();
});
 
app.get("/", (req, res)=>{
	res.render("home");
});

app.get("/info", isLoggedIn, (req, res)=>{
	res.render("yourInfo");
});
//handling user signup
app.post("/register", (req, res)=>{
	req.body.username
	req.body.password
	User.register(new User({username: req.body.username}), req.body.password, (err, user)=>{
		if(err){
			
			console.log(err);
			req.flash("error",err.message);
			res.render("register");
		}
		passport.authenticate("local")(req, res, ()=>{
			req.flash("success", "Welcome to FitD " + user.username);
			res.redirect("/");
		});
	});
});
//AUTH ROUTE
app.get("/register",(req, res)=>{
	res.render("register");
});
app.get("/yourInfo", isLoggedIn, (req, res)=>{
	res.render("yourInfo");
})
//LOGIN ROUTES
//render login form
app.get("/login", (req, res)=>{
	res.render("login");
});
//login logic

app.post("/login", passport.authenticate("local", {
	
	successRedirect: "/",
	failureRedirect: "/login"
}) ,  (req, res)=>{
})

app.get("/logout", (req, res)=>{
	req.logout();
	req.flash("success", "Logged you out!");
	res.redirect("/");
});
//middleware
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error","You need to be logged in to do that ");
	res.redirect("/login");
}



app.listen( 3000, process.env.IP, ()=>{
	console.log("app is running!")
})
