var typeTestTwo;
var inputTestTwo;
function dealType(){
	//alert(typeListTest.length);
	for(var i=0;i<typeListTest.length;i++)
	{
		alert(i);
		var blockTest=document.createElement("div");
		//var pTestDiv=document.createElement("div");
		var inputTestThree=document.createElement("input");
		var pTest=document.createElement("span");
		var contain=document.getElementById("insert");
		inputTestThree.setAttribute("class","easyui-textbox");
		inputTestThree.setAttribute("type","text");
		inputTestThree.setAttribute("data-options","required:true");
		//pTest.setAttribute("class","typeDiv");
		pTest.innerHTML=typeListTest[i].type+":";
		pTest.setAttribute("class","typeTrue");
		blockTest.appendChild(pTest);
		//blockTest.appendChild(pTestDiv);
		blockTest.appendChild(inputTestThree);
		contain.appendChild(blockTest);
		$(".easyui-textbox").css('height','25px');
		//$(".easyui-textbox").css('width',4*$(".typeTrue").height());
		$(".easyui-textbox").css('font-style','normal');
		$(".easyui-textbox").css('font-size','20px');
		$(".easyui-textbox").css('font-family','cursive');
		//$(".typeTrue").css('font-family','cursive');
		$(".typeTrue").css('text-align','center');
		$(".typeTrue").css('width','10px');
		$(".typeTrue").css('color','#ff9955');

		//alert("ceshi");
		//alert(typeListTest[i].type);
		/*typeTestTwo=typeListTest[i].type;
		//alert(typeTestTwo);
		inputTestTwo="<input>";
		$("#inputTest").append("<p>+typeTestTwo+</p>",inputTestTwo);*/
	}
}