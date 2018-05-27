<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

window.onload = function(){
    $("div:regex(class, .*sd.*)").hide();
    alert("Allo")

}

searchWikipedia = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://en.wikipedia.org/wiki/" + query});
    };
    chrome.contextMenus.create({
        title: "Wiki Search",
        contexts:["selection"],
        onclick: recherche
        });
        