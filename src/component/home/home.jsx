import * as S from "./home.style";
import { Flex } from "../flex";

const Home = ({ children }) => {
  return (
    <S.Home>
      <Flex justify='center' align='center' column='column' gap='145'>
        <div className='container'>
          <div align='center'>
            <img src='https://www.evony.com/image/img/evonyLogo.png' alt='' />
          </div>
          <h1>Evony</h1>
          <p>
            Evony (formerly known as <strong>Civony</strong>) is an Adobe
            Flash-based multiplayer online game by American developer Evony LLC
            with graphic elements reminiscent of other similar real time games
            and is set in the European medieval time period. Two browser-based
            versions (Age 1 and Age 2) as well as a mobile version (The King's
            Return) exist.
          </p>
          <br />
          <h2>Gameplay</h2>
          <p>
            Evony is set in a persistent world during the medieval time period
            in which the player assumes the role of a lord or lady of a city or
            alliance. A new player is given "beginner's protection," which
            prevents other players from attacking their cities for a total of 7
            days or until a player upgrades the town hall to level 5 or higher.
            This gives new players the opportunity to accumulate a few resources
            and troops and get accustomed to the game before other players can
            attack them. The player sets tax rate, production and construction.
            The resources in the game are gold, food, lumber, stone, and iron,
            and the city's idle population. As with similar games, the player
            first has to increase the city's population and hourly resource
            production rates as well as construction of certain buildings in the
            city, and then start building resource fields of their city and
            building an army. An army can include siege machines, such as
            ballistas, catapults, and battering rams, and foot troops, such as
            archers, warriors and swordsmen. All of Evony's items must be
            purchased with gems which can be bought with real money, through its
            item shop in game or won at the wheel. Some items will accelerate
            the player's progression through the game. Winning items in battle
            is the primary way to acquire resources and cities.
          </p>
          <br />
          <h2>Interaction</h2>
          <p>
            he game features player versus player game play making it possible
            to attack another player's cities making it almost impossible for
            players who have not formed or joined alliances to survive. The game
            allows the player to control up to ten cities through gain of
            titles. To gain a title, a certain rank is necessary. Both Title and
            Rank require Medals gained by use of in-game coins to purchase medal
            boxes, by attacking valleys or winning medal boxes from spinning the
            wheel. The game has two different monetary systems. The in-game
            monetary system revolves around gold. Gold can be obtained by
            completing quests, by taxing the city's population as well as
            attacking NPC's. It is also possible to sell resources for gold on
            the marketplace or to trade resources with other players within a
            player's alliance for gold. A player can also use real money to buy
            game cents with which to purchase items and resources from the
            in-game shop.
          </p>
        </div>
      </Flex>
    </S.Home>
  );
};

export default Home;
