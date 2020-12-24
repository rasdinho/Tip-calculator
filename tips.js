document.addEventListener("DOMContentLoaded", function (event){ 
    console.log("DOM fully loaded and parsed");
                            
                       
                         
  })
  //this function gets the amount from the user
  function getAmount(){
    
  }

  const form = document.getElementById("form")
form.addEventListener("submit", function (event){
  event.preventDefault()
  console.log("your from was Submitted")
  const billInput = document.getElementById("bill-amount").value
  
  const tip = billInput * 0.2;
  const tipNode = document.getElementById("tips")
  const tipNodeText = tipNode.textContent
  tipNode.innerText = tipNodeText + tip
})
