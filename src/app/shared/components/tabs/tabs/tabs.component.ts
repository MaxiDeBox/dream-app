import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabsService } from '../services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  @Input() set selectedTab(selectedTab: string) {
    if (this.tabs) {
      this.activateTabByTabName(selectedTab);
    }
  }

  constructor(private _tabService: TabsService) {}

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach((itemTab: TabComponent) => itemTab.active = false);
    // activate the tab the user has clicked on.
    tab.active = true;
    this._tabService.$activeTab.next(tab.tabName);
  }

  activateTabByTabName(tabName: string) {
    const activeTab = tabName ? this.tabs.find((item) => item.tabName === tabName) : null;
    if (activeTab) {
      this.selectTab(activeTab);
    }
  }
}
