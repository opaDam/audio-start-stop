$(function () {
  var audio = $("#audio")[0];
  // var audio = new Audio();

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
});
