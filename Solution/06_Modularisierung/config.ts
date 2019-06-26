export interface IAppConfig {
    color: string;
    routes: string[];
}

export const theAppConfig: IAppConfig = {
    color: 'red',
    routes: ['home', 'list'],
};
