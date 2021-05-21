// initialize count as 0
// "lsiten for "each time button pressed increment count by 1 
// change count id (h2) to reflect new count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById('save-el')

let count=0;
let increment =() => {
     count +=1;
     countEl.textContent = count; 
     
       
}

let save =() => {
  saves = count + " - "
  saveEl.textContent += saves
  countEl.textContent = 0;
  count = 0;
}


