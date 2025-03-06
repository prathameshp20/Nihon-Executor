import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-converter',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './image-converter.component.html',
  styleUrl: './image-converter.component.css'
})
export class ImageConverterComponent {

   imageFile: File | null = null;
  convertedImage: string | null = null;
  selectedFormat: string = 'png'; // Default format is PNG
  http = inject(HttpClient) ; 

  constructor( ) {}

  // Handle file input change
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.imageFile = file;
    } else {
      alert('Please upload a valid image file');
    }
  }

  // Convert the image based on selected format
  convertImage(): void {
    if (this.imageFile && this.selectedFormat) {
      const reader = new FileReader();
      reader.readAsDataURL(this.imageFile);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          // Convert the image to the selected format (e.g., PNG, JPG)
          this.convertToFormat(img, this.selectedFormat);
        };
      };
    }
  }

  // Function to convert the image to the selected format
  convertToFormat(img: HTMLImageElement, format: string): void {
    // Create a canvas to handle the conversion
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);

      // Convert the canvas to the selected format
      const dataUrl = canvas.toDataURL(`image/${format}`);

      // Set the converted image to display
      this.convertedImage = dataUrl;
    }
  }

  // Trigger download of the converted image
  downloadImage(): void {
    if (this.convertedImage) {
      const a = document.createElement('a');
      a.href = this.convertedImage; // Use the converted image data URL
      a.download = `converted-image.${this.selectedFormat}`; // Set the download file name
      a.click(); // Trigger the download
    }
  }

}
