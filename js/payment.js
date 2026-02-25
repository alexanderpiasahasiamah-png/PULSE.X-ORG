function payNow(sector) {

let email = document.getElementById("email-" + sector).value;
let amount = document.getElementById("amount-" + sector).value * 100;

if(!email || !amount){
alert("Enter email and amount");
return;
}

var handler = PaystackPop.setup({
key: 'pk_live_286cc49774695e4f691de3d8eab1d44aa191a7ac',
email: email,
amount: amount,
currency: "GHS",

callback: function(response){
alert("Payment successful!");
document.getElementById("unlock-" + sector).style.display = "flex";
},

onClose: function(){
alert("Payment cancelled");
}
});

handler.openIframe();
}
