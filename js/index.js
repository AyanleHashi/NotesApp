//JSON.stringify(object) into localStorage

class Note {
    constructor(title) {
        this.title = title;

        let date = new Date();
        this.date = date.getTime();
        this.body = "";
    }
}

function createNewNote() {
    var newdiv = document.createElement("div");
    newdiv.innerText = "NEW NOTE";
    newdiv.classList.add("note");
    document.getElementById("note-container").appendChild(newdiv);
}

/*
PROCEDURE:
    pull stored notes from storage
    JSON them into the class
    add notes to HTML
 */