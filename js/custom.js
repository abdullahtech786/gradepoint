function getResult(){
		var number = document.getElementById('num').value;
		if(number === ''){
			document.getElementById('show').innerHTML='<span style="color:#f1f1f1">Haire student!!! Akta number o kopale meleni ??? <br/> By the way,  Type your number First </span>';
			alert('Field must not be empty');
		}else if(number >= 33 && number < 40){
			document.getElementById('show').innerHTML='<span style="color:white">Apni taina tuina pass diyechen <br/> By the way Your Grade is <b>D</b> </span>';
		}else if(number >= 40 && number < 50){
			document.getElementById('show').innerHTML='<span style="color:yellow">Apni pass diyechen kintu aro valo korte hobe <br /> By the way Your Grade is <b>C</b> </span> ';
		}else if(number >= 50 && number < 60){
			document.getElementById('show').innerHTML='<span style="color:orange">Apni pass diyechen kintu aro valo Asha koresilam <br /> By the way Your Grade is <b>B</b> </span> ';
		}else if(number >= 60 && number < 70){
			document.getElementById('show').innerHTML='<span style="color:blue">Apni pass diyechen kintu You deserve more <br /> By the way Your Grade is <b>A-</b> </span> ';
		}else if(number >= 70 && number < 80){
			document.getElementById('show').innerHTML='<span style="color:skyblue">Apni Motamuti pass diyechen <br /> By the way Your Grade is <b>A</b> </span> ';
		}else if(number >= 80 && number <= 100){
			document.getElementById('show').innerHTML='<span style="color:green">Apni to Board Fatai diyechen <br /> By the way Your Grade is <b>A+</b> </span> ';
		}else if(number >= 0 && number < 33){
			document.getElementById('show').innerHTML='<span style="color:red">Apni Fail diyechen barir dike vuleo jaben na <br /> By the way Your Grade is <b>F</b> </span> ';
		}else if(number < 0 ){
			document.getElementById('show').innerHTML='<span style="color:red">Your number is Invalid';
		}else{
			document.getElementById('show').innerHTML='<span style="color:red"> Beta !! Apnar Matha ki nosto ??';
		}
	}
