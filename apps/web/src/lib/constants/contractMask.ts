// We're using a bitmask in order to select the actual contract file we will be using
const MINTABLE = 0x0001;
const BURNABLE = 0x0010;
const PAUSABLE = 0x0100;

export const CONTRACT_MASK = {
	MINTABLE,
	BURNABLE,
	PAUSABLE
} as const;
