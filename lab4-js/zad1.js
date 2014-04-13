	/*jshint globalstrict: true devel: true */
	'use strict';

	var _ = require('underscore');


	var defFun = function (fun,types){	
	  fun.typeConstr=types;
	  return fun;
	}

	var myFun = defFun(function (a,b,c){
		return a+b+c;
	} ,['number','number','number'] );



	var appFun = function(f){
			var args = arguments;
			var types = f.typeConstr;
			
			var i=0;
			_.each(_.toArray(args).slice(1,args.length), function(el){
				
				if (typeof el!==types[i])
					throw({ typerr: "Wystąpił błąd, Oczekiwałem: " + types[i] + " Orzymałem: " + typeof el });
				i++;

			});
			return f.apply(this,_.toArray(args).slice(1,args.length));
	}


	try {
		//console.log(appFun(myFun,1,2,3));
		} 
	catch(e){
		console.log(e.typerr);
	}


// ---------------------- koniec zad 1 ----------------------

	// \b znak długości 0	
	//var wzor = new RegExp ('((\\s)([a,i,o,u,w,z])(\\s)','gi')
	var wzor=/(\b)([a,i,o,u,w,z])(\b)/gi;
	var tekst = "Ala i As poszli w las"

	var nbsp = function(){
		
		return this.replace(wzor,' '+"$2"+"&nbsp;");
	}

	String.prototype.nbsp=nbsp;

	//console.log(tekst.nbsp());


// ---------------------- koniec zad 2 ----------------------



	var szablon =
	  '<td><table border="{border}">' +
	  '  <tr><td>{first}</td><td>{last}</td></tr>' +
	  '</table>';


	var reg = /{([a-z]*)}/gmi;

	var dane = {
	    first: "Jan",
	    last:  "Kowalski",
	    pesel: "97042176329"
	};



	 var podstaw = function(dane){

		var match;	
		var matches = [];
		
		var temp=this; // temporary variable for szablon
		while (match = reg.exec(szablon)) {
	  		matches.push(match[0]);
	  		if(dane[match[1]]!==undefined)
	  		 temp=temp.replace(match[0],'{'+dane[match[1]]+'}');   // dane[expresion] odwołanie się do pola obiektu poprzez wyrażenie np. dane.first to to samo co dane[expresion] jeśli wartośc [expresion] === 'first'
		
		}
		return temp;
	 } 

	String.prototype.podstaw=podstaw;  //add function to string prototype
 	//console.log(szablon.podstaw(dane));

 	// ---------------------- koniec zad 3 ----------------------



	 var fib = function fib(arg) {
	    if (arg <= 0) {
	        return 0;
	    }
	    if (arg === 1) {
	        return 1;
	    }
	    return fib(arg - 1) + fib(arg - 2);
	};

	


	var memo = function (cache, fun) {
   		return function f(n){
   			if(typeof cache[n]==='number'){
   				//console.log(cache);
   				return cache[n];
   			}
   			else{
   				cache[n]=fun(f,n);
   				return cache[n];		
   			}

   		}
	};


	var fibonacci = memo([0, 1], function (recur, n) {
    	return recur(n - 1) + recur(n - 2);
	});

console.log(fib(39));
console.log(fibonacci(39));