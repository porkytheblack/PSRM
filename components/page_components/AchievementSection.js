import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import NumberCounter from "../NumberCounter";
import Image from "next/image"
import psrm_logo from "../../public/psrm_logo.jpeg"

function AchievementSection() {
    const [ref, InView] = useInView();
    return (
        <SectionContainer ref={ref} className="flex flex-col items-center justify-center" >
            <SectionHeader className="flex items-center justify-center ">
                <h1 className="text-5xl lg:text-8xl" >
                    What We have Achieved
                </h1>
            </SectionHeader>
            <DataContainer className="flex w-full items-center justify-around">
                <NumberCounter isVisible={InView} value={30} title="Completed Projects"/>
                <NumberCounter isVisible={InView} value={10} title="Pending Projects"/>
                <NumberCounter isVisible={InView} value={20} title="Ongoing Projects"/>
            </DataContainer>
            <div className="w-full flex mt-6 items-center justify-center">
                <Image src={psrm_logo} width={1200} height={400}  />
            </div>
            
        </SectionContainer>
    )
}

export default AchievementSection

const SectionContainer = styled.div`
    width: 100%;
    padding: 40px;
    background-color: white;
`

const SectionHeader = styled.div`
    width: 100%;
    height: 100px;
    >h1{
        font-weight: 900;
        color: black;
        font-family: 'Bebas Neue';
    }
`
const DataContainer = styled.div`

`
