import { Flex } from "../flex";
import * as S from "./contact.style";

const Contact = () => {
  return (
    <S.Contact>
      <Flex align='center' justify='center'>
        <form
          action='https://formsubmit.co/e458e40e4727443618d58737a1c9d47e'
          method='POST'
        >
          <input
            name='name'
            type='text'
            class='feedback-input'
            placeholder='Name'
          />
          <input
            name='email'
            type='text'
            class='feedback-input'
            placeholder='Email'
          />
          <textarea
            name='text'
            class='feedback-input'
            placeholder='Comment'
          ></textarea>
          <input type='submit' value='SUBMIT' />
        </form>
      </Flex>
    </S.Contact>
  );
};

export default Contact;
