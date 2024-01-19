
			let colorname = document.getElementById("colors")
			colorname.innerHTML="color"


		function random() {
			
			let sum=""
			let array = ["a","b","c","d","f",0,1,2,3,4,5,6,7,8,9]

			for (i = 0; i < array.length; i++) {
							
					let x = Math.floor(Math.random()*array.length)
					sum+=array[x]
					
					if (sum.length==6) {
						document.body.style.backgroundColor="#"+sum
						colorname.innerHTML="#"+sum
					}
			}
		}