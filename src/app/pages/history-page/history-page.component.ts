import {Component, OnInit} from '@angular/core';
import {Tag} from '../../models/Tag';
import {History} from '../../models/History';
import {HistoryServiceService} from '../../services/history-service.service';
import {HistoryHolderService} from '../../services/wholeHistoryHolder/history-holder.service';
import {isNullOrUndefined} from 'util';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  private tag: Tag;

  isDataAvailable = false;
  history = 'History:';
  reload = true;

  constructor(private historyService: HistoryServiceService, private historyHolderService: HistoryHolderService) {
  }

  ngOnInit() {
    if (isNullOrUndefined(this.tag)) {
      if (typeof this.historyHolderService.currentId === 'undefined') {
        this.historyService.getHistory()
          .then(history => {
            this.historyHolderService.currentHistory.subscribe(his => this.doSomething(history, his));
            this.historyHolderService.changeHistory(history);
            this.isDataAvailable = true;
          });
      } else {
        this.historyService.getHistoryById(this.historyHolderService.currentId)
          .then(history => {
            this.historyHolderService.currentHistory.subscribe(his => this.doSomething(history, his));
            this.historyHolderService.changeHistory(history);
            this.isDataAvailable = true;
          });
      }
    }
  }

  doSomething(history: History, his: History) {
    this.tag = isNotNullOrUndefined(his) ? his.origin : history.origin;
    this.historyHolderService.currentId = isNotNullOrUndefined(his) ? his.id : history.id;
    console.log('main tag history changed');

    setTimeout(() => this.reload = false);
    setTimeout(() => this.reload = true);
  }
}
