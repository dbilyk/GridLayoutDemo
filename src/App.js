import React from 'react';
import ILGrid from './layouts/ILGrid';
import LT from './LayoutTheme';

import {
  ChakraProvider,
  GridItem,
  Button,
  Flex,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Center,
  Grid,
  theme,
  SimpleGrid,
  useBreakpointValue,
  HStack
} from '@chakra-ui/react';

import MarketingPageSection from './layouts/MarketingPageSection';


const gridItemProps = {
  backgroundColor:"#ccc",
  colSpan:6,
  borderRadius:4
  
}


function ColumnDemo(){
  return (
    <ILGrid>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      <GridItem backgroundColor='#ddd' height={200}></GridItem>
      
    </ILGrid>
  )
}






function App() {

  return (

    <ChakraProvider theme={{
        ...theme,
        styles:{
          global:{
            "html":{
              fontSize:["93.8%",null, "16px"]
            }
          }
        }
      }}>


        {/* {ColumnDemo()} */}


        {/* <MarketingPageSection></MarketingPageSection> */}
        
        <VStack {...LT.VStack} maxWidth={["500px"]} backgroundColor={"#ff999933"}>
          <Text {...LT.Text.H0}>Lorem Ipsum</Text>
          <Text {...LT.Text.H1}>Lorem Ipsum</Text>
          <Text {...LT.Text.H2}>Lorem Ipsum</Text>
          <Text {...LT.Text.H3}>Lorem Ipsum</Text>
          <Text {...LT.Text.H4}>Lorem Ipsum</Text>
          <Text {...LT.Text.body}>Lorem Ipsum</Text>
          <Text {...LT.Text.body2}>Lorem Ipsum</Text>

        </VStack> 




        


      
    </ChakraProvider>
  );
}

export default App;
