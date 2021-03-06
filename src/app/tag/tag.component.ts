import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Tag} from '../models/Tag';
import {HistoryServiceService} from '../services/history-service.service';
import {HistoryHolderService} from '../services/wholeHistoryHolder/history-holder.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {ContextMenuComponent} from 'ngx-contextmenu';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tag: Tag;
  @Output() historyChanged: EventEmitter<Tag> = new EventEmitter<Tag>();
  array = [];
  color;
  text;
  id;
  borderRadius: string;
  clickable;
  // @ts-ignore
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  constructor(private historyService: HistoryServiceService,
              private historyHolderService: HistoryHolderService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (isNotNullOrUndefined(this.tag)) {
      this.borderRadius = isNotNullOrUndefined(this.tag.secondaryColor) ? '2px solid ' + this.tag.secondaryColor : '';
      this.clickable = this.tag.clickable;
      this.initArray();
      this.initAttributes();
    }
  }

  initArray() {
    this.array = [];
    const texts: string[] = this.tag.textInside.split(/<.+?>/);

    for (let i = 0; i < Math.max(texts.length, this.tag.children.length); i++) {
      this.array.push(texts[i]);
      this.array.push(this.tag.children[i]);
    }
  }

  private initAttributes() {
    this.color = this.tag.color;
    this.text = this.tag.textInside;
    this.id = this.tag.id;
  }

  isTag(something: any) {
    return typeof something === 'object';
  }

  isText(something: any) {
    return typeof something === 'string';
  }

  changeThisTag(event) {
    try {
      event.stopPropagation();
    } catch (error) {

    }
    if (this.tag.clickable) {
      this.historyService.rerollTag(this.historyHolderService.currentId, this.tag.id).then(
        newHistory => {
          this.historyHolderService.changeHistory(newHistory);
        }
      );
    }
  }

  notImplemented() {
    this.snackBar.open('This feature is not implemented yet.', null, {
      duration: 2300,
    });
  }
}
