const cuit = 30640241698;
const sellPoint = 4;
const concept = 1;

export const config = {
  hostname: "meli-facturin-652baafb21fd.herokuapp.com",
  baseUrl: "https://meli-facturin-652baafb21fd.herokuapp.com",
  inviteLink: "https://meli-facturin-652baafb21fd.herokuapp.com/invite?inviteId=",
  resourcesLink: "https://meli-facturin-652baafb21fd.herokuapp.com/api/resources",
  devMode: false,
  devel: false,
  isLocal: false,
  isDevelop: false,
  isProduction: true,
  invoice: {
    receiptType: '011',
    miPyMEReceiptType: '211',
    sellPoint: sellPoint,
    concept: concept,
    cuit: cuit,
  },
  receipt: {
    receiptType: '015',
    miPyMEReceiptType: '211',
    sellPoint: sellPoint,
    concept: concept,
    cuit: cuit,
  },
  creditNote: {
    receiptType: '013',
    miPyMEReceiptType: '213',
    sellPoint: sellPoint,
    concept: concept,
    cuit: cuit,
  },
  debitNote: {
    receiptType: '012',
    miPyMEReceiptType: '212',
    sellPoint: sellPoint,
    concept: concept,
    cuit: cuit,
  }
}
