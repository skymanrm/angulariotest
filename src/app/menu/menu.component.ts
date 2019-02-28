import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalstorageService} from '../data/services/localstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuOpened = false;

  constructor(
    private localstorageService: LocalstorageService,
    private translate: TranslateService,
  ) {
    const lang = localstorageService.getLang('en');
    translate.setDefaultLang(lang);
    translate.use(lang);
  }

  changeLang(): void {
    const newLang = this.translate.currentLang === 'en' ? 'ru' : 'en';
    this.translate.use(newLang);
    this.localstorageService.setLang(newLang);
  }

  getMenuClassname(): string {
    let classname = 'fullscreenmenu mat-calendar-body-selected';
    if (this.menuOpened) {
      classname += ' opened';
    }
    return classname;
  }
}
