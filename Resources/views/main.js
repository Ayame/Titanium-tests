/**
 * @author ayame
 */

// Simple debug output helper
function debug(message) {
Ti.API.info(message);
}

/**
*
* @param thisControl The control you wish to dump
* @param goDeep boolean Do you want deep introspection
* @param incFuncs boolean Do you want to include functions in the output when going deep
* @return null
*/
function dumpObj2(thisControl, goDeep, incFuncs) {

    // Some sanity checks
    if (thisControl == null) {
        debug("Can't do much with null");
        return;
    }
    
    // Start simple
    var objectName = typeof thisControl;
    debug("["+objectName+"] thinks it's a "+thisControl.toString());
    debug("The constructor of ["+objectName+"] thinks it's a/an "+typeof thisControl.constructor)
    
    try {
     debug("Dynamic Properties: "+JSON.stringify(thisControl.getDynamicProperties()));
    } catch (e) {
debug("No Dynamic Properties");
    }
    
    if (goDeep) {
        // thisControl is the item you wish to debug
        for(p in thisControl) {
            // Define a default type
            var typeName = "property";
            try {
                // Grab a handle to allow us to check
                var typeHandle = thisControl[p];
                if (typeof typeHandle == "function") {
                    // We have a function
                    if (!incFuncs) {
                        // Ignore it
                        continue;
                    }
                    typeName = typeHandle;
                }
            } catch (e) {
                // Oops - we have a problem - not an issue
                //Ti.API.info("Exception with "+p);
            }
            // Basic info
            debug("["+typeName+"] "+p);
            
            switch (typeName) {
     case "property":
try {
if ("object" == typeof thisControl[p]) {
dumpObj2(thisControl[p]);
} else {
debug("value type: "+ typeof thisControl[p]);
debug("Value: "+thisControl[p]);
}
     } catch (e) {
    // TODO: handle exception
     }
     break;

     case "function":
     // Nothing
     break;

     case "object":
     // Recursive for objects
     try {
dumpObj2(thisControl[p])
} catch (e) {
// Do nothing
}
     break;

     default:
     // Nothing
     break;
     }
        }
    }
}
 var currentWin = Ti.UI.currentWindow;
 
 //dumpObj2(Ti.UI.currentWindow,true,true);

 /*var section = Titanium.UI.createTableViewSection();
section.headerTitle = "Hello";
var row1 = Titanium.UI.createTableViewRow({title:"Pagina 1"});
var row2 = Titanium.UI.createTableViewRow({title:"Pagina 2"});
section.add(row1);
section.add(row2);


items.add(section);*/

Ti.API.info("WIDTH: "+ Ti.Platform.displayCaps.platformWidth);
 var textContainer = Ti.UI.createView({
 		width: 'auto', 
		height:'auto', 
		backgroundColor: '#000',
		right: 0, 
		top: 170
	});

 textContainer.add(Ti.UI.createLabel(
 	{
		font: {fontFamily: 'Georgia', fontSize: 70, fontStyle: 'italic'}, 
		text: 'Three page mock-up',
		width: 'auto', 
		height:'auto',
		color: '#FFF'
	}
 ));
  currentWin.add(textContainer);
 
 
 var tableItems = [
 	{title: 'Pagina 1', 
	click: function(){
 		Ti.API.info('GEKLIKT');
		this.title('TEST');
	},
	myid: 1
	},
 	{title: 'Pagina 2',touchEnabled: true,
	myid: 2},
	{title: 'Pagina 3',touchEnabled: true,
	myid: 3}];
 
 var items = Titanium.UI.createTableView(
 	{	data:tableItems,
		width: 200,
		height: 300, 
		rowHeight: 100,
		separatorColor: '#FFFFFF',
		font: {fontFamily: 'Thonburi'}, 
		position: 'absolute'
	}
	);
	items.addEventListener('click',myfunction);
	function myfunction(e){
		Ti.API.info('GEKLIKT');
		e.rowData.title = 'VERANDERD';
		e.rowData.backgroundColor = '#F00';
		if(e.rowData.myid == 1){
			var newWindow = Ti.UI.createWindow({url: 'pagina1.js', fullscreen: true});
		Ti.UI.currentWindow.hide({animated:true});
		newWindow.open();
		}
	}

var postop = (Ti.Platform.displayCaps.platformHeight /2) - (items.height / 2);
var posleft = (Ti.Platform.displayCaps.platformWidth /2) - (items.width /2); 
 items.top = postop; 
 items.left = posleft;
  Titanium.API.debug("MY DEBUG" + JSON.stringify(items));
/* Titanium.API.debug('>>>>>>' + Titanium.UI.currentWindow);
 myDebug(Titanium.UI.currentWindow);*/

 currentWin.add(items);
 
 

