import { Form, Footer, Button, Flex } from "..";

const App = () => {
  return (
    <div>
      <Flex>
        <Form />
      </Flex>
      <Flex
        column="row"
        justify="flex-start"
        // align="center"
        gap="5"
        padding="10"
      >
        <Button color="milanoRed">Download</Button>
        <Button color="lavenderMagenta">Download</Button>
        <Button color="cornflowerBlue">Download</Button>
        <Button color="fruitSalad">Download</Button>
      </Flex>

      <Footer color="shark" />
    </div>
  );
};

export default App;
