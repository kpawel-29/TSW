	/*jshint globalstrict: true devel: true */
	'use strict';

// ------------- Zadanie 1 -----------------
/*
Napisz funkcję, która wylicza i wyświetla za pomocą 
alert głębokość drzewa dokumentu. 
Obliczając głębokość weź pod uwagę zarówno węzły 
elementów, jak i węzły tekstowe. 
*/
//------------------------------------------
$(document).ready(function () { 

	var nodes = $("body").contents();
	var depth=0;
	
/*	alert(nodes.toArray());
	nodes=nodes.contents();
	alert(nodes.toArray());
	nodes=nodes.contents();
	alert(nodes.toArray());*/

	while(nodes.length>0){
		nodes=nodes.contents();
		//alert(nodes.length);
		depth+=1;
	}
	//alert(depth);	

	//alert($("body").contents().toArray()); 

});

// ------------------------------------------
/*
Napisz funkcję, która dla zadanego węzła w 
drzewa dokumentu zwraca łańcuch znaków będących 
treścią węzłów typu tekstowego wystepujących w 
poddrzewie rozpoczynającym się od w. 
Wynik zastosowania funkcji wyświetl za pomocą alert. 
*/
// ------------- Zadanie 2 -----------------


var w = function(wezel){
	var node = $(document).find(wezel)
	console.log(node);
	var textvalues='';
		_.each(node,function(x){
			textvalues+=x.textContent.replace(/^\s+|\s+$/gm,'');   /// every sing not a white space(at least one) |
		})
		
	return textvalues;
};

$(document).ready(function () { 
	//alert(w(".hej"));
});


// ------------------------------------------
/*
Napisz funkcję, która odnajduje w drzewie DOM wszystkie elementy 
div i otacza je ramkami o grubości równej 1px dla elementów 
najbardziej zagnieżdżonych oraz zwiększającej się stopniowo 
ze zmniejszającym się stopniem zagnieżdżenia
*/
// ------------- Zadanie 3 -----------------


$(document).ready(function () { 
	

	var addBorder= function(div,minBorderwidth){
		
		var parents = $(div).contents().parents();
		if(parents){
			_.each(parents,function(x){
				if(x.tagName==='DIV'){
					x.style.border= minBorderwidth+"px solid black";
					minBorderwidth++;
					//addBorder(x,minBorderwidth);
				}
			})
		}
	};

	addBorder('div',1);

});


// ------------------------------------------
/*
Napisz funkcję „cenzurującą” treść stron. Jej parametrem 
powinno być wyrażenie regularne określające postać „zabronionej 
treści”. Funkcja powinna odnajdywać w drzewie dokumentu elementy 
tekstowe zawierające tę treść, zamieniać ich zawartość na łańcuch 
znaków „CENZURA” i zmieniać kolor tła elementu bezpośrednio 
zawierającego ocenzurowaną treść na czerwony. 
*/
// ------------- Zadanie 4 -----------------


$(document).ready(function () { 


		var cenzura= function(reg){
			
			var nodes= $("*").contents();
			_.each(nodes,function(x){
				if(x.nodeType===3){
				console.log(x.textContent);
					if(reg.test(x.textContent)){
						x.textContent = x.textContent.replace(reg,"CENZURA");
						x.parentNode.style.background="red";
					}
				}
			})
		};

		cenzura(/chuj[a-z]*/gmi);
});


// testy obslugi zdarzeń

/*$(document).ready(function(){
	var li= document.getElementsByTagName("li");
	
	var toBlue = function(){
		this.style.backgroundColor = 'blue';
	}
	var toRed = function(){
		this.style.backgroundColor = 'red';
	}
	Array.prototype.forEach.call(li, function(el){
		el.onmouseover=toBlue;
		el.onmouseout=toRed;
	});
	
});*/

/*$(document).ready(function(){

	var li = document.getElementsByTagName("li");
	Array.prototype.forEach.call(li,function(el){
		el.onmouseover=function(e){
			this.style.backgroundColor='blue';
			e.stopPropagation();
		};
		el.onmouseout=function(e){
			this.style.backgroundColor="red";
			e.stopPropagation();
		};
	});


});*/