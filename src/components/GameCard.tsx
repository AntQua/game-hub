import { Card, CardBody, Heading, Image, HStack} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import PlatformIconList from './PlatformIconList'
import GameScore from './GameScore'

interface Props {
  game: Game
}



const GameCard = ({ game }: Props) => {
  // const optimized_image = game.background_image.replace(
  //   "/media/",
  //   "/media/crop/600/400/"
  //   );

  return (
    <Card>
      { <Image src={getCroppedImageUrl(game.background_image)} />}
      {/* <Image src={optimized_image} /> */}
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <GameScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard