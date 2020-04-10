var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer");

req.query({
	"q": "How much vitamin c is in 2 apples%3F"
});

req.headers({
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"x-rapidapi-key": "b095c92337msh05bb4876e7de4d0p1a3416jsn33448ba2ac66"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
