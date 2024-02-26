/**
 * Schema for lists of tokens compatible with the Uniswap Interface
 */
export interface TokenList {
	/**
	 * Keywords associated with the contents of the list; may be used in list discoverability
	 */
	keywords?: string[];
	/**
	 * A URI for the logo of the token list; prefer SVG or PNG of size 256x256
	 */
	logoURI?: string;
	/**
	 * The name of the token list
	 */
	name: string;
	/**
	 * A mapping of tag identifiers to their name and description
	 */
	tags?: { [key: string]: TagDefinition };
	/**
	 * The timestamp of this list version; i.e. when this immutable version of the list was
	 * created
	 */
	timestamp: Date;
	/**
	 * A mapping of key 'chainId_tokenAddress' to its corresponding token object
	 */
	tokenMap?: { [key: string]: TokenInfo };
	/**
	 * The list of tokens included in the list
	 */
	tokens: TokenInfo[];
	version: Version;
	[property: string]: any;
}

/**
 * Definition of a tag that can be associated with a token via its identifier
 */
export interface TagDefinition {
	/**
	 * A user-friendly description of the tag
	 */
	description: string;
	/**
	 * The name of the tag
	 */
	name: string;
}

/**
 * Metadata for a single token in a token list
 */
export interface TokenInfo {
	/**
	 * The checksummed address of the token on the specified chain ID
	 */
	address: `0x${string}`;
	/**
	 * The chain ID of the Ethereum network where this token is deployed
	 */
	chainId: number;
	/**
	 * The number of decimals for the token balance
	 */
	decimals: number;
	extensions?: Record<string, unknown>;
	/**
	 * A URI to the token logo asset; if not set, interface will attempt to find a logo based on
	 * the token address; suggest SVG or PNG of size 64x64
	 */
	logoURI?: string;
	/**
	 * The name of the token
	 */
	name: string;
	/**
	 * The symbol for the token
	 */
	symbol: string;
	/**
	 * An array of tag identifiers associated with the token; tags are defined at the list level
	 */
	tags?: string[];
}

/**
 * The version of the list, used in change detection
 */
export interface Version {
	/**
	 * The major version of the list. Must be incremented when tokens are removed from the list
	 * or token addresses are changed.
	 */
	major: number;
	/**
	 * The minor version of the list. Must be incremented when tokens are added to the list.
	 */
	minor: number;
	/**
	 * The patch version of the list. Must be incremented for any changes to the list.
	 */
	patch: number;
}
