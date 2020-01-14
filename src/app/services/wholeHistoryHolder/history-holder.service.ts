import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {History} from '../../models/History';

@Injectable({
  providedIn: 'root'
})
export class HistoryHolderService {

  private defaultHistory: {
    id: 'no-id',
    origin: {
      children: [], color: '#DD1144', id: 'no-history', textInside: 'There is no history. Sorry.', clickable: true, secondaryColor: ''
    }
  };


  private historySource = new BehaviorSubject<History>(this.defaultHistory);

  currentHistory = this.historySource.asObservable();
  currentId = undefined;


  constructor() {
  }

  changeHistory(history: History) {
    this.historySource.next(history);
  }
}
