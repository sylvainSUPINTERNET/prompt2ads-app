import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: "",
    //     loadComponent: () => import("./old/home/home").then(m => m.Home)
    // },
    // {
    //     path: "customer",
    //     loadComponent: () => import("./old/customer/customer").then(m => m.Customer)
    // },
    // {
    //     path: "dashboard",
    //     loadComponent: () => import("./old/dashboard/dashboard").then(m => m.Dashboard)
    // }

    {
        path: "projects",
        loadComponent: () => import("./projects/projects").then(m => m.Projects)
    }
];
