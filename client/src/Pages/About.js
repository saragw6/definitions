import React from 'react';

import { FontIcon } from "../Libraries/ReactToolboxLibrary";

import { add_definition_url } from "../urls";

const About = () => {
    return(
    <div className="About blurb">
        <h6 className="_2J-aP">About</h6>
        <p>Queer Undefined defines terms having to do with gender and sexuality. This site is for people who are questioning their gender or sexual identity, and for allies looking to know more about LGBTQ+ terms. </p>
        <p>There are so many words used to describe gender and orientation. The variety of terms can be freeing, but it can also make things trickier for people who aren't familiar with the vocabulary yet.
            The aim of this project is to help people navigate the dozens and dozens of terms out there, whether they are looking to understand themselves or others better.</p>
        <p> If you want to contribute a definition use <a href={{add_definition_url}} target="_blank">this google form</a>!</p>
        <h6 className="_2J-aP">Background</h6>
        <p>I often get questions about the meaning of LGBTQ+ terms. I use resources like Human Rights Campaign's <a href="https://www.hrc.org/resources/glossary-of-terms" target="_blank">Glossary of Terms</a>
            &nbsp;to explain terms that I don't personally identify with – but lists like that are limited. They only include so many words, and for each term they just give an impersonal dictionary definition.</p>
        <p>These words have a lot of nuance and depth. For example, two people who identify as bisexual might have completely different explanations of what that word means to them. That's why I'm gathering
            informal definitions from LGBTQ+ people – to give multiple personal perspectives. That way people learning these words can get more of the full story, and if they're looking for a way to label themself
            they can find something they connect to.</p>
        <h6 className="_2J-aP">Guidelines</h6>
        <p>If a definition generally disrespects the LGBTQ+ community or this project it will be rejected.</p>
        <p>A definition that dismisses/erases a particular LGBTQ+ identity will be rejected. That being said, explaining and contextualizing criticisms of a term or identity is encouraged. Queer Undefined aims
            to display the controversies within the community but does not allow intra-community discrimination or hate.</p>
        <p>You can report a definition as violating these guidelines by clicking the <FontIcon className="flag-icon" value='outlined_flag' /> icon in the top right corner of the definition.</p>
        <h6 className="_2J-aP">Contact</h6>
        <p>If you have any questions/feedback, email me at <a href="mailto:info@queerundefined.com">info@queerundefined.com</a>.</p>
    </div>
      );
}


export default About;
