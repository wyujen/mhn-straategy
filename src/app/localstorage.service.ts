import { Injectable, IterableDiffers } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  // 保存數據到SessionStorage
  saveToSessionStorage(key: string, value: any): void {
    // console.log('item', JSON.stringify(value))
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // 從SessionStorage讀取數據
  getFromSessionStorage(key: string): any {
    const item = sessionStorage.getItem(key);
    // console.log('item', item)
    return item ? JSON.parse(item) : null;
  }

  // 清除SessionStorage的特定項目
  removeFromSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  constructor() { }
}
