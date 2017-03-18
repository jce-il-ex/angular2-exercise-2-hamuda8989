import { Component, Input } from '@angular/core';

@Component({
    selector: 'nav-item',
    templateUrl:'./navitem.component.html'

})
export class NavItemComponent
{
   @Input() name:string;
}