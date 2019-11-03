const API_BASE = "https://api.openweathermap.org/data/2.5/weather?appid=1a1d407938fca6534baedfdbfcc31a22&units=metric&lang=cz" //založím si konstantu, ve které je ta část adresy, která se nikdy nebude měnit, za ni už budu přidávat jen další parametry, které mě budou zajímat

function ziskejPocasi(mesto) {
    fetch (API_BASE + `&q=${mesto},cz`)
    .then (response => response.json()) //je to anonymní arrow fce; nad odpovědí proveď metodu json, tzn. chci dekódovat data; return je proto, že ta data potřebuji vrátit (vypsat); dekódování může trvat relativně dlouho -> z tohoto dostanu zase jen promise, že data dostanu, až se to stáhne
    .then (
        function (data) {
            zobrazPocasi(data); //každá fce by měla dělat jen jednu věc, ne aby zároveň načítala data i je zobrazovala, proto jsem smazala to console.log, ale zavolala fci,která mi zobrazí počasí; tu si vytvořím na konci; v současnosti se razí princip, aby se psalo spíš více malých a jasných funkcí
        }
    ) //fce, která přijme data jako parametr; teď už mi přijdou opravdová data, tedy dekódované tělo odpovědi serveru
    // vždy to musím zpracovat ve dvou krocích viz výše; oba se vrátí mimo pořadí programu
    .catch (
        function (error) {
            console.log ("chyba");
            console.log (error);
        }               //zachytí chybu v jakékoli fázi řetězce a pak mi ji vrátí
    )
}

function zobrazPocasi (data) {
    console.log (data);
    console.log (`Město: ${data.name}`); //do konzole se vypíše stisknuté Město
    console.log (`Aktuální teplota: ${data.main.temp}`); //v objektu data je objekt main a v něm objekt temp - vypíše mi to do konzole teplotu v daném městě
    console.log (`Východ slunce: ${ziskejCas(data.sys.sunrise)}`);  //kdybych chtěla jen unixový čas, tak tam nemusím psát fci ziskejCas
    console.log (`Západ slunce: ${ziskejCas(data.sys.sunset)}`);
}

function ziskejCas (unixTimestamp) {
    let datum = new Date(unixTimestamp * 1000);
    //objekt "date" v javascriptu, který má spoustu metod; nové datum získám založením nové proměnné a k ní přiřazením "new Date(value)" (bez value by to bylo aktuální datum a čas), parametr value může být různý
    let hodiny = datum.getHours();
    let minuty = datum.getMinutes();    //protože mě nezajímá celé datum, ale jen čas
    return `${hodiny}:${minuty}`;
}

/* 
.finally (
    function () {
        console.log ("a to je konec, přátelé");
    }
)
 */

