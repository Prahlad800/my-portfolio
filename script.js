
function Submit() {
   
    let massege = document.getElementById("m1").value;

    let name = document.getElementById("name").value
    let maindiv = document.getElementById("reco1")

    console.log(massege);
    if (massege.trim() !== "") {
        let container = document.createElement("div");
        container.setAttribute("class", "recom");

        /* container styles */
        container.style.backgroundColor = "#d683e4";
        
        container.style.display = "flex";
        container.style.flexDirection = "column";   // 🔥 FIX
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
         

        /* text */
        let mess = document.createElement("p");
        mess.textContent = "Thanks for leaving a recommendation!";
        mess.style.fontWeight = "bold";

        /* button */
        let button1 = document.createElement("button");
        button1.setAttribute("id", "button1")

        button1.textContent = "OK";



        button1.style.padding = "5px";
        button1.style.paddingLeft = "30px";
        button1.style.paddingRight = "30px";
        button1.style.color = "#8100eb";
        button1.style.fontWeight = "bold";
        button1.style.border = "1px solid #8100eb";
        button1.style.backgroundColor = "white";
        button1.style.borderRadius = "5px";

        button1.addEventListener("mouseover", () => {
            button1.style.backgroundColor = "#5b04a3b5";
            button1.style.color = "rgb(8, 8, 8)";
            button1.style.border = "1px solid rgb(21, 42, 228)";
            button1.style.padding = "7px";
            button1.style.paddingLeft = "32px";
            button1.style.paddingRight = "32px";
        });

        /* mouse out (normal state wapas) */
        button1.addEventListener("mouseout", () => {
            button1.style.backgroundColor = "white";
            button1.style.color = "#8100eb";
            button1.style.border = "1px solid #8100eb";
            button1.style.padding = "5px";
            button1.style.paddingLeft = "30px";
            button1.style.paddingRight = "30px";
        });

        /* append */
        container.appendChild(mess);
        container.appendChild(button1);
        maindiv.appendChild(container);


        button1.addEventListener("click", () => {
            maindiv.removeChild(container);
            mess.remove();
            button1.remove();

            let newCard = document.createElement("div");
            newCard.setAttribute("class", "recom");
            newCard.style.backgroundColor = 'while';

            let ratingP = document.createElement("p");
            ratingP.setAttribute("class", "reting");
            ratingP.innerHTML = massege;

            let nameP = document.createElement("p");
            nameP.setAttribute("class", "name");
            nameP.textContent = name;
            nameP.style.fontWeight="bold"

            let span = document.createElement("span");
            span.textContent = ".....";
            span.style.fontWeight = "bold";

            nameP.append(span);

            newCard.append(ratingP);
            newCard.append(nameP);


            maindiv.append(newCard);





        });






    } else {
        alert("Message empty hai bhai 😄");
    }
   

}

