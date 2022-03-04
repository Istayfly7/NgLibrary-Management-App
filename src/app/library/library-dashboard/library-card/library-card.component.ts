import { Component, Input } from "@angular/core"

@Component({
    selector: `library-card`,
    template: `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{card}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    `
})
export class LibraryCardComponent{
    @Input() card: string;
}