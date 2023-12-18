// Product 1

const product1 = "Pork Barbeque";
const price1 = "40";

// Product 2

const product2 = "Fried Chicken";
const price2 = "35";

// Product 3

const product3 = "Beef Steak";
const price3 = "50";

// Product 4

const product4 = "Sinigang";
const price4 = "45";




function search(){
    const barcode = document.getElementById("input-barcode").value;

switch(barcode){

    case 'pork bbq':
        document.getElementById("first-item").textContent = product1;
        document.getElementById("price").textContent = price1;
        break;
        ;
        
   case 'fried chicken':
        document.getElementById("first-item").textContent = product2;
        document.getElementById("price").textContent = price2;
        break;
        ;
   case 'beef steak':
       
        document.getElementById("first-item").textContent = product3;
        document.getElementById("price").textContent = price3;
        break;
        ;     
    case 'sinigang':
       
        document.getElementById("first-item").textContent = product4;
        document.getElementById("price").textContent = price4;
        break;
        ;     
 }

}
// function search2(){
//     const barcode = document.getElementById("input-barcode").value;


// switch(barcode2){

//     case '123':
//         document.getElementById("second-item").textContent = product1;
//         document.getElementById("price2").textContent = price1;
//         break;
//         ;
        
//    case '321':
//         document.getElementById("second-item").textContent = product2;
//         document.getElementById("price2").textContent = price2;
//         break;
//         ;

//     case '231':
//     document.getElementById("second-item").textContent = product2;
//     document.getElementById("price2").textContent = price2;
//     break;
//        ;
//     }

// }

// function search3(){
//     const barcode3 = document.getElementById("input-barcode3").value;


// switch(barcode3){

//     case '123':
//         document.getElementById("third-item").textContent = product1;
//         document.getElementById("price3").textContent = price1;
//         break;
//         ;
        
//    case '321':
//         document.getElementById("third-item").textContent = product2;
//         document.getElementById("price3").textContent = price2;
//         break;
//         ;
//    case '231':
       
//         document.getElementById("third-item").textContent = product3;
//         document.getElementById("price3").textContent = price3;
//         break;
//         ;      

// }

// }
    
function total(){
{
  const price1 = parseInt(document.getElementById("price").textContent);

  var totalCost = parseFloat(document.getElementById('price').innerText);
//   var cashInput = parseFloat(prompt("Enter the cash amount:"));

  document.getElementById('total').innerText = totalCost.toFixed(2)
  if (!isNaN(cashInput)) {
      var change = cashInput - totalCost;
      ;
      document.getElementById('change').innerText = change.toFixed(2);
      document.getElementById('cash').innerText = cashInput.toFixed(2);
  } else {
      alert("Invalid input. Please enter a valid number.");
  }
  
}}
//   const price1 = parseInt(document.getElementById("price").textContent);
// //   const price2 = parseInt(document.getElementById("price2").textContent);
// //   const price3 = parseInt(document.getElementById("price3").textContent);
// //   const price4 = parseInt(document.getElementById("price4").textContent);
//   let total = 0;
// }

//   if (!isNaN(price1)){
//     total += price1;
//   }
  
//   if (!isNaN(price2)){
//     total += price2;
//   }
  
//   if (!isNaN(price3)){
//     total += price3;
//   }

//   if (!isNaN(price4)){
//     total += price4;
//   }
  
  // if (total >= 1000){
  //   let discountedtotal = total - (total * 0.1);
    
  //   document.getElementById("total").textContent = discountedtotal;
  // }
  // else{
  //   document.getElementById("total").textContent = total;
  // }


function quantity(){
 
    const quantity = parseInt(document.getElementById("input-quantity").value);

    let quant;

    if(document.getElementById("first-item").textContent == product1){

        quant = quantity * price1;

        document.getElementById("price").textContent = quant;
    }
    else if(document.getElementById("first-item").textContent == product2){

        quant = quantity * price2;

        document.getElementById("price").textContent = quant;
    }
    else if(document.getElementById("first-item").textContent == product3){

        quant = quantity * price3;

        document.getElementById("price").textContent = quant;
    }
    else if(document.getElementById("first-item").textContent == product4){

        quant = quantity * price4;

        document.getElementById("price").textContent = quant;
    }
    
}

// function quantity2(){
 
//     const quantity = parseInt(document.getElementById("input-quantity2").value);

//     let quant;

//     if(document.getElementById("second-item").textContent == product1){

//         quant = quantity * price1;

//         document.getElementById("price2").textContent = quant;
//     }
//     else if(document.getElementById("second-item").textContent == product2){

//         quant = quantity * price2;

//         document.getElementById("price2").textContent = quant;
//     }
//     else if(document.getElementById("second-item").textContent == product3){

//         quant = quantity * price3;

//         document.getElementById("price2").textContent = quant;
//     }
    
// }

// function quantity3(){
 
//     const quantity = parseInt(document.getElementById("input-quantity3").value);

//     let quant;

//     if(document.getElementById("third-item").textContent == product1){

//         quant = quantity * price1;

//         document.getElementById("price3").textContent = quant;
//     }
//     else if(document.getElementById("third-item").textContent == product2){

//         quant = quantity * price2;

//         document.getElementById("price3").textContent = quant;
//     }
//     else if(document.getElementById("third-item").textContent == product3){

//         quant = quantity * price3;

//         document.getElementById("price3").textContent = quant;
//     }
        
// }