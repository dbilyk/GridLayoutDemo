import {
	Center,
	Grid,
	
} from "@chakra-ui/react"
import LayoutTheme from "../LayoutTheme";


function ILGrid(props) {


	return (

		  <Center w="100vw" >
		  
		  <Grid {...LayoutTheme.Grid} {...props}>
			{props.children}
  
  
		  </Grid>
		  </Center>
	);
  }
  
  export default ILGrid;