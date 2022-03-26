import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
  <main className='main'>
    <h1 className='title'> Railways In Literature </h1>
    
    <p className='full-paragraph'>
      Why are trains so useful to storytellers? 
      In stories, trains play a functional role, getting your characters from one place to another. 
      But there's more to it than that. 
      Perhaps we encounter storytellers on trains more than in any other place.
    </p>

    <p className='full-paragraph'>
      On Trains You Lose Your Regular Self
      <b> The train is a perfect place to pretend to be a different person. </b> 
      He said he was French. 
      He was on his way to work on his Ph.D. in Art History in San Antonio. 
      He had grim opinions on organized religion. 
      He could have been flirting with me, but more likely he was just bored.
    </p>

    <p className='full-paragraph'>
      Trains are an example of a heterotopia. 
      French philosopher <a href='https://en.wikipedia.org/wiki/Michel_Foucault' title='wikipedia'>Michael Foucault</a> uses the term "heterotopia" to describe <b>spaces that 
      have more layers of meaning or relationships to other places than immediately meet the eye.</b>
      In general, <b>a heterotopia is a physical representation or approximation of a utopia</b>, 
      or a parallel space (such as a prison) that contains undesirable bodies to make a real utopian space possible.
    </p>

    <p className='full-paragraph'>
      <h3 className='title'> Foucault had quite a bit to say about trains: </h3>
      A train is an extraordinary bundle of relations because it is something through which one goes, 
      it is also something by means of which one can go from one point to another, 
      and then it is also something that goes by.
    </p>

  </main>,
  document.getElementById('root')
);

reportWebVitals();
