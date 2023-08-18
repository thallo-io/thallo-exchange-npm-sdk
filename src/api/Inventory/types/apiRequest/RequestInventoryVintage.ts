import { RequestInventoryWallet } from './RequestInventoryWallet.js'

export interface RequestInventoryVintage {
    vintage_id: string
    wallets: RequestInventoryWallet[]
}
