import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
declare var jQuery: any; // jQuery'yi global olarak tanımla
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Bu satırı ekleyin
})
export class NavComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof jQuery !== 'undefined' && jQuery.fn.revolution) {
      jQuery('#rev_slider_1_1').revolution({
        // Revolution Slider ayarları burada
      });
    } else {
      console.error('jQuery veya Revolution Slider yüklenemedi!');
    }
  }
}