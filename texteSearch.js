window.onload=function(){
    //document.body.style.background = 'green';

    chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

        if (msg.action == 'rechercher') {
          alert("Message recieved!");
          alert(msg.expression)
          highlight(msg.expression)
        }else{
            alert("uknown command")
        }
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
        
    $("body").highlight(texte);
   
}



}
