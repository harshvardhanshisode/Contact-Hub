let contactlist = localStorage.getItem("contacts");

let contacts;

if (contactlist == null) {
  contacts = [];
} else {    
  contacts = JSON.parse(contactlist);
}
/* add contact-------------------*/
function saveData(){

  let name = document.getElementById("name").value;
  let contact = document.getElementById("no").value;
 /* validation-----------------*/
  if(name === "" || contact === ""){
  alert("Please enter Name and Contact");
  return;
}

  let obj = { name, contact };

  contacts.push(obj);

  localStorage.setItem("contacts", JSON.stringify(contacts));
/*clear the input fields----------------*/
  document.getElementById("name").value = "";
document.getElementById("no").value = "";


/* all contacts-------------*/
  renderContacts();
}

function renderContacts(){

  let container = document.getElementById("container");


  if(contacts.length === 0){
    container.innerHTML = "<h5>No Contacts Found</h5>";
    return;
  }

  let html = "";

  contacts.forEach(function(el, index){

    html += `
    <div class="card noteCard my-2 mx-2 shadow text-center" style="width:14rem;">
      <div class="card-body"> 
        <img src="image/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg" class="rounded-circle mb-3" width="70" height="70">

        <h5 class="contactName">${el.name}</h5>

        <p>${el.contact}</p>

        <button class="btn btn-danger btn-sm btn-block"
        onclick="deleteContact(${index})">
        Delete
        </button>

      </div>
    </div>
    `;
  });

  container.innerHTML = html;
}

function deleteContact(index){
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  renderContacts();
}


renderContacts();

/*search function-------*/
let search = document.getElementById("searchTxt");

search.addEventListener("input", function(){

  let value = search.value.toLowerCase();

  let cards = document.getElementsByClassName("noteCard");

  for(let i = 0; i < cards.length; i++){

    let name = cards[i]
      .querySelector(".contactName")
      .innerText
      .toLowerCase();

    if(name.includes(value)){
      cards[i].style.display = "block";
    }
    else{
      cards[i].style.display = "none";
    }
  }
});
