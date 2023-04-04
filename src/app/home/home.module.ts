import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeProductsComponent } from './home-products/home-products.component';

@NgModule({
    declarations: [HomeComponent, HomeProductsComponent],
    imports: [CommonModule, HomeRoutingModule, SharedModule]
  })
  export class HomeModule {}