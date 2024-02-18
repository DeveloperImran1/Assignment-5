let totalSeatNum = 40;
let selectedSeat = 0;
const allSeat = document.getElementsByClassName("seat");


for (let seat of allSeat) {

    seat.addEventListener("click", function (event) {

        // 4 tar besi seat select korle alert diba and return korbe
        if (selectedSeat === 4) {
            alert("You are already selected 4 seats !");
            return;
        }


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
        const totalPrice = document.getElementById("totalPrice").innerText;
        const totalPriceInt = parseInt(totalPrice);
        setInnerText("totalPrice", totalPriceInt + 550);

        // than total price er inner text tai grand price a set koresi .
        const totalPriceForGrand = document.getElementById("totalPrice").innerText;
        const totalPriceForGrandInt = parseInt(totalPriceForGrand);
        setInnerText("grandPrice", totalPriceForGrandInt);

        // disable now selected button
        seat.setAttribute("disabled", true)


        // Next button for modal
        const phoneNumberInput = document.getElementById("phoneNumberInput");
        phoneNumberInput.addEventListener("keyup", function (event) {
            const numberOfDigit = event.target.value.length;

            const nextButton = document.getElementById("nextButton");
            if (selectedSeat > 0 && numberOfDigit > 0 && numberOfDigit < 12) {
                nextButton.removeAttribute("disabled")
            }
            else if (numberOfDigit > 11) {
                nextButton.setAttribute("disabled", true)
            }
        })


        // coupon code buttom inable 
        const couponButtom = document.getElementById("couponButtom");
        if(selectedSeat === 4){
            couponButtom.removeAttribute('disabled', true)
        }

        // coupon code er input field 
        const couponInput = document.getElementById("couponInput").value;
        couponButtom.addEventListener("click", function(){
            if(couponInput === "NEW15"){
                
            }
        })


    })




}