import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 250px;
  width: 100vw;
  background-size: cover;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Title = styled.h1``
export const Subtitle = styled.p``
export const PlayListContainer = styled.div`
  background-color: #152850;
  height: 60vh;
  overflow-y: auto;
`

export const PlayList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  color: white;
`
export const MusicCardItem = styled.li``

export const FailureViewContainer = styled.div`
  background-color: #152850;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #152850;
`
export const Heading = styled.h1`
  color: white;
`
export const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  padding: 0px;
`
export const Search = styled.input`
  border: 0px;
`
