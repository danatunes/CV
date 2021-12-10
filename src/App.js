import {Route, Switch, useLocation} from "react-router"
import {ThemeProvider} from "styled-components"
import GlobalStyle from "./globalStyles"

//Components
import {Main, AboutPage, BlogPage, MySkillsPage, lightTheme} from './components/';
import {AnimatePresence} from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import {useState} from "react";

function App() {

    const [play, setPlay] = useState(false);

    console.log(play)

    const location = useLocation();
    return <>

        <GlobalStyle/>

        <ThemeProvider theme={lightTheme}>

            <SoundBar play={play} setPlayMusicState={setPlay}/>

            {/* For framer-motion animation on page change! */}
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/">
                        <Main setPlayMusicState={setPlay} playMusicState={play}/>
                    </Route>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/work" component={BlogPage}/>
                    <Route exact path="/skills" component={MySkillsPage}/>
                </Switch>
            </AnimatePresence>


        </ThemeProvider>


    </>

}

export default App

