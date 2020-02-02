import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "home",
    component: TabsPage,
    children: [
      { path: "news", loadChildren: "../home/home.module#HomePageModule" },
      { path: "games", loadChildren: "../games/games.module#GamesPageModule" },
      { path: "apps", loadChildren: "../apps/apps.module#AppsPageModule" },
      {
        path: "updates",
        loadChildren: "../updates/updates.module#UpdatesPageModule"
      },
      { path: "search", loadChildren: "../search/search.module#SearchPageModule" }
    ]
  },
  {
    path: "",
    redirectTo: "/home/news",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
