exports.get_login = (request, response, next) => {
  response.render("login", { isLoggedIn: request.session.isLoggedIn || false });
};

exports.post_login = (request, response, next) => {
  request.session.isLoggedIn = true;
  request.session.username = request.body.username;
  response.redirect("/plantas");
};

exports.get_logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/users/login");
  });
};
