function showfilemore() {
    var x = document.getElementById("filemore");
    var y = document.getElementById("editmore");
    y.style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

function showeditmore() {
    var z = document.getElementById("filemore");
    var t = document.getElementById("editmore");
    z.style.display = "none";
    if (t.style.display === "none") {
      t.style.display = "flex";
    } else {
      t.style.display = "none";
    }
  }  