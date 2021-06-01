import { ChainId } from '@dcl/schemas'
import { abis } from '../abis'

export const collectionStore = {
  [ChainId.MATIC_MUMBAI]: {
    version: '1',
    abi: abis.CollectionStore,
    address: '0x6ddF1b1924DAD850AdBc1C02026535464Be06B0c',
    name: 'Decentraland Collection Store',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '1',
    abi: abis.CollectionStore,
    address: '0x843b56E58949e71D480Ef9C4F9b0F3304Ea9927C',
    name: 'Decentraland Collection Store',
    chainId: ChainId.MATIC_MAINNET
  }
}
