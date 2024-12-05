import { useState } from "react";
import { generateMnemonic } from "bip39";
import SolanaWallet from "./SolanaWallet";
// import { EthWallet } from './EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  const clickHandler = async () => {
    const mn = generateMnemonic()
    setMnemonic(mn)
  }
  return (
    <>
      <input type="text" value={mnemonic} />
      <button onClick={clickHandler}>create seed phrase</button>


      {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
      {/* {mnemonic && <EthWallet mnemonic={mnemonic} />} */}
    </>
  )
}