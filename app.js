var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/User");

var userSchema = new mongoose.Schema({

	name : String,
	lastName:String,
	country :String,
	age : Number
});

var User = mongoose.model("User", userSchema); //ne olursa olsun tekil olmasına dikkatet çünkü mongoose  cogul yapiyor.


/*
//kullanıcı ekleme islemi
var degisken = new User({

	name : "ugur",
	lastName:"Kirmaci",
	country:"Turkey",
	age: 27
});

degisken.save(function (err , userDB) {
	
	if (err) {
		console.log("Birseyler yanlis gitti...");

	}else{
		console.log("Yeni bir kullanici eklendi...");
		console.log(userDB);
	}	
});
*/
//Onyuzde bi kontrol varsa bu mettotla olusturabiliriz.
User.create({
	name:"Kerem",
	lastName:"Vatandas",
	country: "Turkey",
	age: 27
},function(err,userDB){
	if (err) {
		console.log("Birseyler yanlis gitti....");
	}else{
		console.log("Yeni bir kullanici eklendi...");
		console.log(userDB);
	}
});

//Veritabninda olan degerleri nasil okuruz ??

User.find({}, function(err,users){
	if (err) {
		console.log("Birseyler yanlis gitti...");
		console.log(err);

	}else{
		console.log("***********KULLANICILAR*********");
		console.log(users);

	}
});