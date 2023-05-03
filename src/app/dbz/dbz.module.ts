import { NgModule } from '@angular/core';
import { MainPageComponent } from "./pages/main-page.component";
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/form/character/character.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        MainPageComponent,
        ListComponent,
        CharacterComponent
    ] ,
    
        imports: [
            CommonModule
    ],
        exports: [
        MainPageComponent
    ]

})
export class DbzModule {}