import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoDataResolverService implements Resolve<any> {
  private isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (this.isBrowser) {
      let imageData = (localStorage.getItem('image'));
      if (imageData) {
        imageData = JSON.parse(imageData)
      }
      return of({ id, imageData });
    }
    return of(null)
  }
}
