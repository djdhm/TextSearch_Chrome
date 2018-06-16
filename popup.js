// var app = chrome.runtime.getBackgroundPage();

chrome.browserAction.setBadgeText({text:"Dj"});
chrome.browserAction.setBadgeBackgroundColor({color:[190, 190, 190, 230]});

function hello() {

    var texte=document.getElementById('expression').value
    alert(texte)
    // Send message to background:
   /*  chrome.runtime.sendMessage({
        type:"FROM_EXTENSION_TO_BACKGROUND",
        expression: "test"
    }); // send to rest of extension, or could just send event.data.payload
 */
    // Recuperer l'onglet active et envoyer un msg au contentScript(textSearch.js)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, 
                            {action: "rechercher",
                            expression:texte },
                             function(response) {
                                 alert("la recherche est terminé !")
                                 alert(response.nombre)
                             });  
    });

   
  
  }
  
  document.getElementById('clickme').addEventListener('click', hello);
