import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {

    // Props, like title="", are passed into each instance of the WorkSample component
    render() {
        return <div className="columns is-multiline">
            <WorkSample title="Responsive Blog Design" link="https://ragens9.github.io/d2-recreate-a-responsive-blog/" screenshot="./img/ragensanner_responsiveblog.jpg" />
            <WorkSample title="Chirp" link="https://ragens9.github.io/chirp/" screenshot="./img/ragensanner_chirp.jpg" />
            <WorkSample title="Responsive Marketing Design" link="https://ragens9.github.io/d4-ddc-recreate/" screenshot="./img/ragensanner_ddc.jpg" />
        </div>;
    }
}

export default Work;
