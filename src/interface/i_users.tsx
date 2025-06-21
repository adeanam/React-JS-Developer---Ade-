import type { IRepository } from './i_repository';

export interface IUser{
    incomplete_results: boolean;
    items: IItemsUser[];
    total_count: number;
}

export interface IItemsUser{
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
    user_view_type: string;
    list_repository?: IRepository[];
}

export interface IExpadedUser{
    [key: number]: boolean
}