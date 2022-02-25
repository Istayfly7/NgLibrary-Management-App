import { Component } from "@angular/core";

@Component({
    selector: 'library-dashboard',
    template: `
        <div class="container-fluid">
            <div class="row">
                <library-carousel></library-carousel>
            </div>
            <div class="row"></div>
        </div>
    `
})
export class LibraryDashboardComponent{
    
}