import { Component } from "@angular/core";

@Component({
    selector: 'library-catalog',
    template: `
        <div class="container-fluid">
            <h3>Library Catalog</h3>
            <hr/>
            <catalog-table></catalog-table>
        </div>
        `,
    styles: [`
        .container-fluid {
            padding-top: 10px;
            padding-left: 0;
            padding-right: 0;
        }

        h3 {
            text-align: center;
        }
    `]
})
export class LibraryCatalogComponent {

}