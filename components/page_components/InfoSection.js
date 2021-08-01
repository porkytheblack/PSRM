import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import NumberCounter from "../NumberCounter"

function InfoSection() {
    const [ref, InView] = useInView()
    return (
        <BodyContainer ref={ref} className=" flex flex-col md:flex-row items-center justify-center md:justify-between">
            <Content className="flex-col items-start justify-start w-full md:w-1/2">
                <h1>Who are we?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do</p>
            </Content>
            <div className="flex items-center w-full md:w-1/2 justify-center">
                <NumberCounter isVisible={InView} value={100} title="Completed Projects"/>
            </div>
        </BodyContainer>
    )
}

export default InfoSection

const BodyContainer = styled(motion.div)`
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-bottom: 10px;
`
const Content = styled(motion.div)`
    >h1{
        font-weight: 900;
        font-size: 40px;
        font-family: 'Bebas Neue'
    }
    >p{
        font-size: 20px;
        font-family: 'Roboto',
    }
`
