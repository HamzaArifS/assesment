import { Component } from '@angular/core';
import { Router, } from '@angular/router';
import { PicsApiService } from '../shared/pics-api.service';
import { Observable, Subscription, catchError, map } from 'rxjs';
import { HttpRequestService } from '../shared/http-request.service';
import { NgOptimizedImage, CommonModule } from '@angular/common'

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss',

})
export class ImageGridComponent {

  data$!: Observable<any>;
  error: any;
  title = 'pics-app-assessment';
  subscription!: Subscription

  constructor(public pics: PicsApiService, private router: Router) { }
  ngOnInit() {
    this.getPicsData();
  }
  getPicsData() {
    this.data$ = this.pics.getJsonPlaceHolderPhotos('/photos')
      .pipe(
        map(data => data.map((item: any) => ({
          ...item,
          extractedId: item.thumbnailUrl.split('/').slice(-2).join('/')
        }))),
        catchError(err => {
          this.error = err;
          throw err;
        })
      )
  }
  loadPhotoData(imageData: any) {
    localStorage.setItem('image', JSON.stringify(imageData));
    this.router.navigate(['details/', imageData.id]);
  }
}
