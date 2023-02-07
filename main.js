
function cambiarParrafo(){
    document.getElementById("edit-acercaDe").style.display="block";
    let texto = document.getElementById("text-acercaDe").innerText;
    console.log(texto);
  };
  
  function myFunction(valor){
    document.getElementById("text-acercaDe").innerText=valor;
  };
  
  function logMessage(message) {
    console.log(message + "<br>");
  };
  
  let textarea=document.getElementById("edit-acercaDe")
  textarea.addEventListener('keyup', (e) => {
    logMessage(`key "${e.key}" released [event: keyup]`);
    if (e.key=="Enter"){
      document.getElementById("edit-acercaDe").style.display="none"
    };
  });
  
  function showFile(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last modified: ${file.lastModified}`); 
    
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
      console.log(reader.result);
      document.getElementById("text-acercaDe").innerText=reader.result;
    };
    reader.onerror = function() {
      console.log(reader.error);
    };
  };

function changeImage(){};

function changeParagraph(){
    document.getElementById("ph-2").style.display="block";
    let text = document.getElementById("paragraph-2").innerText;
    console.log(text);
};

function okey(newHtmlContent){
    document.getElementById("paragraph-2").innerText=newHtmlContent;
};
