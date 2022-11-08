class KonyvView {
    #elem;
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(szuloElem);
        this.#elem = elem;
        szuloElem.append(`<tr>
                            <td>${elem.ID}</td>
                            <td>${elem.cim}</td>
                            <td>${elem.szerzo}</td>
                            <td>${elem.ar}</td>
                            <td><button class="modosit">módosítás</button></td>
                            <td><button class="torol">törlés</button></td></tr>`)
        this.recordElem = szuloElem.children(`tr:last-child`);
        this.torolElem = this.recordElem.children("td:nth-child(6)").children("button");
        this.modositElem = this.recordElem.children("td:nth-child(5)").children("button");
        console.log(this.modositElem);
        this.modositElem.on("click",()=>{
            console.log("módosítás a viewvban");
            this.kattintasTrigger("modosit");
        })

        this.torolElem.on("click",()=>{
            console.log("törlés a viewvban");
            this.kattintasTrigger("torol");
        })
    }

    kattintasTrigger(esemenyNeve) {
        console.log(esemenyNeve)
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.ID})
        window.dispatchEvent(esemeny);
    }
}

export default KonyvView;