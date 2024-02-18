let totalSeatNum = 40;
let selectedSeat = 0; 
const allSeat = document.getElementsByClassName("seat");


for (let seat of allSeat){
    
    seat.addEventListener("click", function(event){
        const seatText = seat.innerText;
        // seat bg and text color change
        seatColorUpdate(seatText);

        // total seat and selected seat er count update 
        totalSeatNum--;
        selectedSeat++;
        setInnerText("totalSeat", totalSeatNum);
        setInnerText("selectedSeat", selectedSeat);

        // selectedSeatDetails a jei jei seat select koresi ta append korbo.
        const selectedSeatDetails = document.getElementById("selectedSeatDetails");
        const newLi = document.createElement("li");
        newLi.innerHTML = `
        ${seatText} &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  Economoy
        &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  550
        ` 
        selectedSeatDetails.appendChild(newLi)

        // Total price sum
       const totalPrice= document.getElementById("totalPrice").innerText;
       const totalPriceInt = parseInt(totalPrice);
       setInnerText("totalPrice", totalPriceInt + 550 );

       // than total price er inner text tai grand price a set koresi .
       const totalPriceForGrand= document.getElementById("totalPrice").innerText;
       const totalPriceForGrandInt = parseInt(totalPriceForGrand);
       setInnerText("grandPrice", totalPriceForGrandInt );

       // disable now selected button
       seat.setAttribute("disabled", true)
       console.log(seat.getAttribute('class'))
    })

}