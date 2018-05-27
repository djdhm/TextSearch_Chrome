
alert("te*st")

searchWikipedia = function(word){
    var query = word;
    chrome.tabs.create({url: "https://en.wikipedia.org/wiki/" + query});
    };  
     

    var script = document.createElement('script');
    script.src = 'jquery-1.11.0.min.js';
    script.type = 'text/javascript';
    console.log(document)
    document.getElementsByTagName('head')[0].appendChild(script);
chrome.tabs.getElementsByTagName("di")

console.log()
    function onRequest(request, sender, callback){    
        if(request.action == 'createContextMenuItem'){
            alert("Message")
                var contextItemProperties = {};
                contextItemProperties.title = 'context menu item';
                chrome.contextMenus.create({
                    title: "Wiki Search",
                    contexts:["selection"],
                    onclick: searchWikipedia
                    });
        }
     } 

     
     //subscribe on request from content.js:
     chrome.extension.onMessage.addListener(onRequest);

