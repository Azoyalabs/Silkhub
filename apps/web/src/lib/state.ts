import type { GetAccountReturnType } from '@wagmi/core';
import { writable } from 'svelte/store';


// FIXME: on va le passer en contexte
export const USER_ACCOUNT = writable<GetAccountReturnType | null>(null);
