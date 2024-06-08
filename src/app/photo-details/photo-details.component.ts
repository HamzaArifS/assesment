import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.scss',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 100
      }
    },
  ],
})
export class PhotoDetailsComponent {
  photo: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      if (data) {
        data.photo.imageData.imageId = data.photo.imageData.url.split('/').slice(-2).join('/');
        this.photo = data.photo.imageData;
      }
    });
  }
}
