import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { PipeModule } from './pipes/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonModule } from './shared/skeleton/skeleton.module';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PipeModule,
    CarouselModule,
    SidebarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    SkeletonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
