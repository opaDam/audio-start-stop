$(function () {
  var audio = $("#audio")[0];
  var list = $(".ul-list")[0];

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


  // audio = document.querySelector('#audio');
  // const ullist = document.querySelector('.ul-list');
  list.addEventListener('click', function (e) {
    var song = e.target.dataset.song;
    audio.src = "https://opadam.github.io/map/map/" + song;
    audio.toggleAttribute('autoplay');
  })
})


