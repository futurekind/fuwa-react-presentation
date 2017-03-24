import React from 'react';
import { Deck, Slide } from 'spectacle'
import createTheme from "spectacle/lib/themes/default";

import SlideStart from './slides/Start';

const theme = createTheme({
    dark: '#30383B',
    cyan: '#1fc2f4'
})

class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition="slide"
                transitionDuration={ 800 }
                progress="none"
                theme={ theme }
            >
                <SlideStart />
            </Deck>
        )
    }
}

export default Presentation;