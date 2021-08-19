var maxLevel=1;
var secondsPassed=0;
var level=0;
var seatsLeft=9999;
//random character generation
var name="Aglieglie";//TODO genera le info casualmente
var surname="Brazorf";//TODO genera le info casualmente
var birthDate=new Date(new Date(1900, 1, 1).getTime() + Math.random() * (new Date(2003, 1, 1).getTime() - new Date(1900, 1, 1).getTime()));
var birthYear=birthDate.getFullYear();
var birthMonth=birthDate.getMonth()+1;
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var birthMonthString=months[birthDate.getMonth()];
var birthDay=birthDate.getDate();

function pageLoaded()
{
	for(i=level+1;i<=maxLevel;i++)
		document.getElementById("level"+i).style="display: none";
	document.getElementById("personalInfo").addEventListener("contextmenu", function(evt){ evt.preventDefault(); }, false);
	document.getElementById("personalInfo").addEventListener("copy", function(evt){ evt.clipboardData.setData("text/plain", "SPAAAAAACE!");evt.preventDefault();}, false);
	setInterval(animate,1000);
	//fill info
	document.getElementById("infoName").innerHTML=name;
	document.getElementById("infoSurname").innerHTML=surname;
	document.getElementById("infoBirthDay").innerHTML=(birthDay<10?"0":"")+birthDay;;
	document.getElementById("infoBirthMonth").innerHTML=(birthMonth<10?"0":"")+birthMonth;
	document.getElementById("infoBirthYear").innerHTML=birthYear;
	//TODO DEBUG
	levelUp();
}
function levelUp()
{
	document.getElementById("level"+level++).style="display: none";
	document.getElementById("level"+level).style="display: block";
	if(level==1)
	{
		//anno
		for(i=1800;i<2021;i++)
		{
			var opt = document.createElement('option');
		    opt.value = i;
		    opt.innerHTML = i;
		    document.getElementById("birthYear").appendChild(opt);
		}
		//giorno
		document.getElementById('birthDay').addEventListener('keypress', function(e){ e.preventDefault(); return false;});
		//mese
		document.getElementById('birthMonth').addEventListener('keypress', function(e){ if(e.keyCode<58 && e.keyCode>47){e.preventDefault(); return false;}});
	}
}
function animate()
{
	secondsPassed++;
	document.getElementById("currentLevel").innerHTML=level;
	document.getElementById("currentMinutes").innerHTML=Math.floor(secondsPassed/60);
	document.getElementById("currentSeconds").innerHTML=((secondsPassed%60<10)?"0":"")+secondsPassed%60;
	document.getElementById("seatsLeft").innerHTML=Math.floor(seatsLeft-=(10*Math.random()));
}
function cancel()
{
	//TODO a seconda del livello, pulisci il form
	if(level==1)
	{
		document.getElementById('name').value="";
		document.getElementById('name').style="background-color: white";
		document.getElementById('surname').value="Surname";
		document.getElementById('surname').style="background-color: white";
		document.getElementById("birthYear").selectedIndex="";
		document.getElementById("birthYear").style="background-color: white";
		document.getElementById('birthDay').value="";
		document.getElementById('birthDay').style="background-color: white";
		document.getElementById('birthMonth').value="";
		document.getElementById('birthMonth').style="background-color: white";
	}
}
function submit()
{
	//TODO a seconda del livello, controlla che i dati inseriti siano corretti
	if(level==1)
	{
		var nErrors=0;
		if(name!=document.getElementById('name').value)
		{
			document.getElementById('name').style="background-color: red;";
			nErrors++
		}
		else document.getElementById('name').style="background-color: white;";
		if(surname!=document.getElementById('surname').value)
		{
			document.getElementById('surname').style="background-color: red;";
			nErrors++
		}
		else document.getElementById('surname').style="background-color: white;";
		if(birthDay!=document.getElementById('birthDay').value)
		{
			document.getElementById('birthDay').style="background-color: red;";
			nErrors++
		}
		else document.getElementById('birthDay').style="background-color: white;";
		if(birthMonthString!=document.getElementById('birthMonth').value)
		{
			document.getElementById('birthMonth').style="background-color: red;";
			nErrors++
		}
		else document.getElementById('birthMonth').style="background-color: white;";
		if(birthYear!=document.getElementById('birthYear').value)
		{
			document.getElementById('birthYear').style="background-color: red;";
			nErrors++
		}
		else document.getElementById('birthYear').style="background-color: white;";
		if(!nErrors)
			levelUp();
	}
}