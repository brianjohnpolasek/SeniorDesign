//~ function readTextFile(file)
//~ {
    //~ var rawFile = new XMLHttpRequest();
    //~ rawFile.open("GET", file, false);
    //~ rawFile.onreadystatechange = function ()
    //~ {
        //~ if(rawFile.readyState === 4)
        //~ {
            //~ if(rawFile.status === 200 || rawFile.status == 0)
            //~ {
                //~ var allText = rawFile.responseText;
                //~ alert(allText);
            //~ }
        //~ }
    //~ }
    //~ rawFile.send(null);
//~ }

function load() {
    var file = new XMLHttpRequest();
    file.open("GET", "../files/test.txt", true);
    file.onreadystatechange = function() {
      if (file.readyState === 4) {  // Makes sure the document is ready to parse
        if (file.status === 200) {  // Makes sure it's found the file
          text = file.responseText;
          document.getElementById("test").innerHTML = text;
        }
      }
    }
}

window.onLoad = load();
