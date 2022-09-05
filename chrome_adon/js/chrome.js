let myLeads = []

const ulEL = document.getElementById("ul-el");
const inputBtn = document.getElementById('input-btn');
const inputEL = document.getElementById('input-el');

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEL.value);
    // console.log(myLeads)
    inputEL.value = ""
    renderLeads();
})

function renderLeads() {    
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        // ulEL.innerHTML += "<li>" + myLeads[i] + "</li>"
        /* Aternative way 1 --- 
        const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEL.append(li)
        */
       /* Alternative Way 2 - 1. create a variable to hold the HTML for the list items
                            - assign it to an empty string
                            - add the item to the listItems variable instead of using the elEL.innerHTML
                            - 2. render the ListItems inside the UL using ulEL.innerHTML
        */
       listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>`
    }
    ulEL.innerHTML = (listItems)
}
