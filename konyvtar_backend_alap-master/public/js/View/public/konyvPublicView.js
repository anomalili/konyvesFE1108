class KonyvPublicView {
    #elem;
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(szuloElem);
        this.#elem = elem;
        szuloElem.append(`<tr>
                            <td>${elem.cim}</td>
                            <td>${elem.kep}</td>
                            <td>${elem.szerzo}</td>
                            <td>${elem.ar}</td>
                            <td></td>
                            <td><button class="kosarba">Kosárba</button></td>
                        </tr>`)
        this.recordElem = szuloElem.children(`tr:last-child`);
        this.kosarElem = this.recordElem.children("td:nth-child(5)").children("button");

        this.kosarElem.on("click", ()=> {
            console.log("kosárba")
            this.kattintasTrigger("kosarba");
        })
    }

    kattintasTrigger(esemenyNeve) {
        console.log(esemenyNeve)
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.ID})
        window.dispatchEvent(esemeny);
    }
}

export default KonyvPublicView;