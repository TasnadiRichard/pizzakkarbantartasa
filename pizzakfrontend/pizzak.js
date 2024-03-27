document.addEventListener("DOMContentLoaded",function(){
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete");
    const selectButton = document.getElementById("select");
    //const baseUrl ="http://localhost/pizzakarbantartasa/pizzakarban/index.php?pizzakarban";

    createButton.addEventListener("click", async function () {
        const baseUrl ="http://localhost/pizzakkarbantartasa/pizzak/index.php?pizzak";
        const formdata = new FormData(document.getElementById("pnev"));
        let options = {
            method: "POST",
            mode: "cors",
            body: formdata
        };
        let response = await fetch(baseUrl, options);
        if(response.ok){
            console.log("Sikeres feltöltés")
        }else{
            console.error("Sikertelen feltöltés")
        }
        return response;
    });

    deleteButton.addEventListener("click", async function () {
        const baseUrl =`http://localhost/pizzakkarbantartasa/pizzak/index.php?pizzak/${document.getElementById("pazon").value}`;    
        let options = {
            method: "DELETE",        
        };
        let response = await fetch(baseUrl, options);
        return response;
    });

    updateButton.addEventListener("click", async function(){        
        const baseUrl ="http://localhost/pizzakkarbantartasa/pizzak/index.php?pizzak";
        let object = {
            pazon: document.getElementById("pazon").value,
            pnev: document.getElementById("pnev").value,
            par: document.getElementById("par").value
        };
        let options = {
            method: "PUT",
            mode: "cors",            
        };
        let response = await fetch(baseUrl, options);
        return response;
    });

    readButton.addEventListener("click", async function(){
        const baseUrl ="http://localhost/pizzakkarbantartasa/pizzak/index.php?pizzak";
        let response = await fetch(baseUrl);
        if(response.ok){
            let data = await response.json();
            pizzakListazasa(data);
        }else{
            console.error("Hiba a szerver válaszában")
        }

    });

    function pizzakListazasa(pizzak){
        let pizzaDiv = document.getElementById('pizzalista');
        let tablazat = pizzaFejlec();
        for(let pizza of pizzak){
            tablazat += pizzaSor(pizza)
        }
        pizzaDiv.innerHTML = tablazat + '</tbody></tbody>'
        return pizzaDiv;
    }

    function pizzaSor(pizza){
        let sor = `<tr>
        <td>${pizza.pazon}</td>
        <td>${pizza.pnev}</td>
        <td>${pizza.par}</td>
        <td><button type="button" class="btn btn-outline-secondary" onclick="adatBetoltes(${pizza.pazon}, '${pizza.pnev}', '${pizza.par}')"><i class="fa-regular fa-hand-point-left"></i>Kiválasztás</button></td>
        </tr>`;
        return sor
    }

    function pizzaFejlec(){
        let fejlec = `<table class="table table-striped">
        <thead>
            <tr>
                <th>Azonosító: </th>
                <th>Név: </th>
                <th>Ár: </th>
                <th>Művelet: </th>
            </tr>
        </thead>
        <tbody>`;
        return fejlec;
    };
    
});

function adatBetoltes(pazon, pnev, par){
    let baseUrl='http://localhost/pizzakkarbantartasa/pizzak/index.php?pizzaka' + pnev;
    let options={
        method: "GET",
        mode: "cors"
    };
    let response= fetch(baseUrl, options)
    document.getElementById("pazon").value=pazon;
    document.getElementById("pnev").value=pnev;
    document.getElementById("par").value=par;
    response.then(function(response){
        if(response.ok){
            let data= response.json();
        }
        else{
            console.error("Hiba a szerverben!");
        }
    });
}