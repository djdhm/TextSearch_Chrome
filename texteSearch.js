window.onload=function(){
    //document.body.style.background = 'green';

    

    
    var expression=/[0-9-()+]+$/
  
 
    var matches = $('body').text().match("40");
    console.log(matches[0])
    alert("aaaa")

            $("body").highlight('^[0-9]+$');
    function recherche(expression){
    alert("test")
    $('body').highlight("40");
}



}
