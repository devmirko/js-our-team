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

 let insertCardbool = false; 

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
    if (!insertCardbool) {
        newImg.src = "img/" + member.image;
    } else {
        newImg.src = member.image;
    }
      //alt per l'immagine
      newImg.alt = member.name

    //aggiungi gli elementi uno dentro l'altro
    boxImg.append(newImg);
    newCard.append(boxImg);

   return newCard;
    
}