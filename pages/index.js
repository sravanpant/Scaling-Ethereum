import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import Image from "next/image";
import cryptoImg from "/public/assets/crypto1.png";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to Mumbai");
      throw new Error("Change network to Mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
    console.log(window.location.pathname);
  }, [walletConnected]);

  return (
    <>
      <div className="p-15  bg-gradient-to-r from-[#ECF9FF] to-[#FFF8EA]">
        <Header />
        <Navbar one="CryptoFi" two="LendFi" three="AlgoFi" />
        <div className="flex flex-row pt-40">
          <div className="mr-20 mt-5 mb-20 ml-[100px]">
            <Image src={cryptoImg} alt="/" height="1500" width="1500" />
          </div>
          <div className="p-10">
            <div className="pt-[120px] px-20">
              <span className="text-4xl text-start text-gray-500 ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div></div>
        <Footer />
      </div>
    </>
  );
}
