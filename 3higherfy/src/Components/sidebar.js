import React from 'react'

function Sidebar() {
  return (
    
        <header>
            <div className='sidebar'>
                <h1>Playlist</h1>
                <div className='playlist'>
                <h4 class="active"><span></span><i class="bi bi-music-note"></i>Playlist</h4>
                <h4><span></span><i class="bi bi-music-note"></i>Recently Played</h4>
                <h4><span></span><i class="bi bi-music-note"></i>Recommended</h4>
                </div>
            </div>

        </header>
    
  )
}

export default Sidebar