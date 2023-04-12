import { Component } from '@angular/core'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { iconsList } from './data/iconsList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tile="Glotov_test"

  constructor(library: FaIconLibrary) {
      library.addIconPacks(fas);
  }

  icons: string[] = iconsList
  icon = "" as IconName
  isBlocked = false

  RandomIcon(arr: string[]) {
      let rand = Math.floor(Math.random() * arr.length);
      this.isBlocked = true
      setTimeout(() => {
          this.isBlocked = false
          this.icon = arr[rand] as IconName
      }, 3000)
  }
}
