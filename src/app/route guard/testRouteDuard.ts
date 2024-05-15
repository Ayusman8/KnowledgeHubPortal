import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsercomponentComponent } from "../usercomponent/usercomponent.component";
import { Observable } from "rxjs";

export function canDeactivateFunctionGuard(
    component: UsercomponentComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return component.canExit();
}