// DOM manipulation
// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);


function sayHello () {
   var name = 
    document.getElementById("name").value
    var message = "<h4>Dear " + name + ",</h4>"

      document.getElementById("content").innerHTML = message;

         if (name === "creator") {
            var title = document.querySelector("#title").textContent
            title += " created by Akhil the ploppy poopy"
            var title = document.querySelector("#title").textContent = title
         }
      }
      
function note () {
   var note1 = 
      document.getElementById("note1").value
      var message1 = "<h4>" + note1 + "!</h4>"
   
      document.getElementById("content").innerHTML = message1;   
   }


function sayBye () {
var name1 = 
   document.getElementById("name1").value
   var message1 = "<h4>Lots of love from " + name1 + "!</h4>"

   document.getElementById("content").innerHTML = message1;   
}