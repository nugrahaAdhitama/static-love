function nonFo() {document.getElementById('idfoto').style.display = "none";} function showFo() {document.getElementById('idfoto').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";} 
  function showDiv() {ketik();document.getElementById('Content').style.opacity = "1";document.getElementById('Content').style.margin = "0";}
  
  var i=0,text;text = ""
  var u=0,text2;text2 = ""
  var j=0, text3;text3 = ""
  
  function ketik() {if(i<text.length){document.getElementById("text").innerHTML += text.charAt(i);i++;setTimeout(ketik,100);}
    if(i==text.length){document.getElementById("text").innerHTML = text + emotnama;ketikk();}
  }
  function ketikk() {if(u<text2.length){document.getElementById("text2").innerHTML += text2.charAt(u);u++;setTimeout(ketikk,200);}
    if(u==text2.length){
    document.getElementById("text2").innerHTML = text2 + emotnama;
    document.getElementById('Content').style.animation = "kont 3s infinite";
    ketikkk();
    }
      }

      function ketikkk() {if(j<text3.length){document.getElementById("text3").innerHTML += text3.charAt(j);j++;setTimeout(ketik,300);}
        if(j==text3.length){document.getElementById("text3").innerHTML = text3 + emotnama;}
  }