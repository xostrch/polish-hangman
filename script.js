var word = "polski język bardzo trudny";
word = word.toUpperCase();

var dlugosc = word.length;
var incorrect = 0;


var word1 = "";


for(i=0;i<dlugosc;i++)
{
    if(word.charAt(i)==" ") word1 = word1 + " ";
    else word1 = word1 + "-";
}

function wypisz_haslo()
{
    document.getElementById("slowo").innerHTML = word1;
}

window.onload = start;

var litery = new Array(35);
litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="Ń";
litery[19]="O";
litery[20]="Ó";
litery[21]="P";
litery[22]="Q";
litery[23]="R";
litery[24]="S";
litery[25]="Ś";
litery[26]="T";
litery[27]="U";
litery[28]="V";
litery[29]="W";
litery[30]="X";
litery[31]="Y";
litery[32]="Z";
litery[33]="Ź";
litery[34]="Ż";


function start()
{
    var tresc_diva ="";

    for(i=0;i<=34;i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onClick="sprawdz('+i+')" id="'+ element +'">'+litery[i]+'</div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if(miejsce > this.length - 1) return this.toString();
    else return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
    var correct = false;
    
    for(i=0;i<dlugosc;i++)
    {
        if(word.charAt(i) == litery[nr])
        {
            word1 = word1.ustawZnak(i,litery[nr]);
            correct = true;
        }
    }

    if(correct == true)
    {
        var element = "lit" + nr;
        document.getElementById(element).style.backgroundColor="rgb(0, 255, 0, 0.3)";
        document.getElementById(element).style.boxShadow="0px 0px 20px rgb(0, 255, 0)";
        document.getElementById(element).style.color="rgb(0, 255, 0)";
        document.getElementById(element).style.cursor="default";
        
        wypisz_haslo();
    }
    else
    {
        var element = "lit" + nr;
        document.getElementById(element).style.backgroundColor="rgb(255, 0, 0, 0.3)";
        document.getElementById(element).style.boxShadow="0px 0px 20px rgb(255, 0, 0)";
        document.getElementById(element).style.color="rgb(255, 0, 0)";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");

        incorrect++;
        var obraz = "img/w" + incorrect + ".png";
        document.getElementById("obraz").innerHTML = '<img src="'+obraz+'" alt="" />';
    }

    if(word == word1)
    {
        document.getElementById("alfabet").innerHTML = '<div class="won">YOU WON!!!<p id="word">WORD:'+word+
            '</p><span id="again" onclick="location.reload()">TRY AGAIN</span></div>';
        document.getElementById("obraz").innerHTML = '<img src="img/won.png">'
    }

    if(incorrect >= 9)
    document.getElementById("alfabet").innerHTML = '<div class="won">YOU LOSE :((</br><span id="again" onclick="location.reload()">TRY AGAIN</span></div>';
}