window.onload=function(){


    // Attente de message provenant de l'extension 
    // ajout un event listener 
    chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

        // SI l'action demandé est une recherche alors procéder a la recherche
        // cette condition est faite pour trier les message 
        // et permettre d"ajouter d autres traitements 
        if (msg.action == 'rechercher') {
          alert("Message recieved!");
          alert(msg.expression)
           $("body").removeHighlight()
          alert("highlight removed  ")
           nb=highlight(msg.expression)
            sendResponse({
              nombre:nb
            })
           
        }else{
            alert("uknown command")
        }
        return true
      });

    window.addEventListener("message", function(event) {
        // We only accept messages from this window to itself [i.e. from any iframes]
        if (event.source != window)
          return;
        if (event.data.type && (event.data.type == "FROM_PAGE_TO_CONTENT_SCRIPT")) {        
            alert("Reception")

            chrome.runtime.sendMessage(event.data); // send to rest of extension, or could just send event.data.payload
        } // else ignore messages seemingly not sent to yourself
      }, false);
      



    window.postMessage({ type: "FROM_PAGE_TO_CONTENT_SCRIPT", 
     text: "Hello from the webpage!" }, "*");

     
  
    

    
    var expression=/[0-9-()+]+$/
  
 
    function highlight(texte){
        
      x= $("body").highlight(texte);
      return x
}



}
