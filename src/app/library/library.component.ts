import { Component } from "@angular/core";

@Component({
    selector: 'library-dashboard',
    template: `
        <div class="container-fluid">
            <div class="row">
                <library-carousel></library-carousel>
            </div>
            <div class="row" style="margin-left: 110px;">
                <div *ngFor="let card of cards" class="col-md-5" style="padding-top: 15px; padding-bottom: 5px;">
                    <library-card [card]="card"></library-card>
                </div>
            </div>
        </div>
    `,
    styles: [`
        library-carousel {
            padding-left: 0;
            padding-right: 0;
        }
    `]
})
export class LibraryDashboardComponent{
    cards = ['Total Books', 'Books Available', 'Total Users']
    
}