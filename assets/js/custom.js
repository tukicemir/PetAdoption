$(document).ready(function () {
  console.log("Document is ready");

  $(window).on("hashchange", function () {
    console.log("Hash changed to: ", window.location.hash);
  });

  var app = $.spapp({
    defaultView: "home",
    templateDir: "vtpl/",
    pageNotFound: "error_404", // Corrected typo here
  }); // initialize

  // define routes
  app.route({
    view: "home",
    load: "index.html",
    onCreate: function () {
      console.log("Creating home");
    },
    onReady: function () {
      console.log("Home is ready");
    },
  });

  app.route({
    view: "about",
    load: "about.html",
    onCreate: function () {
      console.log("Creating about");
    },
    onReady: function () {
      console.log("About us is ready");
    },
  });

  // run app
  app.run();
  console.log($.spapp);
});
