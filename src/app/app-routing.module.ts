import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EinkaufComponent } from "./einkauf/einkauf.component";
import { GebaeudeplanerComponent } from "./gebaeudeplaner/gebaeudeplaner.component";
import { ProjektleiterComponent } from "./projektleiter/projektleiter.component";
import { VertriebComponent } from "./vertrieb/vertrieb.component";

const routes: Routes = [
  {
    path: "projektleiter",
    component: ProjektleiterComponent
  },
  {
    path: "vertrieb",
    component: VertriebComponent
  },
  {
    path: "einkauf",
    component: EinkaufComponent
  },
  {
    path: "gebaeudeplaner",
    component: GebaeudeplanerComponent
  }
  // {
  //   path: 'books',
  //   loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  //   canActivate: [CanActivateToAdminGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
