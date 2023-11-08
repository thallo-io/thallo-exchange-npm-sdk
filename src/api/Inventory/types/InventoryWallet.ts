import { WalletTypes } from '../enums/WalletTypes.js'
import { InventoryTrade } from './InventoryTrade.js'

export interface InventoryWallet {
    type: WalletTypes
    quantityGrams: BigInt
    trades: InventoryTrade[]
}
