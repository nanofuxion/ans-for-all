import React from 'react';
import { ANS, Badge, ANSContext } from 'ans-for-all';

export default function Home() {

  return (
    <ANS>
      <div className="mb-2">
        <Name />
      </div>
      <Badge />
    </ANS>
  )
}

export function Name() {

  const NameService = React.useContext(ANSContext);

  const {
    address,
    walletConnected,
    ansData,

  } = NameService;

  return (
    walletConnected ?
      <>
        <h1 className="text-3xl font-bold underline" style={{ color: ansData?.address_color }}>
          Welcome {ansData?.currentLabel}
        </h1>
        <br />
        <h1 className="text-xl font-bold" style={{ color: ansData?.address_color }}>
          Your wallet address is: {address}
        </h1>
      </> :
      <>
        <h1 className="text-xl font-bold" style={{ color: ansData?.address_color }}>
          Please Login using an Arweave Wallet
        </h1>
      </>
  )
}