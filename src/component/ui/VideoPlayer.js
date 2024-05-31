import React, {Component} from 'react';
import {Colors} from '../../assets/style';
import {View, StyleSheet, Modal} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../config/Screen';

export class CustomVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      duration: 0,
      currentTime: 0,
    };
  }

  onBuffer = ({isBuffering}) => {
    if (isBuffering) {
      this.setState({paused: true});
    }
  };

  onLoad = data => {
    this.setState(prevState => ({...prevState, duration: data.duration}));
  };

  onEnd = () => {
    this.setState({paused: true, currentTime: 0});
  };

  onProgress = data => {
    this.setState({currentTime: data.currentTime});
  };

  onPlayPausePress = () => {
    this.setState(prevState => ({paused: !prevState.paused}));
  };

  render() {
    const {videoVisible, uri, updateState} = this.props;
    return (
      <Modal
        visible={videoVisible}
        onRequestClose={() => updateState({videoVisible: false})}>
        <View style={styles.container}>
          <VideoPlayer
            source={{uri: uri}}
            ref={ref => {
              this.player = ref;
            }}
            paused={this.state.paused}
            fullscreen={false}
            controls={true}
            videoStyle={styles.video}
          />
        </View>
      </Modal>
    );
  }
}

export default CustomVideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: Colors.black,
  },
  progressContainer: {
    backgroundColor: 'gray',
    height: 10,
  },
  progressBar: {
    backgroundColor: 'red',
    height: 10,
  },
});
