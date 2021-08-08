const buttons = document.querySelectorAll('.big-five-button');
const removeFirstButton = document.querySelector('#remove-first-item-button');
const removeAllButton = document.querySelector('#remove-all-button');

const spottedAnimals = document.querySelector('#spotted-animals-list');
const spottedAnimalsListItem = document.querySelectorAll('.spotted-animals-list-item')

//De buttons die de dieren in de spotted animals list doen verschijnen
buttons.forEach(button => {

    button.addEventListener('click', function(event) {
       console.log('Spotted: ', event.target.innerHTML);
       addAnimal()
    });
});


/** Deze for loop doet hetzelfde als de forEach methode hierboven
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        console.log(event.target.innerHTML);
        addAnimal();
});
};
*/

//Functie die een nieuwe li aanmaakt en die de tekst meegeeft die gelijkstaat 
//aan de waarde van de button waarop gedrukt wordt (het dier dus). Ook wordt 
//er een class meegegeven. 
const addAnimal = () => {

    //Creëert een nieuwe list-item
    const listItem = document.createElement('li');
    //Maakt je nieuwe list-item vast aan je unordered list
    spottedAnimals.appendChild(listItem);
    //Slaat de tekst van je button op een in constante
    const animalName = event.target.innerHTML;
    //Geeft je nieuwe list item de tekst die is opgeslagen in de constante
    listItem.innerHTML = animalName;

    //De code hieronder geeft je nieuwe list item ook de tekst die is opgelsagen in de constante
    //newLi.appendChild(document.createTextNode(animalName))

    //Voegt dezelfde class toe als degene die al aanwezig is in je unordered list
    listItem.classList.add('.spotted-animals-list-item');

    //De code hieronder voegt ook dezelfde classlist toe
    //newLi.setAttribute('class', 'spotted-animals-list-item');
};


//Button die het eerste dier uit je lijst verwijdert
removeFirstButton.addEventListener('click', function() {

    const firstElement = spottedAnimals.firstChild;
    firstElement.remove();
});


/**Op deze manier zou je ook het eerste dier kunnen verwijderen:
 * 
 * const removeFirstItem =() => {
 * 
 *      const firstItem = document.getElementById('spotted-animals-list').firstChild;
 *      firstItem.remove();
 * };
 * 
 * removeFirstButton.addEventListener('click', removeFirstItem);
 * 
 */



//Button die in een klap alle dieren uit je lijst verwijdert door de tekst 
//in spottedAnimals gelijk te stellen aan 2 lege strings
removeAllButton.addEventListener('click', function() {

    spottedAnimals.innerHTML = ' ';
});



/**op deze manier zou je ook alle dieren in een keer kunnen verwijderen:
 * 
 * const removeAll = () => {
 * 
 * spottedAnimals.innnerHTML = "";
 * };
 * 
 * removeAllButton.addEventListener('click', removeAll);
 * 
 */