import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import request from 'ajax-request';
import Tweet from '../components/Tweet.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tweets: '',
			color: 'red'
		};
		this._handleClick = this._handleClick.bind(this);
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
	  if (nextState.tweets !== this.state.tweets || nextState.color !== this.state.color) {
		  return true;
	  } else {
		  return false;
	  }
  }

  changeColor() {
	  const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
	  this.setState({
		  color: colors[Math.floor(Math.random() * colors.length)]
	  });
	}

  _handleClick (e) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
	  this.setState({
		  color: colors[Math.floor(Math.random() * colors.length)]
	  });
  }

  render () {
	const { color, tweetsFound, tweets } = this.state;
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
        <Entity particle-system={{preset: 'snow', particleCount: 1000}}/>
        {tweets && tweets.map(function (tweet, i) {
				  return (
            <Tweet
             key={i}
             text={tweet}
             posX={(i-5)*2}
             posY={1.5}
             posZ={-1}
             click={(e) => this._handleClick}
             color={color}
           />
				  )
		    })}

        <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -3}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#24CAFF'}}/>
        </Entity>

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            color="white"
            events={{
              click: this._handleClick
            }}
            animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}