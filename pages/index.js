import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import List from '../components/List';
import Map from '../components/Map';
import Place from '../components/Place';

export default function Home() {
  return (
      <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"100vh"} bg={"red"}>
        <Head>
          <title>Travel Advisor</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <List />
        <Map />
      </Flex>
  );
};
