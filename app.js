var express 	= require("express"),
 	app 		= express(),
  	bodyParser 	= require("body-parser"),
  	mongoose 	= require("mongoose"),
    flash     = require("connect-flash"),
  	passport	= require("passport"),
  	LocalStrategy = require("passport-local"),
  	methodOverride = require("method-override"),
  	User 					= require("./models/user");

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
			res.render("register");
		}
		passport.authenticate("local")(req, res, ()=>{
			res.redirect("/");
		});
	});
});
//AUTH ROUTE
app.get("/register",(req, res)=>{
	res.render("register");
});

//LOGIN ROUTES
//render login form
app.get("/login", (req, res)=>{
	res.render("login");
});
//login logic
//middleware
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

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}
app.listen( 3000, process.env.IP, ()=>{
	console.log("app is running!")
})
