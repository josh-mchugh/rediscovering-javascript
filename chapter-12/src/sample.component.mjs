//A decorator is an intercepting function that is executed at runtime. When JavaScript sees a decorator, it places a call to a function with the name of the decorator.
import { Component } from './component.mjs';

@Component({
    selector: 'contents',
    templateUrl: './sample.component.html'
})
export class SampleComponent {}
