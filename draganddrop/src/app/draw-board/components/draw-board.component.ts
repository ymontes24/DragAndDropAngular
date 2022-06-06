import { Component, OnInit, AfterViewInit } from '@angular/core';
import Drawflow, {
  ConnectionEvent,
  ConnectionStartEvent,
  DrawFlowEditorMode,
  DrawflowConnection,
  DrawflowConnectionDetail,
  DrawflowNode,
  MousePositionEvent,
} from 'drawflow';
import { NodeElement } from 'src/app/core/models/node.model';

@Component({
  selector: 'app-draw-board',
  templateUrl: './draw-board.component.html',
  styleUrls: ['./draw-board.component.css']
})
export class DrawBoardComponent implements OnInit, AfterViewInit {
  nodes: NodeElement[] = [];
  nodesHTML!: NodeListOf<Element>;

  nodesDrawn: any[] = [];
  selectedItem!: NodeElement;
  editor!: any;

  locked: boolean = false;

  lastMousePositionEv: any;

  drawFlowHtmlElement!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {    
  }

}
