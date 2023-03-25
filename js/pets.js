  const petsData = [
    {
      name: "Bambi",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2019,
      photo: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1592285954/inpgn38pejfba6nvrawb.jpg"
    },
    {
      name: "Soleh",
      species: "Cat",
      favFoods: ["wet food", "dry food"],
      birthYear: 2018,
      photo: "https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/25/638085aa254ca-soleh-kucing-yang-diangkat-jadi-pegawai-baru-ditjen-pajak_1265_711.jpg"
    },
    {
      name: "Piki",
      species: "Dog",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2015,
      photo: "https://d1bpj0tv6vfxyp.cloudfront.net/articles/248930_5-1-2021_15-26-51.jpeg"
    },
    {
      name: "Bobby",
      species: "Dog",
      favFoods: ["tuna", "catnip", "Meat"],
      birthYear: 2019,
      photo: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60413826/1/?bust=1678804507&width=667"
    },
    {
      name: "Boo",
      species: "Dog",
      favFoods: ["tuna", "<strong>any</strong> food", "Meat"],
      birthYear: 2015,
      photo: "https://www.peaceofminddogrescue.org/images/dogs/Gnocchi083122sm.jpg?1664737940"
    },
    {
      name: "The Twins",
      species: "Cats",
      favFoods: ["whiskas", "catnip", "fresh fish"],
      birthYear: 2022,
      photo: "https://budidayaternak.id/wp-content/uploads/2018/07/24k-350x270.jpg"
    }
  ];
  
  function age(birthYear) {
    let calculatedAge = new Date().getFullYear() - birthYear;
    if(calculatedAge == 1) {
      return '1 year old'
    } else if (calculatedAge == 0) {
      return 'Baby'
    } else {
      return `${calculatedAge} years old`
    }
  }
  
  function foods(foods) {
    return `
      <h4> Favorite Foods </h4>
      <ul class="foods-list">
        ${foods.map(food => `<li>${food}</li>`).join('')}
      </ul>
    `
  }
  
  function petTemplate(pet) {
    return `
    <div class="animal"> 
     <img class="pet-photo" src="${pet.photo}"> 
     <h2 class="pet-name">${pet.name} 
     <span class="species">(${pet.species})</span></h2>
     <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
      ${pet.favFoods ? foods(pet.favFoods) : ""}
    </div>
    `
  }
  
  document.getElementById("pets").innerHTML = `
  <h1 class="app-title">Pets (${petsData.length} results) </h1>
  ${petsData.map(petTemplate).join("")}
 
  `;