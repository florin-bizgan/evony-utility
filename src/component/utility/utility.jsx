import { Form, Footer, Button, Flex, Navbar } from "..";

const App = () => {
  return (
    <div>
      <Navbar />
      <Flex>
        <Form />
      </Flex>
      <Flex column='row' justify='flex-start' gap='5' padding='10'>
        <Button color='milanoRed'>Download</Button>
        <Button color='lavenderMagenta'>Download</Button>
        <Button color='cornflowerBlue'>Download</Button>
        <Button color='fruitSalad'>Download</Button>
      </Flex>

      <Footer color='shark'>
        <h1>Footer Here</h1>
        <h2>-----------</h2>
      </Footer>
    </div>
  );
};

export default App;
