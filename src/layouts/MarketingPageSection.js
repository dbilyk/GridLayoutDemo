import React from 'react';
import ILGrid from './ILGrid';
import {
  GridItem,
  Flex,
  Box,
  useBreakpointValue
} from '@chakra-ui/react';


function MarketingPageSection(){
	const width = useBreakpointValue({base:"100%", md:"50%"})
	return (
	  <ILGrid maxWidth="1500px">
		<GridItem colSpan= {12} backgroundColor='#ddd' height="100%">
		  <Flex overflow="hidden" flexWrap={"wrap"}>
			<Box width={width}>
			  <img src="https://images.unsplash.com/photo-1652904429112-432f2905f2a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965" styles={{
				objectFit:"contain",
				height:"500px",
				width:{width}
			  }}>
			  </img>
			</Box>
			<Box width={width}>
			  <img src="https://images.unsplash.com/photo-1652904429112-432f2905f2a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965" styles={{
				objectFit:"contain",
				height:"500px",
				width:{width}
			  }}>
			  </img>
			</Box>
			
			
			
  
  
		  </Flex>
		  
  
		</GridItem>
		
		
	  </ILGrid>
	)
  }

  export default MarketingPageSection