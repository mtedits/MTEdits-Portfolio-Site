const page1 = document.getElementById("videosGrid1")
const page2 = document.getElementById("videosGrid2")

var page=1;

function prev() {  
  if (page == 2){
    page1.style.display = "grid";
    page2.style.display = "none";    
    page = 1
  }  
}

function next() {    
  if (page == 1){
    page1.style.display = "none";
    page2.style.display = "grid";    
    page = 2
  }   
}