module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

//render the sign  up page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Coding-Keeda | sign up",
  });
};


//render the sign in page 
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "Coding-Keeda | sign in",
  });
};

//get the sign up data 
module.exports.create = function(req,res){

}

//sign in and create a session for the user 
module.exports.createSession = function(req,res){

}