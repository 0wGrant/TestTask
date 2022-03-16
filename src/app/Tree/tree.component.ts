import {Component, OnInit} from '@angular/core';
import { MatTreeNestedDataSource} from '@angular/material/tree';
import { NestedTreeControl} from '@angular/cdk/tree';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ExpContainer, ResponseTemp} from './ExpenditureContainer';




interface CourseNode {
  name: string;
  children?: CourseNode[];
}





const TREE_DATA: CourseNode[] = [
  {
    name: '1',
    children: [
      {
        name: '1 1'
      },
      {
        name: '1 2'
      },
      {
        name: '1 3'
      }
    ],
  },
  {
    name: '2',
    children: [
      {
        name: '2 1',
        children: [
          {
            name: '2 1 1'
          },
          {
            name: '2 1 2'
          }
        ],
      },
      {
        name: '2 2',
        children: [
          {
            name: '2 2 1'
          },
          {
            name: '2 2 2'
          }
        ],
      },
    ],
  },
];

@Component({
  selector: 'tree-comp',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css']
})
export class TreeComponent implements OnInit {

    public response: any;

    constructor(public expContainer: ExpContainer) {}

    
    nestedDataSource = new MatTreeNestedDataSource<CourseNode>();

    nestedTreeControl = new NestedTreeControl<CourseNode>(node => node.children);

  ngOnInit(): void {

    this.expContainer.getExpenditure().subscribe(
        data => {this.response = data
        console.log(this.response)}
    );


    this.nestedDataSource.data = TREE_DATA;

  }


    hasNestedChild(index: number, node:CourseNode) {
      if((node == null || undefined) || (node.children == null || undefined) || (node.children.length == 0))
        return false;
      else
        return true;  
    }


}