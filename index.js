var tickrate = 1000; // TICK rate
function Start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("fon1").style.display = "block";
  setTimeout(() => {
    document.getElementById('fon1').style.display = 'block';
    setTimeout(() => {
      document.getElementById("fon1").style.display = "none";
      document.getElementById("bar1").style.display = "block";
      setTimeout(() => {
        document.getElementById("bar1").style.display = "none";
        document.getElementById("bar2").style.display = "block";
        setTimeout(() => {
          document.getElementById("bar2").style.display = "none";
          document.getElementById("bar3").style.display = "block";
          setTimeout(() => {
            document.getElementById("bar3").style.display = "none";
            document.getElementById("bar4").style.display = "block";
            setTimeout(() => {
              document.getElementById("bar4").style.display = "none";
              document.getElementById("bar5").style.display = "block";
              setTimeout(() => {
                document.getElementById("bar5").style.display = "none";
                document.getElementById("bar6").style.display = "block";
                setTimeout(() => {
                  document.getElementById("bar6").style.display = "none";
                  document.getElementById("bar7").style.display = "block";
                  setTimeout(() => {
                    document.getElementById("bar7").style.display = "none";
                    document.getElementById("bar8").style.display = "block";
                    setTimeout(() => {
                      document.getElementById("bar8").style.display = "none";
                      document.getElementById("fon2").style.display = "block";
                      setTimeout(() => {
                        document.getElementById("fon2").style.display = "none";
                        document.getElementById("fon3").style.display = "block";
                        var Audio = document.getElementById("audio");
                        Audio.play();
                      }, tickrate);
                    }, tickrate);
                  }, tickrate);
                }, tickrate);
              }, tickrate);
            }, tickrate);
          }, tickrate);
        }, tickrate);
      }, tickrate);
    }, tickrate)
  }, tickrate);
  
    
}
