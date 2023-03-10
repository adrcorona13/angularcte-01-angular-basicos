import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/heroe.module';
import { ContadorModule } from './contador/contador.module';
import { DragonballModule } from './dragonball/dragonball.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DragonballModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
