var ui = require("sdk/ui"),
    Data = require("./Data"),
    PrefServ = require("./PrefServ"),
    button,
    on_tooltip =  "Document Colors Enabled\nClick to disable",
	off_tooltip = "Document Colors Disabled\nClick to enable";

exports.init = function(){
  
    button = ui.ActionButton({
        id: "toggle-document-colors",
        label:"Toggle Document Colors",
        icon:{
			"16": Data.get('images/icon_on16.png'),
			"32": Data.get('images/icon_on32.png'),
			"64": Data.get('images/icon_on64.png'),
		},
        onClick:toggleDocumentColors
    });

    //set icon and label to reflect the initial state
    setupIconAndLabel();

};

function toggleDocumentColors(){
  
	if(PrefServ.getter("browser.display.use_document_colors") == true)
		PrefServ.setter("browser.display.use_document_colors",false);
  	else
    	PrefServ.setter("browser.display.use_document_colors",true);
};



function setupIconAndLabel(){
	if(PrefServ.getter("browser.display.use_document_colors") == true){
    	button.label = on_tooltip;
    	button.icon["16"] = Data.get("images/icon_on16.png");   
    	button.icon["32"] = Data.get("images/icon_on32.png");   
    	button.icon["64"] = Data.get("images/icon_on64.png");   
    	button.icon =  Data.get("images/icon_on64.png");  
  	}
  	else{
    	button.label = off_tooltip;
    	button.icon["16"] = Data.get("images/icon_off16.png");   
    	button.icon["32"] = Data.get("images/icon_off32.png");   
    	button.icon["64"] = Data.get("images/icon_off32.png");   
    	button.icon =  Data.get("images/icon_off64.png");  
  	}
};


exports.setIconAndLabel = function(){
	setupIconAndLabel();
};
