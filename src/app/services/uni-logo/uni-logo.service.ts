import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniLogoService {

  constructor() { }

  getAll():String[]{
    // Be wary of paths, in the video Nasir used absolute paths for some reason...
    return [
      '/assets/images/uni-logo-images/UPEI-Logo-Rounded.png',
      '/assets/images/uni-logo-images/JYU-Logo-Rounded.png',
      // Add more paths here when created... 
    ]
  }
}
