# TextSearch_Chrome
Text search and highlighting  plugin for chrome, first plugin made by me 

## usage 
- run google chrome 
- go to extensions 
- chose 'load unpacked' 
- select this folder 
- enjoy ! 

you can use this extension to :     
    -highlight all texts matching a predifined regex when the page is loaded.   
    -search all matching texts for a pattern from the popup view of the extensions
## Extension overview 
every chrome extension contains a 'manifest.json' file that describe it. 
    
    {
        "manifest_version": 2,
        "name": "Recherche Texte ALOG",
        "description": "cette extension permet de faire des recherches dans la page active selon une expression reguliere ",
        "version": "1.0",
    
        "browser_action": {
        "default_icon": "download.png",
        "default_popup": "pageprincipale.html"
        },
        "permissions": [
        "activeTab","tabs","<all_urls>"
        ],
        "background": {
            "scripts": ["background.js"]
        },
        
        "content_scripts": [
            {
                "matches": [
                    "http://*/*",
                    "https://*/*"
                    ],
                "js": ["jquery-1.11.0.min.js","jquery.js","texteSearch.js"],
                "css":["selection.css"],
                "run_at": "document_end"       
            } 
        ]
    }

this file as you see,contains the title and icon of our extension and a description and the html page loaded when the user click on the extension icon in the toolbaar 
    
    "name": "Recherche Texte ALOG",
    "description": "cette extension permet de faire des recherches dans la page active selon une expression reguliere ",
    "version": "1.0",
  
    "browser_action": {
     "default_icon": "download.png",
     "default_popup": "pageprincipale.html" /*Main Page */
    },

### Permissions 
extension access to the Chrome API is limited by the security policy of chrome, so whenever we want to call some functions in extension we need to specify that we are using this resource from api 

    "permissions": [
     "activeTab","tabs","<all_urls>"
     ],
here we are declaring that our extension can access to :        
-activeTab: to get the active tab.  
-tabs : to use all functionnalities of tabs as code injection.  
-<all_urls>: to bind a code to all urls visited.    

### Background Script
we can specify a script that will be executed as the extension is launched, this script will run in background

        "background": {
            "scripts": ["background.js"]
        },

### Content Script 
this is the code that will be injected in the current web page that matches the filtres, we can access all the web page document from the injected code, it will act like it was originally served with the page.   
we can also inject a css file as we see in this example.    


    "content_scripts": [
            {
                "matches": [
                    "http://*/*",
                    "https://*/*"
                ],
            "js": ["jquery-1.11.0.min.js","jquery.js","texteSearch.js"],
            "css":["selection.css"],
            "run_at": "document_end"       
              } 
        ]


- jquery-1.11.0.min.js is the original jquery file 
- jquery.js is a patch that add highlighting function to jquery 

