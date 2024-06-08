import { Routes } from '@angular/router';
import { PhotoDataResolverService } from './shared/photo-data-resolver.service';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeScreenComponent },
    {
        path: 'details/:id',
        loadComponent: () =>
            import('./photo-details/photo-details.component')
                .then(m => m.PhotoDetailsComponent),
        resolve: { photo: PhotoDataResolverService }
    },
    {
        path: 'gallery',
        loadComponent: () =>
            import('./image-grid/image-grid.component')
                .then(m => m.ImageGridComponent),
        resolve: { photo: PhotoDataResolverService }
    },
];
