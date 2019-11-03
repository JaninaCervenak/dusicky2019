/* Budeme pracovat s tímto polem */

let auta = [
  { vyrobce: 'Renault', model: 'Megane', rokVyroby: 2006, palivo: 'benzín', barva: 'červená', najetoKm: 58795 },
  { vyrobce: 'Škoda', model: 'Octavia', rokVyroby: 2012, palivo: 'nafta', barva: 'zelená', najetoKm: 159734 },
  { vyrobce: 'Ford', model: 'Mondeo', rokVyroby: 2019, palivo: 'benzín', barva: 'černá', najetoKm: 94322 },
  { vyrobce: 'Renault', model: 'Clio', rokVyroby: 2018, palivo: 'nafta', barva: 'bílá', najetoKm: 12985 },
  { vyrobce: 'Škoda', model: 'Fabia', rokVyroby: 2014, palivo: 'benzín', barva: 'černá', najetoKm: 1385 },
  { vyrobce: 'Škoda', model: 'Favorit', rokVyroby: 1987, palivo: 'nafta', barva: 'modrá', najetoKm: 57985 },
  { vyrobce: 'Honda', model: 'Civic', rokVyroby: 2001, palivo: 'lpg', barva: 'bílá', najetoKm: 239785 },
  { vyrobce: 'Tesla', model: 'Model S', rokVyroby: 2018, palivo: 'elektřina', barva: 'červená', najetoKm: 29785 },
  { vyrobce: 'Volkswagen', model: 'Beetle', rokVyroby: 1964, palivo: 'nafta', barva: 'modrá', najetoKm: 167520 },
  { vyrobce: 'Škoda', model: 'Octavia', rokVyroby: 2009, palivo: 'nafta', barva: 'bílá', najetoKm: 75986 },
  { vyrobce: 'Škoda', model: 'Fabia', rokVyroby: 2011, palivo: 'benzín', barva: 'stříbrná', najetoKm: 4289 },
  { vyrobce: 'Volkswagen', model: 'Passat', rokVyroby: 2019, palivo: 'benzín', barva: 'zelená', najetoKm: 34976 },
  { vyrobce: 'Škoda', model: 'Superb', rokVyroby: 2014, palivo: 'nafta', barva: 'bílá', najetoKm: 134687 },
  { vyrobce: 'Audi', model: 'R8', rokVyroby: 2019, palivo: 'lpg', barva: 'černá', najetoKm: 67545 },
];


/*
  ÚKOL:
  - vypiš všechna auta do HTML dovnitř prvku s id="seznam"
  - použij šablonu, která je v komentáři v HTML
  - nepiš kód přímo do hlavního programu, ale používej funkce.
    V hlavním progamu by mělo být pouze volání těchto funkcí.

  BONUS:
  - přidej tlačítko, které seřadí auta podle roku výroby
  - přidej druhé, které je seřadí podle najetých kilometrů

  EXTRA BONUS:
  - vytvoř si v CSS třídy pro barvy aut a jednotlivá auta
    zobraz danou barvou (bílá, černá, stříbrná, červená, zelená
    modrá).
  - jména barev v poli máme česky. V moderních prohlížečích budou
    fungovat i názvy CSS tříd s češtinou, takže pokud si chceš
    zjednodušit život, můžeš to tak udělat
  - ...ALE nám se to nelíbí, takže pokud jsi smířená s tím, že
    život není peříčko a obvykle se člověk musí trochu snažit, tak
    použij názvy CSS tříd bez diakritiky. Budeš pak do programu muset
    přidat testování, aby se použila CSS třída "cervena", když je
    barva "červená"
  - asi se na to dá použít série podmínek, ale mohla bys vymyslet i
    kreativnější řešení
    - místo podmínek např. příkaz switch:
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    - nebo třeba pole, ve kterém můžeš hledat a máš v něm jakousi převodní
      tabulku? Vždy barvu v češtině a k tomu název třídy kterou chceš
      místo toho použít?
    - jiné kreativní řešení?
*/
let seznam = document.querySelector ("#seznam");
let obsah = "";

for (auto of auta) {
  obsah = obsah + `
  <div class="auto">
    <div class="vyrobce">${auto.vyrobce}</div>
    <div class="model">${auto.model}</div>
    <div class="rok">${auto.rokVyroby}</div>
    <div class="barva">${auto.barva}</div>
    <div class="najeto">${auto.najetoKm} km</div>
  </div>`;
}
seznam.innerHTML = obsah;

//to samé pomocí reduce

/* obsah = auta.reduce (
  (soucet, auto) => {
    return soucet + `
      <div class="auto">
        <div class="vyrobce">${auto.vyrobce}</div>
        <div class="model">${auto.model}</div>
        <div class="rok">${auto.rokVyroby}</div>
        <div class="barva">${auto.barva}</div>
        <div class="najeto">${auto.najetoKm} km</div>
      </div>
    `
  },
  ''  //výchozí hodnota není 0 ale mezerník, protože neredukujeme čísla, ale textové řetězce
);
seznam.innerHTML = obsah; */
