var filesInput = document.getElementById("file");
filesInput.addEventListener("change", function (event) {
    var files = event.target.files;
    var file = files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function (event) {
        var textFile = event.target;
        alert(textFile.result);
        document.write(textFile.result);
    });
    reader.readAsText(file);
});
