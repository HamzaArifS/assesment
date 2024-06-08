
import { provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpRequestService } from './shared/http-request.service';
import { PicsApiService } from './shared/pics-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
  providers: [provideImgixLoader('https://via.placeholder.com'),HttpRequestService,PicsApiService]
})
export class AppComponent {
  title = 'pics-app-assessment';
  constructor() { }


}
