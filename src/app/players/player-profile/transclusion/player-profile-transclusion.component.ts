import { Component, ContentChild, AfterContentInit } from '@angular/core';

import { PlayerProfileHeadingComponent } from './player-profile-heading.component';

@Component({
    selector: 'player-profile',
    templateUrl: 'player-profile-transclusion.component.html'
})
export class PlayerProfileTransclusionComponent implements AfterContentInit {
    @ContentChild(PlayerProfileHeadingComponent) playerProfileHeadingComponent: PlayerProfileHeadingComponent;

    ngAfterContentInit() {
        console.log('PlayerProfileTransclusionComponent ngAfterContentInit called.')
        console.log(this.playerProfileHeadingComponent);
    }

    ngAfterContentChecked() {
        console.log('PlayerProfileTransclusionComponent ngAfterContentChecked called.')
    }
 }