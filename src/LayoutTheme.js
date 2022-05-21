const LayoutTheme = {
	Grid:{
		templateColumns:{base:"repeat(6,1fr)", md:"repeat(12,1fr)"}, 
		gap:[4,8,10], 
		width:"100%",
		maxWidth:"1200px", 
		marginX:[6,9,12,null,"auto"],

	},

	GridItem:{
		backgroundColor:"#33333311", 
		colSpan:[6,null,12],
	},
	
	VStack:{
		width:"100%",
		spacing:[3,null,null,4],
		justify:"left"
	},

	HStack:{
		spacing:[3,null,null,4],
		justify:"center"
	},

	Flex:{
		Row:{
			width:"100%",
			justifyContent:"space-between",
			flexDirection:"row",
			alignItems:"center",
		},

		Col:{
			height:"100%",
			justifyContent:"start",
			flexDirection:"column",
		},
		Center:{
			flexDirection:"row",
			width:"100%",
			height:"100%",
			justifyContent:"center",
			alignItems:"center",


		}
	},
	Box:{
		width:"100%",
		padding:[3,null,4,6],
		backgroundColor:"#33333311"
	},
	

	Text:{
		H0:{
			fontSize:["2.011rem","2.488rem", "3.052rem"],
			fontWeight:600
		},
		H1:{
			fontSize:["1.749rem","2.074rem", "2.441rem"],
			fontWeight:600
		},

		H2:{
			fontSize:["1.521rem","1.728rem", "1.953rem"],
			fontWeight:600
		},

		H3:{
			fontSize:["1.322rem","1.44rem","1.563rem"],
			fontWeight:600
		
		},
		H4:{
			fontSize:["1.15rem","1.2rem", "1.25rem"]
		},
		body:{
			fontSize:["1rem"]
		},
		body2:{
			fontSize:["0.87rem","0.833rem", "0.8rem"]
		},
	}




}

export default LayoutTheme