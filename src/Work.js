import React, { Component } from 'react';
import WorkSample from './WorkSample';

class Work extends Component {

    // Props, like title="", are passed into each instance of the WorkSample component
    render() {
        return <div>
            <h2 className="title is-2">Front-End Engineering at The Iron Yard</h2>
            <div className="columns is-multiline">
                <WorkSample title="Responsive Blog Design" link="https://ragens9.github.io/d2-recreate-a-responsive-blog/" description="I recreated a responsive blog using HTML, CSS, and media queries." screenshot="./img/ragensanner_responsiveblogsmall.jpg" />
                <WorkSample title="Chirp" link="https://ragens9.github.io/chirp/" description="I worked with a backend engineering student to create a functioning messaging app. I used HTML, CSS, and JS, along with Bootstrap and google fonts to create the front-end code." screenshot="./img/ragensanner_chirpmedium.jpg" />
                <WorkSample title="Responsive Marketing Design" link="https://ragens9.github.io/d4-ddc-recreate/" description="I recreated a responsive marketing design using HTML, CSS, and media queries along with Bootstrap." screenshot="./img/ragensanner_ddc.jpg" />
            </div>
            <h2 className="title is-2">Project Management as a Developmental Editor</h2>
            <div className="columns is-multiline">
                <WorkSample title="FitnessGram Design Memo" link="./img/ragensanner_fitnessgramdesignmemo.pdf" description="The authors on this text originally wished for more icons and sidebars than described, but I worked with them to develop fewer icons and sidebar types to keep the content clear and uncluttered. This is my design memo to in-house designer, Joe Buck." screenshot="./img/ragensanner_fitnessgramdesignmemo.jpg" seconddescription="The final design can be seen, in part, by clicking here." secondlink="http://www.humankinetics.com/ProductSearchInside?isbn=9781450470469"/>
                <WorkSample title="Photo Shoot Template" link="./img/ragensanner_Wordshootlisttemplate.pdf" description="I developed this template to provide an option other than the Excel version we had been using. The Word version allows editors to copy and paste lists of instructions from the book text into the table cells without breaking and to copy sample images directly into the table rows. I created instructions to encourage proper data entry and table sorting." screenshot="./img/ragensanner_photoshoottemplate.jpeg" />
                <WorkSample title="Permissions Instructions for Authors" link="./img/ragensanner_permissions.pdf" description="Our publishing house instituted a change in policy on materials requiring permission, encouraging authors to provide as orignial material as possible and to avoid any reliance on materials that required permission to use. This is my explanation for a set of authors, along with specific examples from their text. It was so helpful that other editors asked if they could use it in their own reviews." screenshot="./img/ragensanner_permissions.jpeg" />
            </div>
        </div>;
    }
}

export default Work;
