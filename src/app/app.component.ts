import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'projeto-angular';

  mostrarMenu: boolean = true;

  constructor(private _loginService: LoginService) {

  }

  ngOnInit(): void {
    this._loginService.getMostraMenu().subscribe(
      response => {
        this.mostrarMenu = response;
      }
    )
  }

  ngOnDestroy(){
    localStorage.clear();
  }
}
