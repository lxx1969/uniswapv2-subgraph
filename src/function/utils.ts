import { Contract } from '@ethersproject/contracts'
import { AddressZero } from '@ethersproject/constants'
import { getAddress } from '@ethersproject/address'

export function getContract(address: string, ABI: any): Contract {
    if (!isAddress(address) || address === AddressZero) {
      throw Error(`Invalid 'address' parameter '${address}'.`)
    }
  
    return new Contract(address, ABI,"0xd9F5E4025D7B049B7A810D0552F3F8B4AD1f8560")
  }
  


export function isAddress(value: any): string | false {
    try {
        return getAddress(value)
    } catch {
        return false
    }
}


// export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
//     return account ? getSigner(library, account) : library
//   }


// export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
//     return library.getSigner(account).connectUnchecked()
//   }
  
