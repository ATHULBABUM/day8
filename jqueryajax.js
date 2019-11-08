$(document).ready(function(){
    $("button").click(function(){
      $.ajax({url: "https://www.randomtext.me/api/lorem/ul-5/5-15", success: function(result){
        $("#div1").html(result.text_out);
      }});
    });
  });