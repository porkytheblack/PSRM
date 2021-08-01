import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"
import styled from "styled-components";

function NumberCounter({value, isVisible, title}) {
    const [number_value, set_number_value] = useState(0)
    const timerRef = useRef(null)
    useEffect(() => {
        if(isVisible){
            timerRef.current  = setInterval(()=>{
                var n = number_value;
                if(number_value < value){
                    set_number_value(number_value+1)
                }                
            }, 20)
        }
        if(!isVisible){
            set_number_value(0)
        }
        return ()=>{
            clearInterval(timerRef.current)
        }
    }, [isVisible, number_value]);
    return (
        <NShow className="flex flex-col items-center justify-start">
            <h1>{number_value}</h1>
            <motion.p animate={{scale:[1.5, 1]}} transition={{duration: 1, type: "spring", bounce: 0.25}}>{title}</motion.p>
        </NShow>
    )
}

export default NumberCounter

const NShow = styled.div`
    width: 200px;
    height: 180px;
    >h1{
        font-weight: 900;
        color: yellow;
        font-size: 100px;
        font-family: 'Bebas Neue'
    }
    >p{
        font-weight: 400;
        color: black;
        font-size: 30px;
        font-family: 'Bebas Neue'
    }
`
