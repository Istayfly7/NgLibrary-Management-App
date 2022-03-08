import { Component } from "@angular/core";

@Component({
    selector: 'library-admin',
    templateUrl: 'library-admin.component.html',
    styles: [`
        .flex-container {
            display: flex;
        }

        h3 {
            padding-top: 10px;
            margin-left: 0px;
        }

        .mybooks {
            padding-left: 10px;
            padding-right: 5px;
        }
    `]
})
export class LibraryAdminComponent {

}