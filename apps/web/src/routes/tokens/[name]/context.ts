import { getContext } from 'svelte';
import { type Writable } from 'svelte/store';

export enum LayoutLink {
    Home = '',
    Analytics = 'analytics',
    // Profile = '#',
}
export const CONTEXT_KEY = "LAYOUT";



export function getLayoutContext(){
    return getContext(CONTEXT_KEY);
}

export function setLayoutContext(link: LayoutLink){
    const layout = getContext<Writable<LayoutLink>>(CONTEXT_KEY);
    layout.set(link);
}