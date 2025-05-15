import { Injectable } from '@angular/core';
import Config from '../../../assets/config.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfigFile() {
    return of (Config);
  }
}
