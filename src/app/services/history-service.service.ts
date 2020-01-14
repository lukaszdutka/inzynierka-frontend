import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {History} from '../models/History';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {

  historyUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getHistory(): Promise<History> {
    const url = this.historyUrl + '/history';
    return this.http.get<History>(url).toPromise();
  }

  getHistoryById(historyId: string): Promise<History> {
    const url = this.historyUrl + '/history/' + historyId;
    return this.http.get<History>(url).toPromise();
  }

  rerollTag(historyId: string, tagId: string): Promise<History> {
    const url = this.historyUrl + '/history/' + historyId + '/tag/' + tagId;
    return this.http.get<History>(url).toPromise();
  }
}
