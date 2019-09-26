// API

const API_URL = "http://localhost:3000/api/v1/calorie_entries"

get = (url) => {
    return fetch(url).then(response => response.json()) //.then(data => console.log(data)) //.then(response => response.map(entry => displayNewCalorieIntake(entry)))
}

const API = { get }

// CONSTANTS

const ulCaloriesList = document.querySelector("ul#calories-list")

// FUNCTIONS

getAndRenderCalories = () => {
    API.get(API_URL).then(allEntries => allEntries.map(oneEntry => displayNewCalorieIntake(oneEntry)))
}


// CALORIES LIST ITEM //
displayNewCalorieIntake = (entry) => {
    // TOP LEVEL DIVS
    let li = document.createElement("li")
    li.className = "calories-list-item"

    let divGrid = document.createElement("div")
    divGrid.className = "uk-grid"
    
    // LEFT DIVS
    let divLeftCal = document.createElement("div")
    divLeftCal.className = "uk-width-1-6"
    divLeftCal.innerText = entry.calorie
    divLeftCal.style.fontWeight = "bold"
    
    let kcalSpan = document.createElement("span")
    kcalSpan.innerText = " kcal"
    
    // CENTER DIV WITH DESCRIPTION
    let midDivDesc = document.createElement("div")
    midDivDesc.className = "uk-width-4-5"
    midDivDesc.style.fontStyle = "italic"
    midDivDesc.className = "uk-text-meta"
    // em class="uk-text-meta"
    midDivDesc.innerText = entry.note

  // THE EDIT ICONS 
  let itemMenu = document.createElement("div")
  itemMenu.className = "list-item-menu"
   //   <a class="edit-button" uk-toggle="target: #edit-form-container" uk-icon="icon: pencil"></a>
   //   <a class="delete-button" uk-icon="icon: trash"></a>

  // APPEND
    divLeftCal.append ( kcalSpan )
    divGrid.append ( divLeftCal, midDivDesc, itemMenu ) // 
    li.append ( divGrid, itemMenu  )  // the outer 'uk-grid' gets appended to li
    ulCaloriesList.append (li) // LI gets appended to UL
}


// your code here, it may be worth it to ensure this file only runs AFTER the dom has loaded.
document.body.onload = getAndRenderCalories