import KonyvPublicView from "./KonyvPublicView.js";

class KonyvekPublicView {
    constructor(tomb, szuloElem) {
        console.log(tomb);
        szuloElem.html(`<table>
            <thead><tr>
                <th>Cím</th>
                <th>Kép</th>
                <th>Szerző</th>
                <th>Ár</th>
                <th></th>
            </tr></thead>
            <tbody></tbody>
            </table>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbody");
        tomb.forEach(konyv => {
            const konyvOBJ = new KonyvPublicView(konyv, this.tbodyElem);
        });
    }
}

export default KonyvekPublicView;