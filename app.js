$("document").ready(function () {
  $(function () {
    var audio = $("#audio")[0];
    console.log(audio);
    $(".pauseBtn").hide();
    $(".stopBtn").hide(1000);

    $(".playBtn").on("click", function () {
      audio.play();
      $(".playBtn").hide(1000);
      $(".pauseBtn").show(1000);
      $(".stopBtn").show(1000);
      console.log(this);
      $("#box1")[0].src = "../images/box1.gif";
      $("#box2")[0].src = "../images/box1.gif";
    });

    $(".pauseBtn").on("click", function () {
      $(".pauseBtn").hide(1000);
      $(".playBtn").show(1000);
      $(".stopBtn").hide(1000);
      audio.pause();
      $("#box1")[0].src = "../images/box.gif";
      $("#box2")[0].src = "../images/box.gif";
    });
    $(".stopBtn").on("click", function () {
      $(".pauseBtn").hide(1000);
      $(".playBtn").show(1000);
      $(".stopBtn").hide(1000);
      audio.pause();
      audio.currentTime = 0;
      $("#box1")[0].src = "../images/box.gif";
      $("#box2")[0].src = "../images/box.gif";
    });
    $("#audio").on("ended", function () {
      console.log("goed");
      audio.pause();
      this.currentTime = 0;
      $("#box1")[0].src = "../images/box.gif";
      $("#box2")[0].src = "../images/box.gif";
    });
    var playSong;
    $(".ul-list").on("click", function (e) {
      if (playSong) {
        playSong.removeClass("blue");
      }
      var song = e.target.dataset.song;
      index = +e.target.className;
      if (!song) {
        return;
      }
      audio.src = "https://opadam.github.io/map/map/" + song;
      $(".songPlay")[0].innerText = e.target.innerText;
      playSong = $("li." + [index]);
      var ind = index;
      playSong.addClass("blue");
      console.log($(playSong));
      $(".pauseBtn").show(1000);
      $(".playBtn").hide(1000);
      $(".stopBtn").show(1000);

      $("#box1")[0].src = "../images/box1.gif";
      $("#box2")[0].src = "../images/box1.gif";

    });
  });

});
