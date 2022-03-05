import { Component } from "@angular/core";

@Component({
    selector: 'catalog-table',
    templateUrl: 'catalog-table.component.html'
})
export class CatalogTableComponent {
    books = [
        {
            id: 1,
            author: "J.K. Rowling",
            title: "Harry Potter and The Sorcerer's Stone"
        },
        {
            id: 2,
            author: "Carl Dueker",
            title: "Night Hoops"
        },
        {
            id: 3,
            author: "Anybody",
            title: "Random Book"
        }
    ];
}