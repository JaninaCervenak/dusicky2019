ziskejData();

function ziskejData (film) {
    fetch ("https://swapi.co/api/films")
    .then ( response => response.json())
    .then ( data => zobrazFilmy(data))
    .catch (error => console.log (error));
}

function zobrazFilmy (data) { 
    console.log (data.results); //zobrazí mi jen všechny filmy

    let filmy = data.results        //nové pole filmy z původního data.results
    .map (film => {     //přemapuju pole tak, abych měla jen název, epizodu a rok uvedení do kin
        return {
            nazev: film.title,
            epizoda: film.episode_id,
            datum: film.release_date
        }
    })
    .sort ((film1, film2) => {      //seřadí mi podle roku uvedení
        if (film1.datum < film2.datum) {
            return -1;
        } else if (film2.datum < film1.datum) {
            return 1;
        } else {
            return 0;
        }
    })
    .filter ( film => film.epizoda >= 4 && film.epizoda <= 6);  //vypíše mi jen tři nejstarší a nejlepší filmy :-) a bylo by lepší nejdřív použít .filter a až pak .sort

    console.table(filmy);   //vypíše mi nové, přemapované pole
}
