import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataParserPipe } from '../data-parser.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() config;
  @Input() data;

  constructor() { }

  ngOnInit() {
    console.log('hola', this.config)
    console.log('sup vato', this.data)
  }

}
