import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import NumberCounter from "../NumberCounter"
import {set_topnav_bg} from "../../redux/actions/main"
import { connect } from "react-redux"
import { useEffect } from "react"

function InfoSection({set_topnav_bg}) {
    const [ref, InView] = useInView()
    useEffect(() => {
        const unsubscriber = () =>{
            if(InView){
                set_topnav_bg(true)
            }else{
                set_topnav_bg(false)
            }
            
        }
        return () => {
            unsubscriber
        }
    }, [InView])
    return (
        <BodyContainer ref={ref} className=" flex flex-col md:flex-row items-center justify-center md:justify-between">
            <Content className="flex-col items-start justify-start w-full md:w-1/2">
                <h1>Who are we?</h1>
                <p>PSRM consultants is an independent proffessional project management practice specialising in the developement and maintenance of adequate systems for procurement, planning,implementation,monitoring and documentation to the required standards and specifications of multi-disciplinary projects.</p>
            </Content>
            <div className="flex items-center w-full md:w-1/2 justify-center">
                <NumberCounter isVisible={InView} value={100} title="Completed Projects"/>
            </div>
        </BodyContainer>
    )
}

const mapDispatchToProps = {
    set_topnav_bg
}

export default connect(()=>({}), mapDispatchToProps)(InfoSection)

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
