var drawTree = function drawTree(g) {
  if (g <=0) {
    console.log("Wrong number! The number should be > 0.");
  }
  else {
    for (var i=1 ; i<=g; i++) {
      var star ="";
      for (var j=0 ; j<i*2-1; j++) {
         star += "*";
      }
      var mySpace ="";
      for (var k=0 ; k<g-i; k++) {
         mySpace += "-";
      }
      console.log(mySpace + star);
    }
  }
}
drawTree(10);
//drawTree(-5);

var drawTree2 = function drawTree2(g) {
  if (g <=0) {
    console.log("Wrong parameter!! The number should be > 0.");
  }
  else {
    for (var i=1; i<=g; i++) {
      var point = "";
      for (var j=1; j<i; j++) {
        point += ".";
      }
      var cross ="";
      for (var k=0; k<(2*(g-i))+1; k++) {
        cross += "x";
      }
      console.log(point + cross);
    }
  }
}
drawTree2(10);

//To odwrócone drzewko napisałam trochę z pomocą męża, ale w większości samodzielnie. Zaczynam troszkę lepiej rozumieć funkcjonowanie pętli, ale sporo pracy przede mną.
