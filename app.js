$(function () {
  var audio = $("#audio")[0];
  $(".pauseBtn").hide();

  $(".playBtn").on("click", function () {
      audio.play();
      $(".playBtn").hide(1000);
      $(".pauseBtn").show(1000);
      console.log(this);
  });

  $(".pauseBtn").on("click", function () {
    $(".pauseBtn").hide(1000);
    $(".playBtn").show(1000);
    audio.pause();
  });
  $(".stopBtn").on("click", function () {
    $(".pauseBtn").hide(1000);
    $(".playBtn").show(1000);
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
    $(".songPlay")[0].innerText = (e.target.innerText);
  });
});


