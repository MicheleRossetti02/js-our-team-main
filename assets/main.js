/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede */

 
const profile = [
    {

    image: "wayne-barnett-founder-ceo.jpg",
    name : 'Wayne Barnett',
    role : 'Founder & CEO'
},
{
    image: 'angela-caroll-chief-editor.jpg',
    name : 'Angela',
    role : 'Chief Editor'
},
{
    image: 'walter-gordon-office-manager.jpg',
    name : 'Waleter gordon',
    role : 'Chief Editor'
},
{
    image: 'angela-lopez-social-media-manager.jpg',
    name : 'Angela Lopez',
    role : 'Social Media Manager'
},
{
    image: 'scott-estrada-developer.jpg',
    name : 'Scott Estrada',
    role : 'Developer'
},
{
    image: 'barbara-ramos-graphic-designer.jpg',
    name : 'Barbara Ramos',
    role : 'Grafic designer'
}
// {
//     "name": ['Wayne Barnett','Angela','Waleter gordon','Waleter gordon','Scott Estrada','Barbara Ramos']
// }


]


container = document.querySelector('.container')
row= document.querySelector('.row')


for (let i = 0; i < profile.length; i++) {
    const singol_profile = profile[i];
    
    const img_markup = `<img class="image_profile" src="./assets/img/${singol_profile.image}"  alt=""> `
    console.log(img_markup);
    const profile_markup = `
    <div class=" col-3 mx-3 my-4 text-center">
    <div >${img_markup}</div> 
    <div class="singol_profile_name ">${singol_profile.name} </div>
    <div class="singol_profile_role ">${singol_profile.role}</div>
    </div>`

    console.log(profile_markup);
    row.innerHTML += profile_markup
}

// for(let key in profile){
//     // console.log(profile[key]);
    
//      card_profile=`
//     <div class="casella_profile img"> ${profile.name}  </div>

//     ` ;




//     // container.innerHTML += card_profile[key];

//     container.innerHTML += card_profile;
// }




// function name(params) {
//     card_profile=`
//     <div class="casella_profile img"> ${profile.image}  </div>
//     <div class="casella_profile name"> ${profile.name}  </div>
//     <div class="casella_profile role"> ${profile.role}  </div>
//     `
//     ;

//     role_profile=`<div class="casella_profile"> ${profile.image}  </div>`;
//     container.innerHTML += name_profile;
//     container.innerHTML += role_profile;

// img_profile= `<div class="casella_profile"> ${profile.name}  </div>`;




      
// }

//console.log(profile);