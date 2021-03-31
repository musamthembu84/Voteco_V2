// import { Connect, SimpleSigner } from 'uport-connect'
//
// export let uport = new Connect('Voteco Online Voting', {
//     clientId: '2odhYTskG4Kc6KStjctv6YLqZtpGkTeoQeN',
//     network: 'rinkeby',
//     signer: SimpleSigner('972e3271ad272acc62c6771625c5b8c8ad07a9cc3728544c95e4cadb78559a46')
// })
// export const web3 = uport.getWeb3()

import { Connect } from 'uport-connect'

export let uport = new Connect('Votez')
export const web3 = uport.getWeb3()
