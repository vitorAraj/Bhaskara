
function bhaskara() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = parseFloat(document.getElementById("num3").value);
    var delta = b ** 2 - (4 *a*c);
    
    if( delta < 0){
        alert("Não há raízes reais");
        document.getElementById("resultado").innerHTML = "O delta  é: " + delta;
        document.getElementById("resultado").style.marginTop = "8%";
        document.getElementById("resultado2").style.display = "none";
    }

    else if (delta > 0) {
      var resultado1 = (-b + Math.sqrt(delta)) / (2 * a);
      var resultado2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("resultado").innerHTML = "x1 é: " + resultado1;
      document.getElementById("resultado2").innerHTML = "x2 é: " + resultado2;
    }
    else{ //delta igual 0
      var r = (-b) / (2 * a);
      document.getElementById("resultado").innerHTML = "Resultado  é: " + r;
    }

  }

