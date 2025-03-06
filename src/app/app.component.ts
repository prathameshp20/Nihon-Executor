import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageConverterComponent } from './image-converter/image-converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ImageConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ImageConverter';
}
