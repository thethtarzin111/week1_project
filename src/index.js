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
  const addNoteButton = document.getElementById("my-button");

  addNoteButton.addEventListener("click", function () {
    console.log("Hello world");
  });
}
