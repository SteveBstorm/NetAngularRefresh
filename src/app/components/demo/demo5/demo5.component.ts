import { Component, OnInit } from '@angular/core';
import { FakeService } from './fake.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  isConnected! : boolean
  constructor(
    private service : FakeService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.service.isConnectedSubject.subscribe({
      next : (info : boolean) => this.isConnected = info
    })
  }

  login() {
    this.service.login()
    this.router.navigate(["demo/demo1"])
  }

  logout() {
    this.service.logout()
  }
}
