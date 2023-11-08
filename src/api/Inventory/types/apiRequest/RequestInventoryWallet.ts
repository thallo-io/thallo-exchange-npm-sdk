import { WalletTypes } from '../../enums/WalletTypes.js'
import { RequestInventoryTrade } from './RequestInventoryTrade.js'

export interface RequestInventoryWallet {
    type: WalletTypes
    quantity_grams: string
    trades: RequestInventoryTrade[]
}
