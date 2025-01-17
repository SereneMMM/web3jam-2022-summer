export const unlistFromSaleTx = `
import NFTMarketplace from 0xf2011014fb9bee77
transaction(id: UInt64) {
  prepare(acct: AuthAccount) {
    let saleCollection = acct.borrow<&NFTMarketplace.SaleCollection>(from: /storage/MySaleCollection)
                            ?? panic("This SaleCollection does not exist")
    saleCollection.unlistFromSale(id: id)
  }
  execute {
    log("A user unlisted an NFT for Sale")
  }
}
`