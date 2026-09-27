
# Image Gallery App

An image gallery is a set of images with corresponding *remove* buttons. This is the HTML code for a gallery with two images:

```html
<div>
  <div class="image">
    https://tinyurl.com/im-gal-1st
    <button class="remove">X</button>
  </div>
  <div class="image">
    https://tinyurl.com/im-gal-2nd
    <button class="remove">X</button>
  </div>
</div>
```

Implement the **ImageGallery** component that accepts a **links** input and renders the gallery described above so that the first item in the `links` input is the `src` attribute of the first image in the gallery.
It should also implement the following logic: When the button is clicked, the image that is in the same div as the button should be removed from the gallery.

For example, after the first image has been removed from the gallery above, its HTML code should look like this:

```html
<div>
  <div class="image">
    https://tinyurl.com/im-gal-2nd
    <button class="remove">X</button>
  </div>
</div>
```

The code for running the example case locally is provided **here**.

## Initial task:
https://www.testdome.com/tests/angular-online-test/70


## Angular 18

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-gallery',
  standalone: true,
  template: `<div>
  </div>`
})
export class ImageGallery {
  @Input() links: string[] = [];
}
```
