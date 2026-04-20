import React from 'react'
import { Flex, Text, Button } from "@radix-ui/themes";

const MyApp=()=> {
	return (
		<Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
	);
}


const App = () => {
  return (
    <div>
      <MyApp/>
    </div>
  )
}

export default App
