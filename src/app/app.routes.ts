import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./home/home").then(m => m.Home)
    },
    {
        path: 'customer',
        loadComponent: () => import("./customer/customer").then(m => m.Customer)
    }
];
