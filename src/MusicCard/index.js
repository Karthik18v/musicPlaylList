import {MdDelete} from 'react-icons/md'
import {
  MusicCardContainer,
  ImageContainer,
  Image,
  SongDetailsContainer,
  GenreName,
  SongName,
  DurationAndButtonContainer,
  DurationTime,
  DeleteButton,
} from './styledComponents'

const MusicCard = props => {
  const {eachItem, removeSong} = props
  const {id, imageUrl, name, genre, duration} = eachItem

  const onClickdeleteButton = () => {
    removeSong(id)
  }

  return (
    <MusicCardContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="track" />
        <SongDetailsContainer>
          <SongName>{name}</SongName>
          <GenreName>{genre}</GenreName>
        </SongDetailsContainer>
      </ImageContainer>
      <DurationAndButtonContainer>
        <DurationTime>{duration}</DurationTime>
        <DeleteButton onClick={onClickdeleteButton} data-testid="delete">
          <MdDelete />
        </DeleteButton>
      </DurationAndButtonContainer>
    </MusicCardContainer>
  )
}

export default MusicCard
