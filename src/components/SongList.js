import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    // helper function to take list of songs, map over them, return a block of jsx
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    }); 
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);

// this is how to make use of react-redux library to get data from redux store into a component
// will always be the same process

// import connect at top
// call connect at bottom and pass in component as second function call
// define mapStateToProps
  // will always get first argument of 'state'
  // will return an object that will show up as props inside the component