import { Component } from "@angular/core";

@Component({
    selector: 'library-carousel',
    template: `
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/images/lib1.jfif" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="assets/images/lib2.jfif" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="assets/images/lib3.jfif" class="d-block w-100" alt="...">
                </div>
            </div>
        </div>`
        ,
        styles: [`
            .carousel-inner {
                border: solid;
                border-width: 1px;
            }

            .carousel {
                padding-top: 10px;
            }

            img {
                height: 400px;
            }
        `]
})
export class LibraryCarouselComponent{

}