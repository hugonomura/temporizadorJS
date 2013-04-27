$(document).ready(function(){
  var myVar;
  var t;

  function Tempo(){
    this.relogio = new Date();
    this.relogio.setMilliseconds(0);
    this.relogio.setSeconds(0);
    this.relogio.setMinutes(0);
    this.relogio.setHours(0);
  }

  $("#comeca").click(function(){
    myVar = setInterval(function(){myTimer()},1);
    t = new Tempo();

    function myTimer(){
      t.relogio.setMilliseconds(t.relogio.getMilliseconds() + 1);
      var saida = "";

      if(t.relogio.getHours() < 10){
        saida += "0" + t.relogio.getHours();
      }else{
        saida += t.relogio.getHours();
      }
      saida += ":";

      if(t.relogio.getMinutes() < 10){
        saida += "0" + t.relogio.getMinutes();
      }else{
        saida += t.relogio.getMinutes();
      }
      saida += ":";

      if(t.relogio.getSeconds() < 10){
        saida += "0" + t.relogio.getSeconds();
      }else{
        saida += t.relogio.getSeconds();
      }
      saida += ":";

      if(t.relogio.getMilliseconds() < 100){
        if(t.relogio.getMilliseconds() < 10){
          saida += "00" + t.relogio.getMilliseconds();
        }else{
          saida += "0" + t.relogio.getMilliseconds();
        }
      }else{
        saida += t.relogio.getMilliseconds();
      }
      $("#timer").html(saida);
    }
  });

  $("#pausa").click(function(){
    if(myVar)
      clearInterval(myVar);
  });

  $("#continua").click(function(){
    myVar = setInterval(function(){myTimer()},1);

    function myTimer(){
      t.relogio.setMilliseconds(t.relogio.getMilliseconds() + 1);
      var saida = "";

      if(t.relogio.getHours() < 10){
        saida += "0" + t.relogio.getHours();
      }else{
        saida += t.relogio.getHours();
      }
      saida += ":";

      if(t.relogio.getMinutes() < 10){
        saida += "0" + t.relogio.getMinutes();
      }else{
        saida += t.relogio.getMinutes();
      }
      saida += ":";

      if(t.relogio.getSeconds() < 10){
        saida += "0" + t.relogio.getSeconds();
      }else{
        saida += t.relogio.getSeconds();
      }
      saida += ":";

      if(t.relogio.getMilliseconds() < 100){
        if(t.relogio.getMilliseconds() < 10){
          saida += "00" + t.relogio.getMilliseconds();
        }else{
          saida += "0" + t.relogio.getMilliseconds();
        }
      }else{
        saida += t.relogio.getMilliseconds();
      }
      $("#timer").html(saida);
    }
  });

  $("#reseta").click(function(){
    if(myVar)
      clearInterval(myVar);
    $("#timer").html("00:00:00:000");
  });

});
