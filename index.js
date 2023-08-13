console.log('Welcome and add some notes.');
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtitle = document.getElementById('addtitle');
    let addtext = document.getElementById('addtext');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    let myobj = {
        title: addtitle.value,
        text: addtext.value
    };
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    addtitle.value = "";
    console.log(notesobj);
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
            <div class="notecard mx-2 my-2 card" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <hr>

                    <p class="card-text">${element.text}</p>
                    <button id = ${index} onclick="deletenote(this.id)" class="btn btn-primary">Delete note</button>
                </div>
            </div>`
    });
    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `Nothing to show yet! ADD SOME NOTES BY USING THE UPPER SECTION.`;
    }
}
function deletenote(index) {
    console.log("I am deleting", index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();

}
let search = document.getElementById("searchtext");
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    console.log("Input event fired!", inputval);
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function (element) {
        let cardtext = element.getElementsByTagName("p")[0].innerText;
        if (cardtext.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
let searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click", function (e) {
    if (cardtext.includes(inputval)) {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
    shownotes();
});
