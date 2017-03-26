import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {

    // Props, like title="", are passed into each instance of the WorkSample component
    render() {
        return <div>
            <h2>Front-End Engineering at The Iron Yard</h2>
            <div className="columns is-multiline">
                <WorkSample title="Responsive Blog Design" link="https://ragens9.github.io/d2-recreate-a-responsive-blog/" screenshot="./img/ragensanner_responsiveblogsmall.jpg" />
                <WorkSample title="Chirp" link="https://ragens9.github.io/chirp/" screenshot="./img/ragensanner_chirpmedium.jpg" />
                <WorkSample title="Responsive Marketing Design" link="https://ragens9.github.io/d4-ddc-recreate/" screenshot="./img/ragensanner_ddc.jpg" />
            </div>
            <h2>Project Management as a Developmental Editor</h2>
            <div className="columns is-multiline">
                <WorkSample title="Project Mangagement: Design Memo" screenshot="./img/ragensanner_cooperdesign.jpg" />
            </div>
        </div>;
    }
}

export default Work;
