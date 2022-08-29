let data;



const showall=()=>{
    fetch("http://localhost:3000/api/allPayments",{
        method:"GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res=>res.json())
    .then(data=>{ 
         data=data;
        data.forEach(data => {
            let row =  document.getElementById("table").insertRow();
            row.innerHTML = `<td>${data.idpayments}</td><td>${data.customerName}</td><td>${data.customerNumber}</td><td>${data.amountPaid}</td><td>${data.AmountOwed}</td><td>${data.AmountOwed -data.amountPaid} </td><td>${data.Date.toString()}</td></tr>`
        });
        
    })
}
const calculateDaily=()=>{
    let litresSold =0;
    let total=0;
    fetch("http://localhost:3000/api/allPayments",{
        method:"GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
        })
    .then(res=>res.json())
    .then(data=>{ 
        //calculate monthly total 
        let date = new Date()
        data.forEach(row => {
            let dbDate = new Date(row.Date);
            console.log("line 36 "+date.getDay(), dbDate.getDay())
            if(date.getDay() == dbDate.getDay()){
                total += row.amountPaid;
                litresSold+= row.numberOfLitresBought;
            }
      
    });
    document.getElementById("Daily").innerText = `${total}`;
    document.getElementById("litres").innerText = `${litresSold}`;

})
}
 
    

const calculateMonthly =()=>{
    let litresSoldM =0;
    let totalM=0;
    fetch("http://localhost:3000/api/allPayments",{
        method:"GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res=>res.json())
    .then(data=>{ 
        let date = new Date()
        data.forEach(row => {
            let dbDate = new Date(row.Date);
           
            if(date.getMonth() == dbDate.getMonth()){
                 totalM += row.amountPaid;
                 console.log("line 68 "+row.numberOfLitresBought)
                 litresSoldM += row.numberOfLitresBought;
            }
          
        });
        document.getElementById("Monthly").innerText = `${totalM}`;
        document.getElementById("litresM").innerText = `${litresSoldM}`;
    })};

    const changeCost=()=>{
        let costOfMilk = document.getElementById("costOfMilk").value
        fetch("http://localhost:3000/api/changeCost",{
            method:"POST",
            body: JSON.stringify({"costOfMilk":costOfMilk}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((res)=>{
            if(res.ok){
                document.getElementById("infoMilk").innerText="Cost Changed"
            }
        })
    }