import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgParticlesModule } from 'ng-particles';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatExpansionModule} from '@angular/material/expansion';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHeroComponent } from './product-hero/product-hero.component';


@NgModule({
  declarations: [ProductDetailsComponent, ProductListComponent, ProductHeroComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MatExpansionModule,
    NgParticlesModule,
    NgxSkeletonLoaderModule
  ]
})
export class ProductModule { }