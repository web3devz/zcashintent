import type {
  BaseTokenInfo,
  UnifiedTokenInfo,
} from "@defuse-protocol/defuse-sdk"

type TokenWithTags =
  | (BaseTokenInfo & { tags?: string[] })
  | (UnifiedTokenInfo & { tags?: string[] })

export const LIST_TOKENS: TokenWithTags[] = [
 
  {
    defuseAssetId: "nep141:zec.omft.near",
    type: "native",
    decimals: 8,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1437.png",
    chainId: "",
    chainIcon: "/static/icons/network/zcash-icon-black.svg",
    chainName: "zcash",
    bridge: "poa",
    routes: [],
    symbol: "ZEC",
    name: "Zcash",
    tags: ["mc:12"],
  },
  {
    unifiedAssetId: "near",
    decimals: 24,
    symbol: "NEAR",
    name: "Near",
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
    groupedTokens: [
      {
        defuseAssetId: "nep141:wrap.near",
        address: "wrap.near",
        decimals: 24,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
        chainId: "",
        chainIcon: "/static/icons/network/near.svg",
        chainName: "near",
        bridge: "direct",
        routes: [],
        symbol: "NEAR",
        name: "Near",
      },
      {
        defuseAssetId: "nep141:wrap.near",
        address: "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
        decimals: 24,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
        chainId: "",
        chainIcon: "/static/icons/network/turbochain.png",
        chainName: "turbochain",
        bridge: "aurora_engine",
        routes: [],
        symbol: "NEAR",
        name: "Near",
      },
      {
        defuseAssetId: "nep141:wrap.near",
        address: "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
        decimals: 24,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
        chainId: "",
        chainIcon: "/static/icons/network/aurora.svg",
        chainName: "aurora",
        bridge: "aurora_engine",
        routes: [],
        symbol: "NEAR",
        name: "Near",
      },
    ],
    tags: ["mc:31"],
  },
]