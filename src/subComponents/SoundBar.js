import React, {useEffect, useRef, useState} from 'react'
import styled, { keyframes } from 'styled-components'

import music from "../assets/audio/y2mate.com - HENSONN  SAHARA slowed  reverb.mp3"

const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:18rem;
top:3rem;
z-index:10;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin:0 0.1rem
`

const SoundBar = ({play, setPlayMusicState}) => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    useEffect(()=>{
        setPlayMusicState=(click);
        setClick(!click);
        if(play){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    },[play])

    const handleClick = () => {
        setPlayMusicState=(!click);
        setClick(!click);

        if(click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

    return (
        <Box onClick={() => handleClick()}>
            <Line click={!click}/>
            <Line click={!click}/>
            <Line click={!click}/>
            <Line click={!click}/>
            <Line click={!click}/>
            <audio ref={ref} autoPlay={'autoplay'}  loop >
                <source src={music}/>
            </audio>
        </Box>
    )
}

export default SoundBar