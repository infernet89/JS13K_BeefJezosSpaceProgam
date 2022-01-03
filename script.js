//common
var maxLevel=12;
var secondsPassed=0;
var level=0;
var seatsLeft=rand(8000,9999);
var phoneDigits=[];
var cooldown=false;
var loadingProgress=0;
var dragging=false;
var mousex,mousey,oldMousex,oldMousey;
var animations=[];
var currentLetter=0;
//random character generation
var names=["Liam","Noah","Oliver","Elijah","William","James","Benjamin","Lucas","Henry","Alexander","Mason","Michael","Ethan","Daniel","Jacob","Logan","Jackson","Levi","Sebastian","Mateo","Jack","Owen","Theodore","Aiden","Samuel","Joseph","John","David","Wyatt","Matthew","Luke","Asher","Carter","Julian","Grayson","Leo","Jayden","Gabriel","Isaac","Lincoln","Anthony","Hudson","Dylan","Ezra","Thomas","Charles","Christopher","Jaxon","Maverick","Josiah","Isaiah","Andrew","Elias","Joshua","Nathan","Caleb","Ryan","Adrian","Miles","Eli","Nolan","Christian","Aaron","Cameron","Ezekiel","Colton","Luca","Landon","Hunter","Jonathan","Santiago","Axel","Easton","Cooper","Jeremiah","Angel","Roman","Connor","Jameson","Robert","Greyson","Jordan","Ian","Carson","Jaxson","Leonardo","Nicholas","Dominic","Austin","Everett","Brooks","Xavier","Kai","Jose","Parker","Adam","Jace","Wesley","Kayden","Silas","Bennett","Declan","Waylon","Weston","Evan","Emmett","Micah","Ryder","Beau","Damian","Brayden","Gael","Rowan","Harrison","Bryson","Sawyer","Amir","Kingston","Jason","Giovanni","Vincent","Ayden","Chase","Myles","Diego","Nathaniel","Legend","Jonah","River","Tyler","Cole","Braxton","George","Milo","Zachary","Ashton","Luis","Jasper","Kaiden","Adriel","Gavin","Bentley","Calvin","Zion","Juan","Maxwell","Max","Ryker","Carlos","Emmanuel","Jayce","Lorenzo","Ivan","Jude","August","Kevin","Malachi","Elliott","Rhett","Archer","Karter","Arthur","Luka","Elliot","Thiago","Brandon","Camden","Justin","Jesus","Maddox","King","Theo","Enzo","Matteo","Emiliano","Dean","Hayden","Finn","Brody","Antonio","Abel","Alex","Tristan","Graham","Zayden","Judah","Xander","Miguel","Atlas","Messiah","Barrett","Tucker","Timothy","Alan","Edward","Leon","Dawson","Eric","Ace","Victor","Abraham","Nicolas","Jesse","Charlie","Patrick","Walker","Joel","Richard","Beckett","Blake","Alejandro","Avery","Grant","Peter","Oscar","Matias","Amari","Lukas","Andres","Arlo","Colt","Adonis","Kyrie","Steven","Felix","Preston","Marcus","Holden","Emilio","Remington","Jeremy","Kaleb","Brantley","Bryce","Mark","Knox","Israel","Phoenix","Kobe","Nash","Griffin","Caden","Kenneth","Kyler","Hayes","Jax","Rafael","Beckham","Javier","Maximus","Simon","Paul","Omar","Kaden","Kash","Lane","Bryan","Riley","Zane","Louis","Aidan","Paxton","Maximiliano","Karson","Cash","Cayden","Emerson","Tobias","Ronan","Brian","Dallas","Bradley","Jorge","Walter","Josue","Khalil","Damien","Jett","Kairo","Zander","Andre","Cohen","Crew","Hendrix","Colin","Chance","Malakai","Clayton","Daxton","Malcolm","Lennox","Martin","Jaden","Kayson","Bodhi","Francisco","Cody","Erick","Kameron","Atticus","Dante","Jensen","Cruz","Finley","Brady","Joaquin","Anderson","Gunner","Muhammad","Zayn","Derek","Raymond","Kyle","Angelo","Reid","Spencer","Nico","Jaylen","Jake","Prince","Manuel","Ali","Gideon","Stephen","Ellis","Orion","Rylan","Eduardo","Mario","Rory","Cristian","Odin","Tanner","Julius","Callum","Sean","Kane","Ricardo","Travis","Wade","Warren","Fernando","Titus","Leonel","Edwin","Cairo","Corbin","Dakota","Ismael","Colson","Killian","Major","Tate","Gianni","Elian","Remy","Lawson","Niko","Nasir","Kade","Armani","Ezequiel","Marshall","Hector","Desmond","Kason","Garrett","Jared","Cyrus","Russell","Cesar","Tyson","Malik","Donovan","Jaxton","Cade","Romeo","Nehemiah","Sergio","Iker","Caiden","Jay","Pablo","Devin","Jeffrey","Otto","Kamari","Ronin","Johnny","Clark","Ari","Marco","Edgar","Bowen","Jaiden","Grady","Zayne","Sullivan","Jayceon","Sterling","Andy","Conor","Raiden","Royal","Royce","Solomon","Trevor","Winston","Emanuel","Finnegan","Pedro","Luciano","Harvey","Franklin","Noel","Troy","Princeton","Johnathan","Erik","Fabian","Oakley","Rhys","Porter","Hugo","Frank","Damon","Kendrick","Mathias","Milan","Peyton","Wilder","Callan","Gregory","Seth","Matthias","Briggs","Ibrahim","Roberto","Conner","Quinn","Kashton","Sage","Santino","Kolton","Alijah","Dominick","Zyaire","Apollo","Kylo","Reed","Philip","Kian","Shawn","Kaison","Leonidas","Ayaan","Lucca","Memphis","Ford","Baylor","Kyson","Uriel","Allen","Collin","Ruben","Archie","Dalton","Esteban","Adan","Forrest","Alonzo","Isaias","Leland","Jase","Dax","Kasen","Gage","Kamden","Marcos","Jamison","Francis","Hank","Alexis","Tripp","Frederick","Jonas","Stetson","Cassius","Izaiah","Eden","Maximilian","Rocco","Tatum","Keegan","Aziel","Moses","Bruce","Lewis","Braylen","Omari","Mack","Augustus","Enrique","Armando","Pierce","Moises","Asa","Shane","Emmitt","Soren","Dorian","Keanu","Zaiden","Raphael","Deacon","Abdiel","Kieran","Phillip","Ryland","Zachariah","Casey","Zaire","Albert","Baker","Corey","Kylan","Denver","Gunnar","Jayson","Drew","Callen","Jasiah","Drake","Kannon","Braylon","Sonny","Bo","Moshe","Huxley","Quentin","Rowen","Santana","Cannon","Kenzo","Wells","Julio","Nikolai","Conrad","Jalen","Makai","Benson","Derrick","Gerardo","Davis","Abram","Mohamed","Ronald","Raul","Arjun","Dexter","Kaysen","Jaime","Scott","Lawrence","Ariel","Skyler","Danny","Roland","Chandler","Yusuf","Samson","Case","Zain","Roy","Rodrigo","Sutton","Boone","Saint","Saul","Jaziel","Hezekiah","Alec","Arturo","Jamari","Jaxtyn","Julien","Koa","Reece","Landen","Koda","Darius","Sylas","Ares","Kyree","Boston","Keith","Taylor","Johan","Edison","Sincere","Watson","Jerry","Nikolas","Quincy","Shepherd","Brycen","Marvin","Dariel","Axton","Donald","Bodie","Finnley","Onyx","Rayan","Raylan","Brixton","Colby","Shiloh","Valentino","Layton","Trenton","Landyn","Alessandro","Ahmad","Gustavo","Ledger","Ridge","Ander","Ahmed","Kingsley","Issac","Mauricio","Tony","Leonard","Mohammed","Uriah","Duke","Kareem","Lucian","Marcelo","Aarav","Leandro","Reign","Clay","Kohen","Dennis","Samir","Ermias","Otis","Emir","Nixon","Ty","Sam","Fletcher","Wilson","Dustin","Hamza","Bryant","Flynn","Lionel","Mohammad","Cason","Jamir","Aden","Dakari","Justice","Dillon","Layne","Zaid","Alden","Nelson","Devon","Titan","Chris","Khari","Zeke","Noe","Alberto","Roger","Brock","Rex","Quinton","Alvin","Cullen","Azariah","Harlan","Kellan","Lennon","Marcel","Keaton","Morgan","Ricky","Trey","Karsyn","Langston","Miller","Chaim","Salvador","Amias","Tadeo","Curtis","Lachlan","Amos","Anakin","Krew","Tomas","Jefferson","Yosef","Bruno","Korbin","Augustine","Cayson","Mathew","Vihaan","Jamie","Clyde","Brendan","Jagger","Carmelo","Harry","Nathanael","Mitchell","Darren","Ray","Jedidiah","Jimmy","Lochlan","Bellamy","Eddie","Rayden","Reese","Stanley","Joe","Houston","Douglas","Vincenzo","Casen","Emery","Joziah","Leighton","Marcellus","Atreus","Aron","Hugh","Musa","Tommy","Alfredo","Junior","Neil","Westley","Banks","Eliel","Melvin","Maximo","Briar","Colten","Lance","Nova","Trace","Axl","Ramon","Vicente","Brennan","Caspian","Remi","Deandre","Legacy","Lee","Valentin","Ben","Louie","Westin","Wayne","Benicio","Grey","Zayd","Gatlin","Mekhi","Orlando","Bjorn","Harley","Alonso","Rio","Aldo","Byron","Eliseo","Ernesto","Talon","Thaddeus","Brecken","Kace","Kellen","Enoch","Kiaan","Lian","Creed","Rohan","Callahan","Jaxxon","Ocean","Crosby","Dash","Gary","Mylo","Ira","Magnus","Salem","Abdullah","Kye","Tru","Forest","Jon","Misael","Madden","Braden","Carl","Hassan","Emory","Kristian","Alaric","Ambrose","Dario","Allan","Bode","Boden","Juelz","Kristopher","Genesis","Idris","Ameer","Anders","Darian","Kase","Aryan","Dane","Guillermo","Elisha","Jakobe","Thatcher","Eugene","Ishaan","Larry","Wesson","Yehuda","Alvaro","Bobby","Bronson","Dilan","Kole","Kyro","Tristen","Blaze","Brayan","Jadiel","Kamryn","Demetrius","Maurice","Arian","Kabir","Rocky","Rudy","Randy","Rodney","Yousef","Felipe","Robin","Aydin","Dior","Kaiser","Van","Brodie","London","Eithan","Stefan","Ulises","Camilo","Branson","Jakari","Judson","Yahir","Zavier","Damari","Jakob","Jaxx","Bentlee","Cain","Niklaus","Rey","Zahir","Aries","Blaine","Kyng","Castiel","Henrik","Joey","Khalid","Bear","Graysen","Jair","Kylen","Darwin","Alfred","Ayan","Kenji","Zakai","Avi","Cory","Fisher","Jacoby","Osiris","Harlem","Jamal","Santos","Wallace","Brett","Fox","Leif","Maison","Reuben","Adler","Zev","Calum","Kelvin","Zechariah","Bridger","Mccoy","Seven","Shepard","Azrael","Leroy","Terry","Harold","Mac","Mordechai","Ahmir","Cal","Franco","Trent","Blaise","Coen","Dominik","Marley","Davion","Jeremias","Riggs","Jones","Will","Damir","Dangelo","Canaan","Dion","Jabari","Landry","Salvatore","Kody","Hakeem","Truett","Gerald","Lyric","Gordon","Jovanni","Kamdyn","Alistair","Cillian","Foster","Terrance","Murphy","Zyair","Cedric","Rome","Abner","Colter","Dayton","Jad","Xzavier","Rene","Vance","Duncan","Frankie","Bishop","Davian","Everest","Heath","Jaxen","Marlon","Maxton","Reginald","Harris","Jericho","Keenan","Korbyn","Wes","Eliezer","Jeffery","Kalel","Kylian","Turner","Willie","Rogelio","Ephraim"];
var name=names[rand(0,names.length-1)];
var surnames=["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes","Myers","Ford","Hamilton","Graham","Sullivan","Wallace","Woods","Cole","West","Jordan","Owens","Reynolds","Fisher","Ellis","Harrison","Gibson","Mcdonald","Cruz","Marshall","Ortiz","Gomez","Murray","Freeman","Wells","Webb","Simpson","Stevens","Tucker","Porter","Hunter","Hicks","Crawford","Henry","Boyd","Mason","Morales","Kennedy","Warren","Dixon","Ramos","Reyes","Burns","Gordon","Shaw","Holmes","Rice","Robertson","Hunt","Black","Daniels","Palmer","Mills","Nichols","Grant","Knight","Ferguson","Rose","Stone","Hawkins","Dunn","Perkins","Hudson","Spencer","Gardner","Stephens","Payne","Pierce","Berry","Matthews","Arnold","Wagner","Willis","Ray","Watkins","Olson","Carroll","Duncan","Snyder","Hart","Cunningham","Bradley","Lane","Andrews","Ruiz","Harper","Fox","Riley","Armstrong","Carpenter","Weaver","Greene","Lawrence","Elliott","Chavez","Sims","Austin","Peters","Kelley","Franklin","Lawson","Fields","Gutierrez","Ryan","Schmidt","Carr","Vasquez","Castillo","Wheeler","Chapman","Oliver","Montgomery","Richards","Williamson","Johnston","Banks","Meyer","Bishop","Mccoy","Howell","Alvarez","Morrison","Hansen","Fernandez","Garza","Harvey","Little","Burton","Stanley","Nguyen","George","Jacobs","Reid","Kim","Fuller","Lynch","Dean","Gilbert","Garrett","Romero","Welch","Larson","Frazier","Burke","Hanson","Day","Mendoza","Moreno","Bowman","Medina","Fowler","Brewer","Hoffman","Carlson","Silva","Pearson","Holland"];
var surname=surnames[rand(0,surnames.length-1)];
var birthDate=new Date(new Date(1900, 1, 1).getTime() + Math.random() * (new Date(2003, 1, 1).getTime() - new Date(1900, 1, 1).getTime()));
var birthYear=birthDate.getFullYear();
var birthMonth=birthDate.getMonth()+1;
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var birthMonthString=months[birthDate.getMonth()];
var birthDay=birthDate.getDate();
var age=Math.floor(((new Date()).getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.2425));
var zodiacSign=getZodiac(birthMonth,birthDay);
var countries=["Senegal","Macedonia","Belarus","Tajikistan","Liberia","Costa Rica","Bulgaria","Ukraine","Luxembourg","Guyana","Lesotho","Nicaragua","Taiwan","Norway","Lithuania","Venezuela","Kyrgyzstan","Argentina","Sierra Leone","Cameroon","Malaysia","Netherlands","Liechtenstein","Saudi Arabia","Vatican City","Kiribati","Algeria","Finland","Andorra","Nigeria","Laos","Gabon","Israel","Eritrea","United Kingdom","Qatar","Samoa","Armenia","Croatia","Cyprus","Vanuatu","Philippines","United States","Turkey","Sweden","Burundi","Brazil","Italy","San Marino","Panama","Thailand","Maldives","Estonia","Slovenia","Russian Federation","Kuwait","Kenya","Bahrain","Chile","Fiji","South Africa","Belgium","India","Singapore","Serbia","Morocco","Georgia","Albania","Malta","Botswana","Czech Republic","Bosnia Herzegovina","Ethiopia","Mauritania","Malawi","Burkina","Nauru","Slovakia","Turkmenistan","France","Solomon Islands","Dominica","Latvia","Cuba","Australia","Mauritius","Spain","Palau","Haiti","Japan","Vietnam","Kosovo","Uruguay","Azerbaijan","East Timor","South Sudan","Poland","Bolivia","Tonga","Somalia","Yemen","Cape Verde","Pakistan","Papua New Guinea","Moldova","Grenada","Ecuador","Iran","Kazakhstan","Greece","St Lucia","Niger","Tanzania","Tuvalu","Belize","Switzerland","Chad","Marshall Islands","Korea South","Djibouti","Montenegro","Uzbekistan","Guinea","Iceland","Uganda","Afghanistan","Central African Rep","Sudan","Korea North","Denmark","Angola","Equatorial Guinea","New Zealand","Seychelles","Indonesia","Monaco","Comoros","Brunei","Swaziland","Syria","Gambia","Rwanda","Peru","Oman","Guatemala","Micronesia","Portugal","Germany","Mozambique","Ghana","Dominican Republic","Austria","Zambia","Zimbabwe","Hungary","Madagascar","El Salvador","Guinea-Bissau","Jordan","Iraq","United Arab Emirates","Honduras","Colombia","Mongolia","Egypt","Congo","Suriname","Sri Lanka","Benin","Nepal","Jamaica","Namibia","China","Cambodia","Bangladesh","Paraguay","Togo","Libya","Barbados","Tunisia","Mexico","Mali","Bhutan","Lebanon","Bahamas","Canada","Romania","Ivory Coast"];
var country=countries[rand(0,countries.length-1)];
var cities=["Jesse","Volda","Thiva","Wever","Amora","Olgii","Amlin","Bison","Casco","Thane","Onaga","Capay","Imazu","Lucca","Cocoa","Couva","Nybro","Eolia","Bstad","Moxee","Heron","Vevay","Exton","Geham","Caret","Moody","Pasto","Plain","Fermo","Omiya","Virum","Meers","Hurst","Arese","Young","Alsea","Kunia","Vilas","Dagun","Minto","Mella","Wayan","Cyrus","Yreka","Yauco","Brady","Ashby","Louth","Epsom","Ximba","Rouen","Minot","Porto","Cache","Fonda","Pratt","Wavre","Rhine","Minoa","Rolfe","Angie","Sadri","Hague","Bisho","Gouda","Rolla","Scalf","Alida","Force","Miraj","Mayer","Sanda","Camas","Moose","Warda","Omuta","Olean","Nyeri","Hulin","Ruili","Weert","Akola","Galan","Aline","Chita","Porus","Uledi","Boles","Samos","Colby","Cabot","Mills","Kodak","Copan","Tulia","Evart","Adare","Arbil","Mazon","Vance","Saxon","Quail","Opava","Kerry","Esbon","Maroa","Eilat","Maize","Azusa","Eefde","Anita","Lubno","Sweet","Thors","Adona","Berat","Burua","Ethan","Parnu","Baran","Madoi","Light","Huade","Hibbs","Blsta","Lynch","Carmi","Hulen","Kelso","Torch","Lecco","Grawn","Taopi","Conda","Haden","Paget","Bretz","Muncy","Sudan","Niles","Olive","Davey","Lenox","Nancy","Lavon","Bourg","Marcy","Bondi","Dixon","Smyer","Osseo","Surry","Tieri","Avoca","Arita","Oxley","Swain","Boron","Rodeo","Coban","Micro","Ellis","Dille","Ohito","Tunja","Konya","Rauma","Eksjo","Muldu","Drury","Amasa","Healy","Ystad","Jammu","Surat","Glady","Bunch","Paden","Tomsk","Reyno","Aptos","Laoag","Witta","Neiva","Balia","Malta","Wesco","Davin","Cisne","Waban","Hazel","Ivins","Talmo","Blain","Stone","Plush","Edmon","Mamon","Louin","Wrens","Sears","Dunlo","Wyano","Blach","Faber","Cuiab","Grant","Sylva","Maceo","Redan","Awali","Sakai","Crook","TOLGA","Utica","Gully","Farum","Ronda","KAIRI","Shock","Upton","Patan","Omega","Orrum","Seale","DIXIE","Gates","Tully","WUHAN","Bejou","Aalst","Basin","Kress","House","Percy","Denbo","Borup","Wauna","Morse","Narka","Venta","Jinja","Batam","Wausa","Santa","Simms","Espoo","Yutan","Happy","Aniak","Doran","Kemah","Visby","Banco","Ohrid","Guild","Mound","Derma","Letts"];
var city=cities[rand(0,cities.length-1)];
var zipCode=rand(10000,99999);
var phone=rand(1000000000,9999999999);
var emailName=(name.toLowerCase())+"."+(surname.toLowerCase());
var emailDomain=(city.toLowerCase().substring(0,5));
var emailCountry=(country.toLowerCase().substring(0,2));
var email=emailName+"@"+emailDomain+"."+emailCountry;
var username="";
var password="";
var targetLoadingEnd=new Date();
targetLoadingEnd.setHours(targetLoadingEnd.getHours()+12);
var lastMovementTs=Date.now()
var offline=false;

function pageLoaded()
{
	for(i=level+1;i<=maxLevel;i++)
		document.getElementById("level"+i).style="display: none";
	document.getElementById("gameOver").style="display: none";
	document.getElementById("personalInfo").addEventListener("contextmenu", function(evt){ evt.preventDefault(); }, false);
	document.addEventListener("copy", function(evt){ evt.clipboardData.setData("text/plain", "SPAAAAAACE!");evt.preventDefault();}, false);
	setInterval(animate,1000);
	//fill info
	document.getElementById("infoName").innerHTML=name;
	document.getElementById("infoSurname").innerHTML=surname;
	document.getElementById("infoBirthDay").innerHTML=(birthDay<10?"0":"")+birthDay;;
	document.getElementById("infoBirthMonth").innerHTML=(birthMonth<10?"0":"")+birthMonth;
	document.getElementById("infoBirthYear").innerHTML=birthYear;
	document.getElementById("infoCountry").innerHTML=country;
	document.getElementById("infoCity").innerHTML=city;
	document.getElementById("infoZipCode").innerHTML=zipCode;
	document.getElementById("infoPhone").innerHTML=phone;
	document.getElementById("infoEmail").innerHTML=email;
	for(el of ["level0","level12"])
	{
		if(el=="level0")
			opacity=0.5;
		else
			opacity=1.0;
		//generate random stars
		var navWidth=document.getElementById("personalInfo").offsetWidth;
		for(size=1;size<4;size++)
		{
			var star = document.createElement('div');
			var style="position: absolute; width: "+size+"px; height: "+size+"px; background: transparent; box-shadow: ";
			for(s=0;s<1000;s++)
			{		
				var x=rand(navWidth,window.innerWidth);
				var y=rand(-450,2000);
			    style+=""+x+"px "+y+"px rgba(255, 255, 255, "+opacity+"), ";
			}
			style=style.substring(0,style.length-2)
			style+="; animation: animStar "+50*size+"s linear infinite;";
			star.style=style;
			document.getElementById(el).appendChild(star);
		}
	}
	//TODO DEBUG
	for(l=0;l<0;l++)
		levelUp();
}
function levelUp()
{
	document.getElementById("level"+level++).style="display: none";
	if(seatsLeft<=0)
	{
		document.getElementById("gameOver").style="display: block";
		document.getElementById('progressButtons').style.display='none';
		return;
	}
	document.getElementById("level"+level).style="display: block";
	//mostra i bottoni
	document.getElementById('progressButtons').style.display='block';
	if(level==1)
	{
		//anno
		for(i=1800;i<2021;i++)
		{
			var opt = document.createElement('option');
		    opt.value = i;
		    opt.innerHTML = "&zwnj;"+i;
		    document.getElementById("birthYear").appendChild(opt);
		}
		//giorno
		document.getElementById('birthDay').addEventListener('keydown', function(e){ e.preventDefault(); return false;});
		//mese
		document.getElementById('birthMonth').addEventListener('keydown', function(e){ if(e.keyCode<58 && e.keyCode>47){e.preventDefault(); return false;}});
		//stars nel title
		for(size=1;size<4;size++)
		{
			var star = document.createElement('div');
			var style="position: absolute; width: "+size+"px; height: "+size+"px; background: transparent; box-shadow: ";
			for(s=0;s<100;s++)
			{		
				var x=rand(-window.innerWidth,window.innerWidth*2);
				var y=rand(-100,0);
			    style+=""+x+"px "+y+"px #FFF, ";
			}
			style=style.substring(0,style.length-2)
			style+="; animation: scrollStar "+50*size+"s linear infinite;";
			star.style=style;
			document.getElementById("header").appendChild(star);
		}
	}
	else if(level==2)
	{
		animations['loading']=setInterval(loading,30);
		loadingProgress=0;
		var canvas=document.getElementById("loadingScreen1");
		canvas.addEventListener("mousemove",mossoMouse);
		canvas.addEventListener("mouseup",rilasciatoMouse);
		document.getElementById('progressButtons').style.display='none';
	}
	else if(level==3)
	{
		clearInterval(animations['loading']);
		//country
		for(i=0;i<countries.length;i++)
		{
			var opt = document.createElement('option');
		    opt.value = countries[i];
		    opt.innerHTML = "&zwnj;"+countries[i];
		    document.getElementById("country").appendChild(opt);
		}
		//City
		for(i=0;i<26;i++)
		{
			for(j=2;j<=5;j++)
			{
				var opt = document.createElement('option');
				opt.value = String.fromCharCode(97+i);
			    opt.innerHTML = "&zwnj;"+String.fromCharCode(97+i);
			    document.getElementById("city"+j).appendChild(opt);
			}
		    var opt = document.createElement('option');
			opt.value = String.fromCharCode(65+i);
		    opt.innerHTML = String.fromCharCode(65+i);
		    document.getElementById("city1").appendChild(opt);
		}
	}
	else if(level==4)
	{
		animations['loading']=setInterval(loading,30);
		loadingProgress=0;
		var canvas=document.getElementById("loadingScreen2");
		canvas.addEventListener("mousemove",mossoMouse);
		canvas.addEventListener("mousedown",cliccatoMouse);
		canvas.addEventListener("mouseup",rilasciatoMouse);
		document.getElementById('progressButtons').style.display='none';
	}
	else if(level==5)
	{
		clearInterval(animations['loading']);
		document.getElementById("confirmPasswordBox").style.display= "none";
		document.getElementById("submitPasswordButton").addEventListener("mouseover", function(evt){ document.getElementById("confirmPasswordBox").style.display="block"; });
		document.getElementById("level5").addEventListener('paste', (event) => {event.preventDefault();	});
		document.getElementById('chosenUsername').addEventListener('keyup',liveLoginCheck);
		document.getElementById('chosenUsername').addEventListener('keydown', function(e){ if(e.keyCode!=8 && e.keyCode!=46 && (e.keyCode<65 || e.keyCode>90)){e.preventDefault(); return false;}});
		document.getElementById('chosenPassword').addEventListener('keyup',liveLoginCheck);
		//nascondi i bottoni (per mostrare quelli finti)
		document.getElementById('progressButtons').style.display='none';
	}
	else if(level==6)
	{
		animations['loading']=setInterval(loading,30);
		loadingProgress=0;
		document.getElementById('allPage').addEventListener("mousemove",mossoMouse);
		document.getElementById('allPage').addEventListener("mousedown",cliccatoMouse);
		document.getElementById('allPage').addEventListener("mouseup",rilasciatoMouse);
		document.getElementById('allPage').addEventListener("mouseout",sparitoMouse);
		document.getElementById('progressButtons').style.display='none';
	}
	else if(level==7)
	{
		//remove old event listener
		clearInterval(animations['loading']);
		document.getElementById('allPage').removeEventListener("mousemove",mossoMouse);
		document.getElementById('allPage').removeEventListener("mousedown",cliccatoMouse);
		document.getElementById('allPage').removeEventListener("mouseup",rilasciatoMouse);
		document.getElementById('allPage').removeEventListener("mouseout",sparitoMouse);
		//phoneDigits
		for(i=0;i<10;i++)
		{
			phoneDigits[i]={};
			phoneDigits[i].y=window.scrollY + document.querySelector('#phoneButton'+i).getBoundingClientRect().top // Y
			phoneDigits[i].x=window.scrollX + document.querySelector('#phoneButton'+i).getBoundingClientRect().left // X
		}
		for(i=0;i<10;i++)
			document.getElementById("phoneButton"+i).style="position: absolute; left: "+phoneDigits[i].x+"px; top: "+phoneDigits[i].y+"px;";
		//agreements
		document.getElementById('agreement1').addEventListener('click',function(){
			document.getElementById('agreement2').checked = true;
			document.getElementById('agreement3').checked = true;
			document.getElementById('agreement4').checked = true;
		});
		document.getElementById('mailName').addEventListener('keydown', function(e){ this.style="background-color: 'white';"; this.style.color='white';} );
		document.getElementById('mailDomain').addEventListener('keydown', function(e){ this.style="background-color: 'white';"; this.style.color='white';} );
		document.getElementById('mailCountry').addEventListener('keydown', function(e){ this.style="background-color: 'white';"; this.style.color='white';} );
	}
	else if(level==8)
	{
		animations['loading']=setInterval(loading,30);
		loadingProgress=0;
		var canvas=document.getElementById("loadingScreen4");
		canvas.addEventListener("mousemove",mossoMouse);
		canvas.addEventListener("mouseup",rilasciatoMouse);
		document.getElementById('progressButtons').style.display='none';
	}
	else if(level==9)
	{
		clearInterval(animations['loading']);
		animations['age']=setInterval(progressAge,80);
		animations['alphabet']=setInterval(progressLetters,200);
		//fill periodic table
		var elements=["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd"];
		for(i=0;i<elements.length;i++)
		{
			document.getElementById('periodicTable').innerHTML+="<input onmouseover='this.checked=!this.checked' type='checkbox' id='element"+i+"' /><span id='label_element"+i+"'>"+elements[i]+"</span>";
			if((i+1)%12==0)
				document.getElementById('periodicTable').innerHTML+="<br>";
		}
		document.getElementById('level9').addEventListener('keydown', function(e){ if(e.keyCode==9 || e.keyCode==32 || e.keyCode==13){e.preventDefault(); return false;}});
		document.getElementById('level9').addEventListener("mousemove",mossoMouse);
		document.getElementById("level9").addEventListener("contextmenu", sparitoMouse);
		window.addEventListener("blur",sparitoMouse);
		document.getElementById('progressButtons').style.display='none';
	}
	else if(level==10)
	{
		//unload old interval
		clearInterval(animations['age']);
		clearInterval(animations['alphabet']);
		//loading con AD
		animations['loading']=setInterval(loading,30);
		loadingProgress=0;
		var canvas=document.getElementById("loadingScreen5");
		canvas.addEventListener("mousemove",mossoMouse);
		canvas.addEventListener("mouseup",rilasciatoMouse);
		document.getElementById('progressButtons').style.display='none';
	}
	else if(level==11)
	{
		clearInterval(animations['loading']);
		document.getElementById('progressButtons').style.display='none';
	}
	else if(level==12)
	{
		document.getElementById('progressButtons').style.display='none';
		setTimeout(checkFlashError,10);
	}
}
function checkFlashError()
{
	//console.log(document.getElementById('beforeFlash').getBoundingClientRect().top,document.getElementById('afterFlash').getBoundingClientRect().top);
	//missing "Flash Unsupported" error.
	if(document.getElementById('afterFlash').getBoundingClientRect().top-document.getElementById('beforeFlash').getBoundingClientRect().top<10)
	{
		document.getElementById("flashErrorFallback").style="display: block";
		//document.title="SIGH!";
	}
}
function progressAge()
{
	var currAge=document.getElementById("age").value*1;
	if(currAge++>200)
		currAge=1;
	document.getElementById("age").value=currAge;
}
function progressLetters(insert)
{
	var alphabet="abcdefghijklmnopqrstuvwxyz";
	if(insert)
	{
		document.getElementById('zodiacSign').value+=alphabet[currentLetter];
		return;
	}
	if(++currentLetter>=alphabet.length)
		currentLetter=0;
	alphabet=alphabet.replace(alphabet[currentLetter],alphabet[currentLetter].toUpperCase());
	document.getElementById('alphabet').innerHTML=alphabet;
}
function loading()
{
	canvas = document.getElementById("loadingScreen"+(level/2));
	loadingProgress+=0.0005;
	if(loadingProgress>100)
	{
		loadingProgress=100;
		clearInterval(animations['loading']);
		document.getElementById('progressButtons').style.display='block';
	}
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, 400, 400);
	if(level==2)
	{
		loadingProgress+=0.9995;
		ctx.fillStyle="#FFF";
	    ctx.textAlign = "center";
	    ctx.font = "40px San Serif";
	    ctx.fillText("LOADING...",200,200);
	    ctx.fillText((Math.floor(loadingProgress))+"%",200,250);
	    ctx.fillRect(10,320,380,40);
	    ctx.fillStyle="#000";
	    ctx.fillRect(12+376*(loadingProgress/101),322,376*(1-loadingProgress/101),36);
	}
	//shy loader
	else if(level==6)
	{
		barX=canvas.offsetLeft;
		barY=310+canvas.offsetTop
		document.getElementById('loadingScreen3').style.cursor = "default";
		//check if inside the bar
		if(mousey>barY && mousey<barY+40 && mousex>barX && mousex<barX+400)
		{
			document.getElementById('loadingScreen3').style.cursor = "pointer";
			if(dragging && mousex<barX+loaderPosition && ++loadingProgress>100)
			{
				loadingProgress=100;
				clearInterval(animations['loading']);
				document.getElementById('progressButtons').style.display='block';
			}
			else if(!dragging)
			{
				loadingProgress-=1.5;
			}				
			else loadingProgress-=0.0005;	
		}			
		else if(Date.now()-lastMovementTs<2000)
		{
			loadingProgress-=0.0005;	
		}
		else
		{
			loadingProgress+=0.0095;
		}
		//check if it is moving
		if(distanceFrom(mousex,mousey,oldMousex,oldMousey)>3)
		{
			lastMovementTs=Date.now();
		}
		oldMousex=mousex;
    	oldMousey=mousey;
		//caps
		if(loadingProgress>100)
			loadingProgress=100;
		else if(loadingProgress<0)
			loadingProgress=0;
		loaderPosition=376*(loadingProgress/100);
		ctx.fillStyle="#FFF";
	    ctx.textAlign = "center";
	    ctx.font = "40px San Serif";
	    ctx.fillText("LOADING...",200,200);
	    ctx.fillText((Math.round(loadingProgress*100)/100)+"%",200,250);
	    ctx.fillRect(10,320,380,40);
	    ctx.fillStyle="#000";
	    ctx.fillRect(12+loaderPosition,322,376*(1-loadingProgress/101),36);
	    //eyes
	    ctx.strokeStyle="#000";
	    ctx.lineWidth = 1;
	    ctx.beginPath();
		ctx.arc(2+loaderPosition,330,5,0,7);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(2+loaderPosition,350,5,0,7);
		ctx.stroke();
		//eyebrows
		ctx.beginPath();
		ctx.arc(loaderPosition-4,331,5,Math.PI/2+0.2,-Math.PI/2);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(loaderPosition-4,349,5,Math.PI/2+0.5,-Math.PI/2);
		ctx.stroke();

		//qualche frame fagli chiudere gli occhi
		if(Date.now()%2000<100)
			ctx.lineWidth = 7;
		else
			ctx.lineWidth = 3;
	    ctx.beginPath();
		ctx.arc(2+loaderPosition,330,1,0,7);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(2+loaderPosition,350,1,0,7);
		ctx.stroke();

	}
	//go offline
	else if(level==10)
	{
		if((loadingProgress+=1.9995) > 100)
		{
			loadingProgress=100;
			if(checkInternet())
				document.getElementById('modalAD').style.display='block';
		}			
		ctx.fillStyle="#FFF";
	    ctx.textAlign = "center";
	    ctx.font = "25px San Serif";
	    ctx.fillText("DOWNLOADING THE NEXT AD...",200,200);
	    ctx.fillText((Math.floor(loadingProgress))+"%",200,250);
	    ctx.fillRect(10,320,380,40);
	    ctx.fillStyle="#000";
	    ctx.fillRect(12+376*(loadingProgress/101),322,376*(1-loadingProgress/100),36);
	}
	//cambia la data
	else if(level==8)
	{
		var diff=(targetLoadingEnd - new Date()) / 1000;
		var h=Math.floor(diff/(60*60));
		var m=Math.floor(diff/(60))-h*60;
		var s=Math.floor(diff-m*60-h*60*60);
		loadingProgress=100-100*diff/(12*60*60);
		ctx.fillStyle="#FFF";
	    ctx.textAlign = "center";
	    ctx.font = "40px San Serif";
	    ctx.fillText("LOADING...",200,200);
	    ctx.fillText((Math.round(loadingProgress*100)/100)+"%",200,250);
	    ctx.fillRect(10,320,380,40);
	    ctx.font = "20px San Serif";
	    ctx.textAlign = "left";
	    ctx.fillText("Elapsed: "+h+"h, "+m+"m and "+s+"s",20,390);
	    ctx.fillStyle="#000";
	    ctx.fillRect(12+376*(loadingProgress/101),322,376*(1-loadingProgress/101),36);
	}
	//cerchio da girare clockwise
	else if(level==4)
	{
		ctx.fillStyle="#FFF";
	    ctx.textAlign = "center";
	    ctx.font = "30px San Serif";
	    ctx.fillText("Loading: "+(Math.round(loadingProgress*100)/100)+"%",200,200);
	    ctx.strokeStyle="#FFF";
	    ctx.lineWidth = 35;
	    ctx.lineCap = 'round';
	    ctx.beginPath();
		ctx.arc(200,200,150,(loadingProgress*0.4)*Math.PI,(loadingProgress*0.4+1.7)*Math.PI);
		ctx.stroke();
		var dragFactor=0.01;
		if(dragging)
		{
			dragFactor*=distanceFrom(mousex,mousey,oldMousex,oldMousey);
			if(mousex<200 && mousey<200)
			{
				if(oldMousex<mousex && oldMousey>mousey)
					loadingProgress+=dragFactor;
				else if(oldMousex>mousex && oldMousey<mousey)
					loadingProgress-=dragFactor;
			}
			else if(mousex>200 && mousey<200)
			{
				if(oldMousex<mousex && oldMousey<mousey)
					loadingProgress+=dragFactor;
				else if(oldMousex>mousex && oldMousey>mousey)
					loadingProgress-=dragFactor;
			}
			else if(mousex>200 && mousey>200)
			{
				if(oldMousex>mousex && oldMousey<mousey)
					loadingProgress+=dragFactor;
				else if(oldMousex<mousex && oldMousey>mousey)
					loadingProgress-=dragFactor;
			}
			else if(mousex<200 && mousey>200)
			{
				if(oldMousex>mousex && oldMousey>mousey)
					loadingProgress+=dragFactor;
				else if(oldMousex<mousex && oldMousey<mousey)
					loadingProgress-=dragFactor;
			}
			oldMousex=mousex;
			oldMousey=mousey;
		}
	}
}
function closeAd()
{
	document.getElementById('modalAD').style.display='none';
	loadingProgress=0;
	animations['loading']=setInterval(loading,30);
	document.getElementById('progressButtons').style.display='none';
}
function cliccatoMouse(evt)
{
    dragging=true;
    var rect = this.getBoundingClientRect();
    mousex=(evt.clientX-rect.left)/(rect.right-rect.left)*400;
    mousey=(evt.clientY-rect.top)/(rect.bottom-rect.top)*400;
}
function mossoMouse(evt)
{
    var rect = this.getBoundingClientRect();
    mousex=(evt.clientX-rect.left)/(rect.right-rect.left)*rect.width;
    mousey=(evt.clientY-rect.top)/(rect.bottom-rect.top)*rect.height;
    if(level==4)
    {
    	if(distanceFrom(mousex,mousey,200,200)<160)
    		document.getElementById('loadingScreen2').style.cursor = "pointer";
	    else 
	    	document.getElementById('loadingScreen2').style.cursor = "default";
    }
    else if(level==9)
    {
    	mousex+=rect.left;
    	mousey+=rect.top;
    	//console.log(mousex,mousey,"|",periodicTable.left,periodicTable.top,"?",periodicTable.left+periodicTable.width,periodicTable.top+periodicTable.height);
    	diffx=(oldMousex==-1)?0:mousex-oldMousex;
    	diffy=(oldMousey==-1)?0:mousey-oldMousey;
    	for(i=0;i<10;i++)
	    	if(onPeriodicTableBorder(mousex-diffx*i/10,mousey-diffy*i/10))
	    	{
	    		for(j=0;j<60;j++)
	    			document.getElementById('element'+j).checked=false;
	    		i=10;
	    	}    		
		oldMousex=mousex;
    	oldMousey=mousey;
    	clearInterval(animations['idling']);
    	animations['idling']=setTimeout(function() {oldMousex=oldMousey=mousex=mousey=-1;},800);
    }
}
function sparitoMouse(evt)
{
    oldMousex=oldMousey=mousex=mousey=-1;
    setTimeout(function() {oldMousex=oldMousey=mousex=mousey=-1;},200);
}
function onPeriodicTableBorder(mx,my)
{
	var periodicTable=document.getElementById('periodicTable').getBoundingClientRect();
	if(mx>periodicTable.left 
    	&& mx<periodicTable.left+periodicTable.width
    	&& my>periodicTable.top 
    	&& my<periodicTable.top+periodicTable.height
    		&& (mx<periodicTable.left+50		
    		|| mx>periodicTable.left+periodicTable.width-50
    		|| my<periodicTable.top+50
    		|| my>periodicTable.top+periodicTable.height-50)
    	)
    	return true;
}
function rilasciatoMouse(evt)
{
    dragging=false;    
}
function distanceFrom(ax,ay,bx,by)
{
    return Math.sqrt((ax-bx)*(ax-bx)+(ay-by)*(ay-by));
}
function animate()
{
	secondsPassed++;
	seatsLeft=Math.floor(seatsLeft-=rand(1,10))
	if(seatsLeft<0)
		seatsLeft=0;
	document.getElementById("seatsLeft").innerHTML=seatsLeft;
}
//a seconda del livello, pulisci il form //TODO
function cancel()
{	
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
	else if(level==3)
	{
		document.getElementById("country").selectedIndex="";
		document.getElementById("country").style="background-color: white";
		for(j=1;j<=5;j++)
		{
		    document.getElementById("city"+j).selectedIndex="";
		    document.getElementById("city"+j).style="background-color: white";
		}
		binaryEdit('zipCode','R');
		document.getElementById("zipCode").style="background-color: white";
	}
	else if(level==5)
	{
		document.getElementById('chosenUsername').value="";
		document.getElementById('chosenUsername').style="background-color: white";
		document.getElementById('chosenPassword').value="";
		document.getElementById('chosenPassword').style="background-color: white";
		document.getElementById('passwordConfirm').value="";
		document.getElementById('passwordConfirm').style="background-color: white";
		document.getElementById('usernameLength').style="color: white";
		document.getElementById('usernameCharacters').style="color: white";
		document.getElementById('passwordMinLength').style="color: white";
		document.getElementById('passwordMaxLength').style="color: white";
		document.getElementById('passwordComplexity').style="color: white";
		document.getElementById('passwordUsernameCharacters').style="color: white";
		document.getElementById('passwordForbiddenCharacters').style="color: white";
	}
	else if(level==7)
	{
		document.getElementById('phone').value="";
		document.getElementById('phone').style="background-color: white";
		for(i=0;i<10;i++)
			document.getElementById("phoneButton"+i).innerHTML=i;
		document.getElementById('mailName').value="";
		document.getElementById('mailName').style="background-color: white";
		document.getElementById('mailDomain').value="";
		document.getElementById('mailDomain').style="background-color: white";
		document.getElementById('mailCountry').value="";
		document.getElementById('mailCountry').style="background-color: white";
		document.getElementById('agreement1').checked = false;
		document.getElementById('agreement2').checked = false;
		document.getElementById('agreement3').checked = false;
		document.getElementById('agreement4').checked = false;
	}
	else if(level==9)
	{
		document.getElementById('age').value="0";
		document.getElementById('age').style="background-color: white";
		document.getElementById('zodiacSign').value="";
		document.getElementById('zodiacSign').style="background-color: white";
		for(i=0;i<60;i++)
		{
			document.getElementById("element"+i).checked=false;
			document.getElementById("label_element"+i).style="color: white;";
		}
	}
	else if(level==11)
	{
		document.getElementById('username').value="";
		document.getElementById('username').style="background-color: white";
		document.getElementById('password').value="";
		document.getElementById('password').style="background-color: white";
	}
}
//a seconda del livello, controlla che i dati inseriti siano corretti //TODO
function submit()
{
	var nErrors=0;
	if(level==1)
	{
		nErrors+=checkElement('name',name);
		nErrors+=checkElement('surname',surname);
		nErrors+=checkElement('birthDay',birthDay);
		nErrors+=checkElement('birthMonth',birthMonthString);
		nErrors+=checkElement('birthYear',birthYear);
	}
	else if(level==3)
	{
		nErrors+=checkElement('country',country);
		for(j=1;j<=5;j++)
		{
		    nErrors+=checkElement('city'+j,city[j-1]);
		}
		nErrors+=checkElement('zipCode',zipCode);
	}
	else if(level==5)
	{
		nErrors+=liveLoginCheck();
		nErrors+=checkElement('passwordConfirm',document.getElementById("chosenPassword").value);
	}
	else if(level==7)
	{
		nErrors+=checkElement('phone',phone);
		nErrors+=checkElement('mailName',emailName);
		nErrors+=checkElement('mailDomain',emailDomain);
		nErrors+=checkElement('mailCountry',emailCountry);
		if(!document.getElementById('agreement1').checked)
			nErrors++;
		if(!document.getElementById('agreement2').checked)
			nErrors++;
		if(document.getElementById('agreement3').checked)
			nErrors++;
		var evenMinutes=(new Date().getMinutes()%2==0);
		if(document.getElementById('agreement4').checked && evenMinutes)
		{
			nErrors++;
		}
		else if(!document.getElementById('agreement4').checked && !evenMinutes)
		{
			nErrors++;
		}
	}
	else if(level==9)
	{
		nErrors+=checkElement('age',age);
		nErrors+=checkElement('zodiacSign',zodiacSign);
		for(i=0;i<60;i++)
			if(!document.getElementById("element"+i).checked)
			{
				document.getElementById("label_element"+i).style="color: red;";
				nErrors++;
			}
			else document.getElementById("label_element"+i).style="color: white;";
	}
	else if(level==10)
	{
		if(checkInternet())
		{
			console.log("Nice try!");
			nErrors++;
		}			
	}
	else if(level==11)
	{
		nErrors+=checkElement('username',username);
		nErrors+=checkElement('password',password);
	}
	//loading screens
	else if(level%2==0)
	{
		nErrors=0;
	}
	if(!nErrors)
		levelUp();
}
function checkElement(name,value)
{
	if(value!=document.getElementById(name).value)
	{
		document.getElementById(name).style="background-color: red;";
		return 1;
	}
	else
	{
		document.getElementById(name).style="background-color: white;";
		return 0;
	}
}
function binaryEdit(name,operator)
{
	var min=document.getElementById(name+"Min").value*1;
	var max=document.getElementById(name+"Max").value*1;
	var current=document.getElementById(name).value*1;
	if(operator=="R")
	{
		document.getElementById(name).value=50000;
		document.getElementById(name+"Min").value=0;
		document.getElementById(name+"Max").value=99999;
	}
	else if(operator=="+")
	{
		document.getElementById(name+"Min").value=current+1;
		document.getElementById(name).value=Math.floor((current+1+max)/2);
	}
	else if(operator=="-")
	{
		document.getElementById(name+"Max").value=current-1;
		document.getElementById(name).value=Math.floor((current-1+min)/2);
	}
}
function liveLoginCheck()
{
	var nWrong=0;
	var near=[];
	near["q"]="qwsa";
	near["w"]="wqasde";
	near["e"]="ewsdfr";
	near["r"]="redfgt";
	near["t"]="trfghy";
	near["y"]="ytghju";
	near["u"]="uyhjki";
	near["i"]="iujklo";
	near["o"]="oiklp";
	near["p"]="pol";
	near["a"]="aqwsxz";
	near["s"]="sqwedcxza";
	near["d"]="dwsxcvfre";
	near["f"]="fertgvbcd";
	near["g"]="grtyhnbvf";
	near["h"]="htgbnmjuy";
	near["j"]="jyuikmnhy";
	near["k"]="kuioljm";
	near["l"]="loik";
	near["z"]="zasx";
	near["x"]="xzasdc";
	near["c"]="cxsdfv";
	near["v"]="vcdfgb";
	near["b"]="bvfghn";
	near["n"]="nbghjm";
	near["m"]="mnhjk";

	username=document.getElementById("chosenUsername").value.toLowerCase();
	password=document.getElementById("chosenPassword").value;
	if(username.length<10)
	{
		document.getElementById('usernameLength').style.color="red";
		nWrong++;
	}		
	else
		document.getElementById('usernameLength').style.color="green";
	document.getElementById('usernameCharacters').style.color="green";
	for(i=0;i<username.length-1;i++)
	{
		if(near[username[i]].includes(username[i+1]))
		{
			document.getElementById('usernameCharacters').style.color="red";
			nWrong++;
		}
	}
	if(password.length<10)
	{
		document.getElementById('passwordMinLength').style.color="red";
		nWrong++;
	}
	else document.getElementById('passwordMinLength').style.color="green";

	if(password.length>15)
	{
		document.getElementById('passwordMaxLength').style.color="red";
		nWrong++;
	}
	else document.getElementById('passwordMaxLength').style.color="green";

	//check for complexity
	var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
	if(!pattern.test(password))
	{
		document.getElementById('passwordComplexity').style.color="red";
		nWrong++;
	}
	else document.getElementById('passwordComplexity').style.color="green";
	
	document.getElementById('passwordUsernameCharacters').style.color="green";
	document.getElementById('passwordForbiddenCharacters').style.color="green";
	for(i=0;i<password.length;i++)
	{
		if("1-!?".includes(password[i]))
		{
			document.getElementById('passwordForbiddenCharacters').style.color="red";
			nWrong++;
		}
		if(username.includes(password[i].toLowerCase()))
		{
			document.getElementById('passwordUsernameCharacters').style.color="red";
			nWrong++;
		}
	}
	return nWrong;
}
function insertPhone(digit)
{
	if(digit=="←")
	{
		document.getElementById("phone").value=document.getElementById("phone").value.substring(0,document.getElementById("phone").value.length-1);
		return;
	}
	//se sto facendo l'animazione, non faccio nulla
	if(cooldown)
		return;
	//document.getElementById("phoneButton"+digit).style.display = 'none';
	document.getElementById("phone").value=document.getElementById("phone").value+digit;
	document.getElementById("phoneButton"+digit).style.top = '-9999px';
	for(i=0;i<10;i++)
	{
		document.getElementById("phoneButton"+i).innerHTML=i;
		var a=rand(0,9);
		var b=rand(0,9);
		tmp=phoneDigits[a].x;
		phoneDigits[a].x=phoneDigits[b].x;
		phoneDigits[b].x=tmp;
	}
	cooldown=true;
	setTimeout(function(){
		for(i=0;i<10;i++)
		{
			document.getElementById("phoneButton"+i).style="position: absolute; left: "+phoneDigits[i].x+"px; top: "+phoneDigits[i].y+"px;";
			document.getElementById("phoneButton"+i).innerHTML="?";
		}
		setTimeout(function(){ cooldown=false; },4000);
	},2000);
}
function getZodiac(month, day){
	var datecode = month*100 + day; //this will give us a number represent month and day
	if (datecode <= 120)
		return "capricorn";
	else if (datecode <= 219) 
		return "aquarius";
	else if (datecode <= 320) 
		return "pisces";
	else if (datecode <= 420) 
		return "aries";
	else if (datecode <= 520) 
		return "taurus";
	else if (datecode <= 621) 
		return "gemini";
	else if (datecode <= 722) 
		return "cancer";
	else if (datecode <= 822) 	                            
		return "leo";
	else if (datecode <= 921) 
		return "virgo";
	else if (datecode <= 1022) 
		return "libra";
	else if (datecode <= 1121) 
		return "scorpio";
	else if (datecode <= 1221) 
		return "sagittarius";
	else
		return "capricorn";
	
}
function checkInternet()
{

	if(navigator.onLine===false)
	{
		offline=true;
		return !offline;
	}
	//remote call
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() { if (this.readyState == 4 && this.status != 200) offline=true;};
	xhttp.open("GET", location.href, true);
	xhttp.send();
	return !offline;
}
function rand(da, a)
{
    if(da>a) return rand(a,da);
    a=a+1;
    return Math.floor(Math.random()*(a-da)+da);
}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toGMTString();
    } else var expires = '';
    document.cookie = name + '=' + value + expires + '; path=/';
}