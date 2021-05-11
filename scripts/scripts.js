$(document).ready(function () {
  $(".card-grid").flip();

  function getJoke() {
    var jokes = [
      "Why do potatoes make good detectives? Because they keep their eyes peeled.",

      "What do you get if you divide the circumference of a pumpkin by its diameter? Pumpkin pi.",

      "How do you lead a horse to water? With lots of carrots.",

      "What do you call a stolen yam? A hot potato.",

      "Everyone has these on their face? Tulips",

      "What vegetable can tie your stomach in knots? String beans.",

      "What did the carrot say to the wheat? Lettuce rest, I'm feeling beet.",
    ];

    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  $("#joke-button").click(function (e) {
    $("#joke-text").text(getJoke());
  });
});
