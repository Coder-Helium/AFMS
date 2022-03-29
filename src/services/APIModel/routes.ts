export interface IRoutes {
    routes:IRoute[]
}
export interface IRoute {
    path: string,
    component: any,
    routes?: IRoute[]
}
