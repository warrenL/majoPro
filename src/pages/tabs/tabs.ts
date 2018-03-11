import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * The class used to support functions for tabs page.
 *
 */
@IonicPage({
  name: 'tabs-page',
  segment: 'tabs',
  priority: 'high'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'group-calendar-page';
  tab2Root = 'group-list-page';
  tab3Root = 'search-page';
  tab4Root = 'profile-page';

  constructor() {
  }
}
