import { Component, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
    selector: 'profile-detail-entry',
    templateUrl: 'player-profile-detail-entry.component.html'
})
export class PlayerProfileDetailEntryComponent implements AfterContentInit, AfterContentChecked {
    ngAfterContentInit() {
        console.log("PlayerProfileDetailEntryComponent ngAfterContentInit called");
    }

    ngAfterContentChecked() {
        console.log("PlayerProfileDetailEntryComponent ngAfterContentChecked called");
    }
 }