import { Injectable } from '@angular/core';
import data from '../../../assets/database/db.json';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  private data: any[] = [];

  constructor() {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  getUsers() {
    return this.data.map(v => v['EMAIL_ID']);
  }
}
