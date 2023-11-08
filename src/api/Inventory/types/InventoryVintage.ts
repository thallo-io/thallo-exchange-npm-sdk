import { InventoryWallet } from './InventoryWallet.js'

export interface InventoryVintage {
    vintageId: string
    wallets: InventoryWallet[]
}
