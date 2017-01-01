import { Component, AfterContentChecked, AfterContentInit, ContentChildren, ViewChildren, QueryList } from '@angular/core';

import { PlayerProfileDetailEntryComponent } from './player-profile-detail-entry.component';

@Component({
    selector: 'profile-details',
    templateUrl: 'player-profile-details.component.html'
})
export class PlayerProfileDetailsComponent  implements AfterContentInit, AfterContentChecked {
    @ContentChildren(PlayerProfileDetailEntryComponent) contentChildren: QueryList<PlayerProfileDetailEntryComponent>;

    ngAfterContentInit() {
        console.log("PlayerProfileDetailsComponent ngAfterContentInit called");
        console.log(this.contentChildren.toArray());
    }

    ngAfterContentChecked() {
        console.log("PlayerProfileDetailsComponent ngAfterContentChecked called");
    }
 }