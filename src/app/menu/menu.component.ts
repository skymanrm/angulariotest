import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit() {
  }

  changeLang(): void {
    const newLang = this.translate.currentLang === 'en' ? 'ru' : 'en';
    this.translate.use(newLang);
  }
}
