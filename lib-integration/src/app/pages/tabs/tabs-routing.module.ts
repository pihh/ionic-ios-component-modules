import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      { path: "tab1", loadChildren: "../home/home.module#HomePageModule" },
      { path: "tab2", loadChildren: "../games/games.module#GamesPageModule" },
      { path: "tab3", loadChildren: "../apps/apps.module#AppsPageModule" },
      {
        path: "tab4",
        loadChildren: "../updates/updates.module#UpdatesPageModule"
      },
      { path: "tab5", loadChildren: "../search/search.module#SearchPageModule" }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
