const leftArrow = document.getElementById("leftArrowContainer")
const rightArrow = document.getElementById("rightArrowContainer")

var page = 1;

var lastPage = 3; // change this when adding pages to total number of pages :)

function next() {    
  if (page < lastPage){
    document.getElementById("videosGrid" + page).style.display = "none";
    page++;
    document.getElementById("videosGrid" + page).style.display = "flex";    
    checkPage();
  }
}
function prev() {  
  if (page > 1){
    document.getElementById("videosGrid" + page).style.display = "none";        
    page--;
    document.getElementById("videosGrid" + page).style.display = "flex"; 
    checkPage();  
  }  
}
function checkPage() {  
  if (page > 1){
    leftArrow.style.visibility = "visible";
  } 
  else {
    leftArrow.style.visibility = "hidden";
  }
  if (page < lastPage) {
    rightArrow.style.visibility = "visible";
  }
  else {
    rightArrow.style.visibility = "hidden";
  }
}