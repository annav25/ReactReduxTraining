import React from 'react';
import {connect} from 'react-redux';
class SongDetails extends React.Component{

    constructor(props){
        super(props);
        console.log("SongDetails");
    }

    render(){
        console.log("SongDetails render");
        let selectedSong=this.props.selectedSong;
        if (!selectedSong){
            return <div></div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div> <label>Title:</label>{selectedSong.title}</div>
                <div><label>Length:</label>{selectedSong.duration}</div>
            </div>
        )
    }
}

//called every time state changes
const mapPropsToState=(state)=>{
    console.log("mapPropsToState -details");
    return {
             selectedSong:state.selectedSong
        }
}
export default connect(mapPropsToState)(SongDetails);