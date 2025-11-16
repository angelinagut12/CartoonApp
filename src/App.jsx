import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Image from './Image.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Favorite Cartoon</h1>
      <h2>Charlie Brown</h2>
      <div className="card">
        <Image src="https://s.yimg.com/ny/api/res/1.2/D58z.GIipxlWxCjw5egmuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/creative_bloq_161/05a35551aa5af3fc52d9cda4b728ec5f" width="150" alt="Charlie Brown" />
        <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPtZcEkArgjoDUD4EYTSdCTHv9JJGUxX3myMFDcyIsnz1TkgbhihFheqUkDeOfLzKlhiiWJWRAHPRYQpDnlY4LIbOToVlfZv7z1d5eqzcseuf0TgvyP0o3B9_1lQKTwkcmNI4v45KHUh8O/s200/linus.gif" width="150" alt="Linus" />
        <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEWBl22UuiOvscAUpRwJXWqzPvXcsXgt7pltav31f7-odKy0Hg8Qq9wQATsCDo69dbzjEk0KcIxciXSjKvNAVTSQvcK3q0ccnZsm5vXLFrTa_pEYU5cLkiDg4QINuWqzjqWCuCP9XfnBVA/s200/Lucy_van_Pelt.png" width="150" alt="Lucy" />
        <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheJezHe4eVdOnEOzjLhpxjBTHAHHrKWnjFAwVSWZ7gmgXiym4n_ci1dQurCeM4RHXwaCf26u0Px-pqbBmjAEmeWEV6BgBMoVz37FetGrggruYEWPHWJ99qNi8HlqSkQqWTEhmE2RvYarmC/s200/23438_WrenSite_DancingSnoopy.jpg" width="150" alt="Snoopy" />
       </div>
    </>
  )
}

export default App
