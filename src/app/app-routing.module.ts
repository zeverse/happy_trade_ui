import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteConfigList } from "./common/config/nav.config";
import {LayoutModule} from "./_layout/layout.module";

const routes: Routes = RouteConfigList;

@NgModule({
	imports: [RouterModule.forRoot(routes), LayoutModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
