


var app = {
	version: '1.0', 
	init: function(){
		//Titanium.UI.setBackgroundColor('#000');
		
		
		//this.tabGroup = Titanium.UI.createTabGroup();
		this.mainWindow = Titanium.UI.createWindow({
			url: 'views/main.js',
			title: 'Main Application window',
			barColor: '#222',
			fullscreen: true
		});
		this.mainWindow.open();
		/*this.mainTab = Titanium.UI.createTab({  
            title:'Hoofdtitel test voor positionering',
            window: this.mainMenu
        });
        this.tabGroup.addTab(this.mainTab);  
        this.tabGroup.open({ fullscreen:true });*/
	
	
		Titanium.Gesture.addEventListener('orientationchange', function(e){
		   Titanium.API.info('orientation change ' + e.orientation);
		   
		    
		    if (e.orientation == Titanium.UI.PORTRAIT) {
		       Titanium.UI.orientation = Titanium.UI.LANDSCAPE_LEFT;
		   }
		   
		    if (e.orientation == Titanium.UI.LANDSCAPE_LEFT) {
		       Titanium.UI.orientation = Titanium.UI.LANDSCAPE_LEFT;
		   }
		   
		    
		    if (e.orientation == Titanium.UI.LANDSCAPE_RIGHT) {
		       Titanium.UI.orientation = Titanium.UI.LANDSCAPE_RIGHT;
		   }
		   
		    if (e.orientation == Titanium.UI.UPSIDE_PORTRAIT) {
		       Titanium.UI.orientation = Titanium.UI.UPSIDE_PORTRAIT;
		   }
		   
		});
	
		
	}
};

app.init(); 
