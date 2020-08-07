import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../interface/project.interface';
import { ISkeleton } from '../interface/skeleton.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: IProject;
  @Input() skeleton: ISkeleton;

  constructor() { }

  ngOnInit() {
  }

}
