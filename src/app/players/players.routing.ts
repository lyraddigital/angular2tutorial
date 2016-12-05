import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerListComponent } from './player-list/player-list.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { 
        path: 'players',
        component: PlayerListComponent
    },
    { 
        path: 'register/player',
        component: RegistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayersRoutingModule { }