// console.log("order confirmation page. ")
const date = document.getElementById("date");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const currentTime = new Date()
// console.log(userData)
function displayData() {
  const userData = JSON.parse(localStorage.getItem("user"));
  if(userData){
    date.innerText = currentTime;
    name.innerText = userData.name;
    phone.innerText = userData.phone_number;
    address.innerText = userData.address
  }
}

displayData()
