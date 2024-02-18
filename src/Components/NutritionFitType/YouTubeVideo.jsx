import React from 'react';

function YouTubeVideo() {
  return (
    <>
      <h2 className='text-2xl font-bold mb-2'>Featured Videos</h2>
    <div className='yt mt-8 text-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
        <div className='aspect-w-19 aspect-h-9'>
          <iframe
            className='mx-auto'
            src='https://www.youtube.com/embed/8BKbu_s8p1Q'
            title='How To Eat To Build Muscle & Lose Fat (Lean Bulking Full Day Of Eating)'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            width='560'
            height='250'
          ></iframe>
        </div>
        <div className='aspect-w-16 aspect-h-9'>
          <iframe
            className='mx-auto'
            src='https://www.youtube.com/embed/CxktmQ3zJOA'
            title='The Best Science-Based Diet for Fat Loss (ALL MEALS SHOWN!)'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            width='560'
            height='250'
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
}

export default YouTubeVideo;
