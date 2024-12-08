const cuit = 30640241698;
const sellPoint = 4;
const concept = 1;

export const config = {
  hostname: "crear-prod-532897b63fc6.herokuapp.com",
  baseUrl: "https://crear-prod-532897b63fc6.herokuapp.com",
  inviteLink: "https://crear-prod-532897b63fc6.herokuapp.com/invite?inviteId=",
  resourcesLink: "https://crear-prod-532897b63fc6.herokuapp.com/api/resources",
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
