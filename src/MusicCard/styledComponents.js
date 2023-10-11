import styled from 'styled-components'

export const MusicCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  height: 60px;
`
export const SongDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const SongName = styled.p`
  height: 10px;
  margin-bottom: 15px;
  margin-top: 0px;
`

export const GenreName = styled.p`
  margin-top: 0px;
  height: 10px;
`

export const DurationAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80px;
`

export const DurationTime = styled.p``

export const DeleteButton = styled.button`
  background-color: transparent;
  border: 0px;
  color: white;
`
