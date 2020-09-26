const library = require("./library");

//Funcion getListCivilization() devuelve la lista de todas las civilizaciones. 

library.getListCivilization().then((civs) => {
        civs.civilizations.forEach(civ => {
        var civilization = 'Civilization: ' + civ.name;
        var army = 'Army Type: ' + civ.army_type;
        var expansion = 'Expansion: ' + civ.expansion;
        var team = 'Team Bonus: ' + civ.team_bonus;
        console.log(civilization + '\n' + army + '\n' + expansion + '\n' + team + '\n');
    })
}).catch((e)=>{
    console.log("Error: "+ e);
});

//Funcion getCivilization({id}) devuelve la civilizacion indicada en el id, donde {id} 
//puede ser el numero de id de la Civilizacion o el nombre de la misma.

library.getCivilization('3').then((civ) => {
    console.log(
        'Civilización: ' + civ.name +
        '\nArmy Type: ' + civ.army_type + '\n'
        );
}).catch((e)=>{
    console.log("Error: "+ e);
});