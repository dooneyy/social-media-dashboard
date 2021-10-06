import React, { useState } from "react";
import FacebookIcon from './assets/images/icon-facebook.svg';
import TwitterIcon from './assets/images/icon-twitter.svg';
import InstagramIcon from './assets/images/icon-instagram.svg';
import YoutubeIcon from './assets/images/icon-youtube.svg';
import IconUp from './assets/images/icon-up.svg';
import IconDown from './assets/images/icon-down.svg';

function App() {
  const [mode, setMode] = useState(false);
  const bgMode = () => {
     setMode(!mode);
  }

  return (
  <div>
    <header className={`header  ${mode ? 'header-dark' : 'header-light' }`} >
     
        <div className='px-20 py-8'>
          <p className='header-heading_p1 text-3xl'>Social Media Dashboard</p>
        <div className="flex justify-between flex-col sm:flex-row">
          <div>
              <p className='header-heading_p2 text-lg mt-2'> Total Followers: 23,004</p>
          </div>

          <div className="header-btn mt-12 sm:mt-0">
            <div className="">
              <label for="toggleB" className="flex items-center justify-between sm:justify-center cursor-pointer" >
                <div className="mr-3 text-gray-700 font-medium mode-title">
                  Dark Mode
                </div>
                <div className="relative">
                  <input type="checkbox" id="toggleB" className="sr-only" onClick={bgMode} />
                  <div className={`block w-14 h-8 rounded-full ${mode ? 'toggle-bg-dark' : ' toggle-bg-light'}`}></div>
                  <div className="dot absolute left-1 top-1 w-6 h-6 rounded-full transition"></div>
                </div>
              </label>
            </div>
          </div>
       </div>
      </div>
    </header>

    <div className={mode ? 'wrapper-dark' : 'wrapper-light'} >
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${mode ? 'section-dark' : 'section-light'}`}>
        <div className="card card-1 flex flex-col items-center">
            <div className="flex my-6">
                <img src={FacebookIcon} alt="icon" className='mr-2'/> 
                <p className='body-media-text'>@nathanf</p>
            </div>
            <p className='follower-no text-7xl '>1987</p>
            <p className='follower-text'>Followers</p>
            <div className="flex items-center my-6">
                <img src={IconUp} alt="icon" className='mr-2'/> 
                <p className='body-count-text'>12 Today</p>
            </div>
        </div>
        <div className="card card-2 flex flex-col items-center">
        <div className="flex my-6">
                <img src={TwitterIcon} alt="icon" className='mr-2'/> 
                <p className='body-media-text'>@nathanf</p>
            </div>
            <p className='follower-no text-7xl '>1044</p>
            <p className='follower-text'>Followers</p>
            <div className="flex items-center my-6">
                <img src={IconUp} alt="icon" className='mr-2'/> 
                <p className='body-count-text'>99 Today</p>
            </div>
        </div>
       
    <div className="card card-3 flex flex-col items-center">
        <div className="flex my-6">
                <img src={InstagramIcon} alt="icon" className='mr-2'/> 
                <p className='body-media-text'> @realnathanf</p>
            </div>
            <p className='follower-no text-7xl '>11k</p>
            <p className='follower-text'>Followers</p>
            <div className="flex items-center my-6">
                <img src={IconUp} alt="icon" className='mr-2'/> 
                <p className='body-count-text'>1099 Today</p>
            </div>
        </div>
       
        <div className="card card-4 flex flex-col items-center">
        <div className="flex my-6">
                <img src={YoutubeIcon} alt="icon" className='mr-2'/> 
                <p className='body-media-text'> Nathan F.</p>
            </div>
            <p className='follower-no text-7xl '> 8239</p>
            <p className='follower-text'>Subscribers</p>
            <div className="flex items-center my-6">
                <img src={IconDown} alt="icon" className='mr-2'/> 
                <p className='body-count-text'>144 Today</p>
            </div>
        </div>
        </div>

        <div className={mode ? 'overview-dark' : 'overview-light'}>
                <p className='text-3xl overview-header'>
                    Overview - Today
                </p>
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 grid-rows-auto ${mode ? 'overview-dark-card' : 'overview-light-card'}`}>
                    <div className='overview-card overview-card-1 p-6'>
                        <div className="flex justify-between items-center mb-8">
                            <p className='title-text'>Page Views</p>
                            <img src={FacebookIcon} alt="icon" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl num-text'>87</p>
                            <div className="flex items-center">
                                <img src={IconUp} alt="icon" className='mr-2'/>
                                <p className='count-text'>3%</p>
                            </div>
                        </div>
                    </div>

                    <div className='overview-card overview-card-2 p-6'>
                        <div className="flex justify-between items-center mb-8">
                            <p className='title-text'>Likes</p>
                            <img src={FacebookIcon} alt="icon" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl num-text'>52</p>
                            <div className="flex items-center">
                                <img src={IconDown} alt="icon" className='mr-2'/>
                                <p className='count-text'>2%</p>
                            </div>
                        </div>
                    </div>

                    <div className='overview-card overview-card-3 p-6'>
                        <div className="flex justify-between items-center mb-8">
                            <p className='title-text'>Likes</p>
                            <img src={InstagramIcon} alt="icon" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl num-text'>5462</p>
                            <div className="flex items-center">
                                <img src={IconUp} alt="icon" className='mr-2'/>
                                <p className='count-text'>2257%</p>
                            </div>
                        </div>
                    </div>

                    <div className='overview-card overview-card-4 p-6'>
                        <div className="flex justify-between items-center mb-8">
                            <p className='title-text'>Profile Views</p>
                            <img src={InstagramIcon} alt="icon" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl num-text'>52k</p>
                            <div className="flex items-center">
                                <img src={IconUp} alt="icon" className='mr-2'/>
                                <p className='count-text'>1375%</p>
                            </div>
                        </div>
                    </div>

                    <div className='overview-card overview-card-5 p-6'>
                        <div className="flex justify-between items-center mb-8">
                            <p className='title-text'>Retweet</p>
                            <img src={TwitterIcon} alt="icon" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl num-text'>117</p>
                            <div className="flex items-center">
                                <img src={IconUp} alt="icon" className='mr-2'/>
                                <p className='count-text'>303%</p>
                            </div>
                        </div>
                    </div>

                    <div className='overview-card overview-card-6 p-6'>
                        <div className="flex justify-between items-center mb-8">
                            <p className='title-text'>Likes</p>
                            <img src={TwitterIcon} alt="icon" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl num-text'>507</p>
                            <div className="flex items-center">
                                <img src={IconUp} alt="icon" className='mr-2'/>
                                <p className='count-text'>553%</p>
                            </div>
                        </div>
                    </div>

                    <div className='overview-card overview-card-7 p-6'>
                        <div className="flex justify-between items-center mb-8">
                            <p className='title-text'>Likes</p>
                            <img src={YoutubeIcon} alt="icon" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl num-text'>107</p>
                            <div className="flex items-center">
                                <img src={IconDown} alt="icon" className='mr-2'/>
                                <p className='count-text'>19%</p>
                            </div>
                        </div>
                    </div>

                    <div className='overview-card overview-card-8 p-6'>
                        <div className="flex justify-between items-center mb-8">
                            <p className='title-text'>Total Views</p>
                            <img src={YoutubeIcon} alt="icon" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='text-3xl num-text'>1407</p>
                            <div className="flex items-center">
                                <img src={IconDown} alt="icon" className='mr-2'/>
                                <p className='count-text'>12%</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
              <div className="attribution">
                 Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                   Coded by <a href="/">Dooney</a>.
              </div>
    </div>

       
    </div>
  );
}

export default App;
