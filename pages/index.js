import Head from 'next/head'
import Image from 'next/image'

import SearchBar from '../Components/SearchBar';
import Coinlist from '../Components/Coinlist';

export default function Home({filteredCoins}) {
  console.log(filteredCoins);
  return (
    <div>
      <Head>
        <title>title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <SearchBar/>
     <Coinlist filteredCoins={filteredCoins} />


      
    </div>
  )





}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  };
};