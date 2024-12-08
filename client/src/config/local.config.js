const cuit = 30640241698;
const sellPoint = 4;
const concept = 1;

export const config = {
  hostname: "localhost",
  baseUrl: "http://localhost:3000",
  inviteLink: "http://localhost:3000/invite?inviteId=",
  resourcesLink: "http://localhost:3000/api/resources",
  devMode: true,
  isLocal: true,
  isDevelop: false,
  isProduction: false,
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
