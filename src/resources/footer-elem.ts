import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject()
export class FooterElem {
    thisYear = new Date().getFullYear();
    
    constructor(private router: Router) {
    }
    toImpressum() {
        this.router.navigateToRoute('impressum');
    }
    toHome() {
        this.router.navigateToRoute('home');
    }
}