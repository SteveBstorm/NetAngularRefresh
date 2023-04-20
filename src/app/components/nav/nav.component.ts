import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/link.model';
import { FakeService } from '../demo/demo5/fake.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien : Link[] = [
    {title : "Home", url : "home"},
    {title : "Démos", children : [
      {title : "Bindings", url : "demo/demo1"},
      {title : "Pipes", url : "demo/demo2"},
      {title : "validator", url : "demo/demo4"},
    ]},
    {title : "Exercices"}
  ]
  constructor(
    private service : FakeService
  ) { }

  isConnected! : boolean

  ngOnInit(): void {
    this.service.isConnectedSubject.subscribe({
      next : (info : boolean) => this.isConnected = info
    })
  }

  logout() {
    this.service.logout()
  }

  switchChildrenVisible(index : number) {
    this.listeLien[index].isChildrenVisible = true
  }

}
