if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const changeButton = document.getElementById("my-button");
  const addNoteButton = document.getElementById("add-data");
  changeButton.addEventListener("click", function () {
    console.log("Hello world");
    document.getElementById("heading").innerHTML = "My Notebook";
  });

  addNoteButton.addEventListener("click", function () {
    const data = document.getElementById("data");
    let newParagraph = document.createElement("li");
    newParagraph.innerText = document.getElementById("note").value;
    data.appendChild(newParagraph);
  });
}
