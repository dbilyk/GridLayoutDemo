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
              fontSize:["93.8%",null, "112.5%"]
            }
          }
        }
      }}>


        {ColumnDemo()}


        {/* <MarketingPageSection></MarketingPageSection> */}
        



        <ILGrid maxWidth="1500px">
          <GridItem {...LT.GridItem}>
            <Flex {...LT.Flex.Row} flexWrap="wrap" overflow="hidden">
            
              <Flex {...LT.Flex.Center} width={["100%",null,"50%"]}>
                <img src="https://images.unsplash.com/photo-1652904429112-432f2905f2a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965" styles={{
                objectFit:"contain",
                overflow:"hidden",
                bottom:0,
                left:0,
                }}>
                </img>
              </Flex>
            
              <Flex {...LT.Flex.Center} width={["100%",null,"50%"]}>
                <VStack {...LT.VStack}>
                  <Text {...LT.Text.H0}>Lorem Ipsum</Text>
                  <Text {...LT.Text.H1}>Lorem Ipsum</Text>
                  <Text {...LT.Text.H2}>Lorem Ipsum</Text>
                  <Text {...LT.Text.H3}>Lorem Ipsum</Text>
                  <Text {...LT.Text.H4}>Lorem Ipsum</Text>
                  <Text {...LT.Text.body}>Lorem Ipsum</Text>
                  <Text {...LT.Text.body2}>Lorem Ipsum</Text>

                </VStack>
              </Flex>
            </Flex>
		  
  
		      </GridItem>
		
		
	      </ILGrid>





        <ILGrid>
          {/* This is a panel */}
          <GridItem {...LT.GridItem} colSpan={[6]}>
            
            <VStack {...LT.VStack} spacing={[8,12,16]}>
              <VStack {...LT.VStack}>
                <Flex {...LT.Flex.Row}>
                  <HStack {...LT.HStack}>
                    <Text {...LT.Text.H3}>Some Heading</Text>
                  </HStack>

                  <HStack {...LT.HStack}>
                    
                    <Button>action</Button>
                  </HStack>
                </Flex>

                <Flex {...LT.Flex.Row}>
                  <HStack {...LT.HStack}>
                    <Text {...LT.Text.H3}>Some Heading</Text>
                  </HStack>

                  <HStack {...LT.HStack}>
                    
                    <Button>action</Button>
                  </HStack>
                </Flex>

                <Flex {...LT.Flex.Row}>
                  <HStack {...LT.HStack}>
                    <Text {...LT.Text.H3}>Some Heading</Text>
                  </HStack>

                  <HStack {...LT.HStack}>
                    
                    <Button>action</Button>
                  </HStack>
                </Flex>

              </VStack>

              <VStack {...LT.VStack}>
                <Box {...LT.Box}></Box>
                <Box {...LT.Box}></Box>
                <Box {...LT.Box}></Box>
                <Box {...LT.Box}></Box>
                <Box {...LT.Box}></Box>
              </VStack>
            </VStack>


            
          </GridItem>


          {/* This is a panel */}
          <GridItem {...LT.GridItem} colSpan={[6]}>

            <Box {...LT.Box}>
                
                <VStack {...LT.VStack}>
                  <Flex {...LT.Flex.Row}>
                    
                    <Text {...LT.Text.H4}>This is some text</Text>
                    
                    
                    <HStack {...LT.HStack}>
                      <Box {...LT.Box}>A</Box>
                      <Box {...LT.Box}>b</Box>
                    </HStack>
                  </Flex>

                
                <Box {...LT.Box}></Box>
              </VStack>
              </Box>
          </GridItem>
          
        </ILGrid>


        <ILGrid>
          
          <GridItem colStart={2} colEnd={8}>
              <Box {...LT.Box}>This is a box</Box>
              <Box {...LT.Box}>This is a box</Box>
              <Box {...LT.Box}>This is a box</Box>
              <Box {...LT.Box}>This is a box</Box>
              <Box {...LT.Box}>This is a box</Box>
              <Box {...LT.Box}>This is a box</Box>
          </GridItem>




          <GridItem colStart={8} colEnd={12}>
            <Box {...LT.Box}>This is a rail</Box>
            <Box {...LT.Box}>This is a rail</Box>
            <Box {...LT.Box}>This is a rail</Box>
            <Box {...LT.Box}>This is a rail</Box>
          </GridItem>



        </ILGrid>


      
    </ChakraProvider>
  );
}

export default App;
