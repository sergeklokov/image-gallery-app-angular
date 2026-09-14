import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the image gallery and remove a selected item', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.image');

    expect(items.length).toBe(3);
    expect(items[0]?.textContent).toContain('https://tinyurl.com/im-gal-1st');

    const removeButtons = compiled.querySelectorAll('.remove');
    (removeButtons[0] as HTMLButtonElement).click();
    fixture.detectChanges();

    const updatedItems = compiled.querySelectorAll('.image');
    expect(updatedItems.length).toBe(2);
    expect(updatedItems[0]?.textContent).toContain('https://tinyurl.com/im-gal-2nd');
  });
});
