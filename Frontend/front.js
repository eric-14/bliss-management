
//let costPerLitre = 80;
 
let customerName;
let customerNumber ;
let numberOfLitres;
let amountPaid;
const addPayment=(event)=>{
   // event.preventDefault();
  
   let customerName = document.getElementById("CustomerName").value;
   let customerNumber = document.getElementById("CustomerNumber").value;
   let numberOfLitres = document.getElementById("NumberOfLitres").value;
   let amountPaid = document.getElementById("AmountPaid").value;

    const reg= /\w*/
    if(!reg.test(customerName) | !reg.test(customerNumber) | !reg.test(numberOfLitres) | !reg.test(amountPaid))
    {
        document.getElementById("updateMessage").innerText = "You've entered the wrong information";
        throw err;
    }
    //server at localhost:3000
    const paymentInfo = {
        customerName:customerName.trim(),
        customerNumber:customerNumber.trim(),
        numberOfLitres: numberOfLitres.trim(),
        amountPaid:amountPaid.trim()
    }
 
    
    fetch("http://localhost:3000/api/payment",{
            method:"POST",
            body: JSON.stringify(paymentInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(res=> {
            if(res.ok){
               
                document.getElementById("updateMessage").innerText = "Information Updated"
                setTimeout(() => {
                    document.getElementById("updateMessage").innerText = ""
                    //document.getElementById("addPayment").disabled=true
                }, 1000);
                
                document.getElementById("addPayment").disabled=false
            }else{
                document.getElementById("updateMessage").innerText = res.text();
        
            }

        })
    
    fetch(`http://localhost:3000/api/singleClientPayment/${customerNumber}`,{
        method:"GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res=>res.json())
    .then(data=>{
            //let row =  document.getElementById("table").insertRow();
        
          
            data.forEach(data => {
                let row =  document.getElementById("table").insertRow();
                row.innerHTML = `<td>${data.idpayments}</td><td>${data.customerNumber}</td><td>${data.customerName}</td><td>${data.amountPaid}</td><td>${data.AmountOwed}</td><td>${data.AmountOwed -data.amountPaid} </td><td>${data.Date.toString()}</td></tr>`
            });
            
          
        
    })

    

}
const costOfMilk= ()=>{
    fetch("http://localhost:3000/api/payment",{
        method:"GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res=>res.json())
    .then(data=>{
        
      
         document.getElementById("costOfMilk").innerText = data.costPerLitre;
})
}
