import { createContext, useState } from "react"

interface PlayerInterface {
}

export interface PlayerProviderInterface {
  children: React.ReactNode;
}


const Player = createContext<PlayerInterface>(
  {} as PlayerInterface
);

const PlayerContext = ({children}: PlayerProviderInterface) => {
  const [currentTrack, setCurrentTrack] = useState(null)
  return(
    <Player.Provider value={{currentTrack, setCurrentTrack}}>
      {children}
    </Player.Provider>
  )
}

export {PlayerContext, Player}

