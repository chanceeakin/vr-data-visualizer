import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import request from 'ajax-request';
import get from 'lodash.get';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		tweets: ''
	 };

   this._handleClick = this._handleClick.bind(this);
   this._handleCollide = this._handleCollide.bind(this);
  }


  componentDidMount() {
	request('/api/twitter/prattprattpratt', function(err, res, body) {
    var tweets = JSON.parse(body);
    tweets = tweets.map((tweet) => {
      return tweet.text
    });
		this.setState({
			tweets: tweets
		})
	}.bind(this));
  }

  shouldComponentUpdate(nextState) {
	  if (nextState.tweets !== this.state.tweets) {
		  return true;
	  } else {
		  return false;
	  }
  }

  _handleClick (e) {
    console.log('fuck yea');
    console.log(e);
  }

  _handleCollide (e) {
    console.log('collide!');
    console.log(e);
  }

  render () {
	const { tweets } = this.state;
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
        {tweets && tweets.map(function (tweet, i) {
				  return (
					  <Entity
              key={i}
              text={{value: tweet, wrapCount: '30', align: 'center'}}
						  position={{x: i-5, y: 1.5, z: -1}}
					  />
				  )
		    })}

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            color="white"
            events={{
              click: this._handleClick,
              collided: [this._handleCollide]
            }}
            animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
