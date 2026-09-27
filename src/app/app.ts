import { Component } from '@angular/core';
import { ImageGallery } from './image-gallery';

@Component({
  selector: 'app-root',
  imports: [ImageGallery],
  template: `<image-gallery [links]="links" />`,
})
export class App {
  protected readonly links = [
    'https://tinyurl.com/im-gal-1st',
    'https://tinyurl.com/im-gal-2nd',
    // 'https://tinyurl.com/im-gal-3rd',
  ];
}
