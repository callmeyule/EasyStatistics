var typeTestTwo;
var inputTestTwo;
function dealType(){
	for(var i=0;i<typeListTest.length;i++)
	{
		typeTestTwo=typeListTest[i].type;
		inputTestTwo="<input>";
		$("#inputTest").append("<p>typeTestTwo</p>",inputTestTwo);
	}
}