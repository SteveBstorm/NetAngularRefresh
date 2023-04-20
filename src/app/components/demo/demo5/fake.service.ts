import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  userList : any = [
    {email : "toto@toto.com", pwd : "toto"}
  ]

  get isConnected() : boolean {
    return JSON.parse(localStorage.getItem("status") ?? "false")
  }

  constructor() { }

  isConnectedSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected)

  login() {
    //this.isConnected = true
    localStorage.setItem("status", JSON.stringify(true))
    this.isConnectedSubject.next(this.isConnected)
  }

  logout() {
    //this.isConnected = false
    localStorage.clear()
    this.isConnectedSubject.next(this.isConnected)

  }
}
