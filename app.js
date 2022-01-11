$(function () {
  var audio = $("#audio")[0];

  $(".playBtn").on("click", function () {
    audio.play();
  });

  $(".pauseBtn").on("click", function () {
    audio.pause();
  });
  $(".stopBtn").on("click", function () {
    audio.pause();
    audio.currentTime = 0;
  });
  $("#audio").on("ended", function () {
    this.currentTime = 0;
  });

  $(".ul-list").on("click", function (e) {
    var song = e.target.dataset.song;
    audio.src = "https://opadam.github.io/map/map/" + song;
    audio.toggleAttribute('autoplay');
  });
});


