function magicSparkles(){

    setTimeout(function () {
      $(".animated-text").addClass("hidden-text");
    }, 50);


  setTimeout(function () {
    $(".animated-text").removeClass("hidden-text");
  }, 600);
}

function AdjustIframeHeightOnLoad() { document.getElementById("form-iframe").style.height = document.getElementById("form-iframe").contentWindow.document.body.scrollHeight + "px"; }
function AdjustIframeHeight(i) { document.getElementById("form-iframe").style.height = parseInt(i) + "px"; }
