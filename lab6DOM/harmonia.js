
domReady(function(){
	var bd = document.querySelectorAll(".bd");
	var hd= document.querySelectorAll(".hd");
	
	var showEvent = function (e){
		
		e.target.nextElementSibling.style.display ="block";
	};
	var hideEvent = function (e){
		
		if(e.target.nextElementSibling.getAttribute("data-show")==="true"){
			e.target.nextElementSibling.style.display ="block";
			console.log(e.target.getAttribute("data-show"));
		}
		else
			e.target.nextElementSibling.style.display ="none";

			
		
	};

	var clickEvent = function(e){
		element = e.target.nextElementSibling;

		if(element.getAttribute("data-show")==="true"){
			element.style.display="none";
			element.setAttribute("data-show","false");
			//console.log(element.getAttribute("data-show"));
			;
			
		}
		else
		{
			
			element.style.display="block";
			element.setAttribute("data-show","true");
			//console.log(element.getAttribute("data-show"));

			
		}

	}




Array.prototype.forEach.call(bd,function(element){
		element.style.display='none';
	});


Array.prototype.forEach.call(hd,function(element){
		//addEvent(element,"mouseover",showEvent);
		//addEvent(element,"mouseout",hideEvent);
		addEvent(element,"click",clickEvent);
		addEvent(element,"mouseover",showEvent);
		addEvent(element,"mouseout",hideEvent);
	});


	console.log(bd);
});