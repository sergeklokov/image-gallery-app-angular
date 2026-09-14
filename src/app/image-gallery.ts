import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-gallery',
  standalone: true,
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css',
})
export class ImageGallery {
  @Input() links: string[] = [];

  removeImage(index: number): void {
    this.links = this.links.filter((_, linkIndex) => linkIndex !== index);
  }
}
