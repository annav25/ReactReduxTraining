import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class Song extends React.Component{

    constructor(props){
        console.log("song");
        super(props);
    }

    renderList(){
      
        const songList=this.props.songList;
        const elementList=  songList.map(song=>(<div className="item" key={song.title}>
                                                        <div className="right floated content">
                                                            <button id="btn" className="ui primary button" onClick={()=>this.props.selectSong(song)}>Select</button>
                                                        </div>
                                                        <div className="content">{song.title}</div>
                                                </div>)
                                                );
        return elementList;
    }

    render(){
        console.log("song render");
        return (
                        <div className="ui middle aligned divided list">
                            {this.renderList()}
                        </div>
                );
    }

}

//called every time state is changes
const mapStateToProps=(state)=>{
    console.log("mapStateToProps -Song");
    return {songList: state.songList};
}
//action creator mapping
const mapDispatchToProps=()=>
{
    console.log("mapDispatchToProps -Song");
    return {selectSong:selectSong};
}

export default  connect(mapStateToProps,mapDispatchToProps())(Song);
