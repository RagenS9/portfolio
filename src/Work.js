import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {

    // Props, like title="", are passed into each instance of the WorkSample component
    render() {
        return <div>
            <h2 className="title is-2">Front-End Engineering at The Iron Yard</h2>
            <p className="help">You can click on the examples to visit the full sites.</p>
            <div className="columns is-multiline">
                <WorkSample title="LensFlare Photo Shoot Management" link="https://lensflare.herokuapp.com/" description="Tool to manage asset metadata, upload sample and shoot images, and message between collaborators." screenshot="./img/ragensanner_lensflare.jpg" />
                <WorkSample title="Chirp" link="https://ragens9.github.io/chirp/" description="I worked with a backend student to create a messaging app using HTML, CSS, JS, and Bootstrap." screenshot="./img/ragensanner_chirpmedium.jpg" />
                <WorkSample title="Responsive Marketing Design" link="https://ragens9.github.io/d4-ddc-recreate/" description="I re-created a responsive marketing design using HTML, CSS, and media queries along with Bootstrap." screenshot="./img/ragensanner_ddc.jpg" />
            </div>
            <h2 className="title is-2">Project Management as a Developmental Editor</h2>
            <p className="help">You can click on the examples to visit the full documents.</p>
            <div className="columns is-multiline">
                <WorkSample title="FitnessGram Design Memo" link="./img/ragensanner_fitnessgramdesignmemo.pdf" description="I worked with the authors of this text to reduce the number of icons and sidebars. This is my design memo to in-house designer, Joe Buck." screenshot="./img/ragensanner_fitnessgramdesignmemo.jpg" seconddescription="The final design can be seen, in part, by clicking here." secondlink="http://www.humankinetics.com/ProductSearchInside?isbn=9781450470469"/>
                <WorkSample title="Photo Shoot Template" link="./img/ragensanner_Wordshootlisttemplate.pdf" description="I created this template to help editors organize photo shoots. I also created instructions to encourage proper data entry and table sorting." screenshot="./img/ragensanner_photoshoottemplate.jpeg" />
                <WorkSample title="Permissions Instructions for Authors" link="./img/ragensanner_permissions.pdf" description="This is a portion of one of my reviews where I explained the goal of avoiding expensive permissions fees using specific examples from the authors' text." screenshot="./img/ragensanner_permissions.jpeg" />
            </div>
        </div>;
    }
}

export default Work;
