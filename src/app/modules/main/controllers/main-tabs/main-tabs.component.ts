import { Component, OnInit } from '@angular/core';
import { TabsService } from '../../../../shared/components/tabs/services/tabs.service';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.scss']
})
export class MainTabsComponent implements OnInit {

  constructor(public tabService: TabsService) { }

  ngOnInit(): void {
  }

  activeTab(tab: string) {
    this.tabService.$activeTab.next(tab);
  }

}
