import { Flex } from "../flex";
import * as S from "./about.style";

const About = () => {
  return (
    <S.About>
      <Flex column='column' gap='50'>
        <div align='center'>
          <h1>Evony Utility</h1>
        </div>
        <div>
          <h2>What is Evony?</h2>
          <br />
          <p>
            Evony is a game on Android and iOS that I play here and there and
            this tool aims to help players to plan better they're future
            improvements.
          </p>
          <p>
            This first update is something like a calculator where the player
            can input the desired number of troops and the quantity and will get
            in return the entire amount of resources required.
          </p>
          <p>
            This will be just the first phase of this tool where in the future
            you can do more things and not just to find the amount of
            ressources. In time you will be able to discover also the required
            amount of time to train those troops, all levels from Lv1 to Lv15.
          </p>
        </div>
      </Flex>
    </S.About>
  );
};

export default About;
