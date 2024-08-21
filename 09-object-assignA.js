


const sbiBank ={
bankName:"Sate bank of India",
location:"Solapur",
accountNo:"1230456987",
ifsc:"SBI550015",
interestRate: "5.5%",
showDetails:function(){
     console.log(`Bank Name :${this.bankName},location:${this.location},accountNo :${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);   
    }

}

const axisBank ={
bankName:"Axis bank of",
location:"Pune",
accountNo:"1230456987",
ifsc:"WSR550015",
interestRate: "7.5%",
showDetails:function(){
     console.log(`Bank Name : ${this.bankName},location:${this.location},accountNo :${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);   
    }
    
}
   
const hdfcBank ={
bankName:"HDFC bank ",
location:"Mumbai",
accountNo:"1230456987",
ifsc:"WSk550015",
interestRate: "6.5%",
showDetails:function(){
      console.log(`Bank Name :${this.bankName},location :${this.location},accountNo :${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);   
    }

}
       
const YESBank ={
bankName:"YES bank ",
location:"Delhi",
accountNo:"1230456987",
ifsc:"hSR550015",
interestRate: "9.5%",
showDetails:function(){
      console.log(`Bank Name :${this.bankName},location :${this.location},accountNo :${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);   
    }
            
}
        
console.log(`============================= SBI Bank =====================================`);  
sbiBank.showDetails();
console.log(`============================= Axis Bank ====================================`); 
axisBank.showDetails();
console.log(`============================= HDFC Bank ====================================`); 
hdfcBank.showDetails();
console.log(`============================= Yes Bank =====================================`); 
YESBank.showDetails();