
/*
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		console.log("clicky")
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			console.log("setting height to null")
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			// for(var j = 0; j < coll.length; i++)
			// {
				// 	var next_content = this.nextElementSibling;
				// 	if(next_content.style.maxHeight){
					// 		next_content.style.maxHeight = content.scrollHeight + "px";
					// 	}
					// }
			console.log("setting height to whatever")
		}
	});
}

console.log(coll)
console.log("sidebar event listeners done")
*/

//* SIDEBAR

compactMenu('sidebarList',false,'');