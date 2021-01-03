import { Injectable } from '@angular/core';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

@Injectable({
  providedIn: 'root'
})
export class CyrillicToTranslitService {
  cyrillicToTranslit = new CyrillicToTranslit({ preset: 'uk' });

  constructor() { }

  getTranslitFromCyrillic(str: string): string {
    const replacedStr = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '_');
    this.cyrillicToTranslit = new CyrillicToTranslit({ preset: 'uk' });
    return this.cyrillicToTranslit.transform(replacedStr.toLowerCase().trim(), '_');
  }
}
