/**
 * @author ayame
 */

var container = Ti.UI.createView({width: Ti.Platform.displayCaps.platformWidth , height:Ti.Platform.displayCaps.platformHeight,top:0, left: Ti.Platform.displayCaps.platformWidth  }); 

var bgImage = Ti.UI.createImageView({url: '../images/recht1.jpg',preventDefaultImage: true, width:Ti.Platform.displayCaps.platformWidth });
 container.add(bgImage);
 
 var textContainer = Ti.UI.createView({
 	width: 200, 
	height:'auto', 
	backgroundColor: '#000',
	opacity: 0.5,
	right: 0,
	anchorPoint:{x:0,y:0}
	});
 
textContainer.add(Ti.UI.createLabel({
 	text: 'Star Wars: Force Commander', 	
	color: '#FFF', 
	height:'auto',
	opacity: 1,
	font: {fontSize:20, fontFamily: 'Georgia'},
	top: 10,
	left: 10
 }));

textContainer.add(Ti.UI.createLabel({
 	text: 'Ever since Force Commander was first announced way back in 1997, Star Wars fans have been drooling at the chance to control the Imperial and Rebel fleets in a RTS environment. Given LucasArt\'s poor showing with their last foray into the realm of strategy gaming, Rebellion, many were wary at what LucasArts had planned next for their beloved Star Wars universe. We waited and waited and waited. And then last year LucasArts told us all that the Force Commander project would be delayed to update the previous 2D engine to an all-new completely 3D engine. So we waited and waited and waited some more. "That\'s okay, LucasArts," we all said. "We\'ll wait for another year as long as you give us a top-notch 3D Star Wars RTS." Unfortunately, that day never came... ', 
	
	color: '#FFF', 
	font: {fontSize:14,fontFamily: 'Thonburi'},  
	opacity: 1,
	top: 70,
	left: 15,
	height: 'auto', 
	width: 160
 }));


var backBtn = Ti.UI.createButton(
{	title: 'back', 
	bottom: 20, 
	right: 0,
	width: 100,
	height: 30, 
	backgroundColor: '#7b7b7b', 
	color: '#FFF', 
	borderWidth: 0,
	backgroundImage: '../images/bg-btn.jpg'
}
); 
backBtn.addEventListener('click',function(e)
{
   
   var newWindow = Ti.UI.createWindow({url: 'main.js', fullscreen: true});
  
   container.animate({left:Ti.Platform.displayCaps.platformWidth , duration:300},function(){
   	 Ti.UI.currentWindow.hide();
  	 	newWindow.open(); 
   });
});
 container.add(backBtn);

 container.add(textContainer);
 Ti.UI.currentWindow.add(container);
 container.animate({left:0, duration:300});
