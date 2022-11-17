import { Flex } from "../flex";
import * as S from "./about.style";

const About = () => {
  return (
    <S.About>
      <Flex column='column' gap='50'>
        <div align='center' className='container'>
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
          <br />
          <p>
            Please use this Evony Troop Cost Calculator to work out how many
            resources you will need to build the number of troops you desire.
          </p>
          <br />
          <h2>Evony Troop Building Tips</h2>
          <li>
            Assign a duty officer to your troop buildings when you are building
            many troops.
          </li>
          <li>
            Check out our list of Evony Duty Generals for the best candidates to
            be assigned to your troop buildings.
          </li>
          <li>
            Do not waste resources on low-level troops. These will quickly
            become useless. Layers are only useful for the big power player.
          </li>
          <li>
            Focus on troop training speed research in the Academy. This will
            allow you to pump out troops at a much quicker rate.
          </li>
          <br />
          <br />
          <h2>Evony Troop Guide</h2>
          <br />
          <h3>Strengths and Weaknesses</h3>
          <p>
            Each Evony troop has a certain strength or weakness against other
            troops. This is outlined below:
          </p>
          <li>
            <strong>Mounted</strong> – high attack cuts down ground troops
            easily. However, low HP and defence leaves them vulnerable to ranged
            troops. Also, due to high attack, very effective against boss
            monsters.
          </li>
          <li>
            <strong>Ranged</strong> – range of attack makes them highly
            effective at picking off mounted troops from distance. However, low
            damage sees ground troops able to close in on them and take them
            out.
          </li>
          <li>
            <strong>Ground</strong> – the high defence and HP stats of these
            troops makes them ranged troop killer specialists. They are able to
            withstand the ranged attacks to close the distance and take them
            out. On the other hand, the high attack of mounted troops leaves
            them vulnerable to this troop type.
          </li>
          <li>
            <strong>Siege</strong> – huge damage and range. Strong against
            everything but expensive to build and a Gem cost to heal.
          </li>
          <br />
          <h2>Evony Troop Training Guide</h2>
          <br />
          <p>
            There are several factors that influence how quickly your troops are
            trained. The best ways to improve troop training times can be seen
            below:
          </p>
          <li>
            <strong>Research</strong> – Adv Conscription and Super Conscription
            under the Military research tree will both improve training speed.
          </li>
          <li>
            <strong>Monarch Gear</strong> – always equip the Martial Crown
            before training troops.
          </li>
          <li>
            <strong>Duty General</strong> – asssign a general as on duty at your
            troop training buildings.{" "}
          </li>
          <li>
            <strong>Army Camp</strong> – these buildings increase training speed
            and also training capacity.
          </li>
          <li>
            <strong>Subordinate Cities</strong> – China subordinate cities
            improve troop training speed.
          </li>
          <li>
            <strong>Culture</strong> – changing your culture to America will
            improve training speed.
          </li>
        </div>
      </Flex>
    </S.About>
  );
};

export default About;
