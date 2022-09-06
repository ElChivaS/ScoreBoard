let myLeads = []

const ulEL = document.getElementById("ul-el");
const inputEL = document.getElementById('input-el');

const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

// Set leads From Local Storage
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

// Event from save-tab button
tabBtn.addEventListener("click", function() {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }, 
        function(tabs) {
            myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            renderLeads(myLeads);
        }
    )
})

// Event from input-btn
inputBtn.addEventListener('click', function() {
    myLeads.push(inputEL.value);
    inputEL.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
})

// Event from delete-btn
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

// main function
function render() {    
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
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEL.innerHTML = (listItems)
}
