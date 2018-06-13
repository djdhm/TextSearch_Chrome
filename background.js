
alert("te*st")

/*****************************************************************
 * onMessage from the extension or tab (a content script)
 *****************************************************************/
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        alert("Meessage")
      if (request.cmd == "any command") {
        sendResponse({ result: "any response from background" });
        alert("any commande ")
      } else {
        sendResponse({ result: "error", message: `Invalid 'cmd'` });
        alert(request.type)
       
    
      }
      return true; 
    });


    var script = document.createElement('script');
    script.src = 'jquery-1.11.0.min.js';
    script.type = 'text/javascript';
    console.log(document)
    document.getElementsByTagName('head')[0].appendChild(script);



     
   