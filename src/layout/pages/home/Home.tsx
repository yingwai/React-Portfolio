import React from 'react';
import { Main } from './section/main/Main';
import { About } from './section/about/About';
import { Technologies } from './section/technologies/Technologies';
import { Projects } from './section/projects/Projects';
import { Contact } from './section/contact/Contact';
import { ParticlesBg } from '../../../components/particlesBg/ParticlesBg';
import { ScrollPageUp } from '../../../components/ScrollPageUp';

export const Home: React.FC = () => {
    ScrollPageUp();

    return (
        <>
            <ParticlesBg />
            <Main />
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </>
    );
};