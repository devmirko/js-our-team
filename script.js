//creo l'array di oggetti con tutti i membri 
const card = [
    // {
    //     name : "wayne barnett",
    //     role : "Founder & ceo",
    //     image : "wayne-barnett-founder-ceo.jpg"
    // },

    {
        name : "Angela Caroll",
        role : "Chief Editor",
        image : "angela-caroll-chief-editor.jpg"

    },

    {
        name : "Walter Gordon",
        role : "Office Manager",
        image : "walter-gordon-office-manager.jpg"

    },

    {
        name : "Angela Lopez",
        role : "Social Media Menager",
        image : "angela-lopez-social-media-manager.jpg"

    },

    {
        name : "Scott Estrada",
        role : "Developer",
        image : "scott-estrada-developer.jpg"

    },

    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        image : "barbara-ramos-graphic-designer.jpg"

    },
];

console.log(card);

//variabile con l'inserimento della classe container
const cont = document.querySelector(".team-container");

  

//esegui la funzione
insertCard();
//costruiamo una funzione che crea ttutte le card e le aggiunge al container
function insertCard() {
    for (let i = 0; i < card.length; i++) {
        let newCard = createCard(card[i]);
        //aggiungiamo la card al container
        cont.append(newCard);
        
    }
    
}



//costruiamo una funzione che crea tutti gli elementI html e li lega al dom
function createCard(member) {
    //crea una elemento 
    let newCard = document.createElement('div');
    newCard.classList.add("team-card")

    //crea un contenitore immagine
    let boxImg = document.createElement('div');
    boxImg.classList.add("card-image");

    //crea l'immagine contenuta
    let newImg = document.createElement('img');
    //controllo se l'immagine e nella cartella img
    
    newImg.src = "img/" + member.image;
 
    //alt per l'immagine
    newImg.alt = member.name

    //aggiungi gli elementi uno dentro l'altro
    boxImg.append(newImg);
    newCard.append(boxImg);

    // aggiungi l'elemento card-text
    let cardText = document.createElement('div');
    cardText.classList.add("card-text")
    //aggiungi il nome 
    let name = document.createElement("h3");
    name.innerHTML = member.name;
    //aggiungi il ruolo
    let role = document.createElement("p");
    role.innerHTML = member.role;

    //aggiungi l'elemento p e h3 a card-text
    cardText.append(name);
    cardText.append(role);
    //aggiugni card-text a card
    newCard.append(cardText);


    return newCard;
    
}