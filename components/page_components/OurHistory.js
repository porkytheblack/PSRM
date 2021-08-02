import styled from 'styled-components'
import Image from 'next/image'
import logo from "../../public/psrm_logo.jpeg"

function OurHistory({r}) {
    return (
        <SectionContainer ref={r} >
            <Image src={logo} width={1365} height={500} />
            <OverlayContainer className="flex flex-col items-center justify-end">
                <SectionHeader className="flex w-full items-center lg:justify-end">
                    <h1 className="text-8xl text-center " >Our History</h1>
                </SectionHeader>
                <SectionContent className="flex flex-col text-3xl items-center justify-center text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                </SectionContent>
            </OverlayContainer>
        </SectionContainer>
    )
}

export default OurHistory

const SectionContainer = styled.div`
    height: 500px;
    width: 100%;
    position: relative;
`
const OverlayContainer = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`
const SectionHeader = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    padding-right: 40px;
    padding-top: 10px;
    padding-left: 10px;
    >h1{
        font-weight: 900;
        color: white;
        font-family: 'Bebas Neue';
        box-sizing: border-box;
        @media(min-width: 1200px){
            &:before{
                content: "";
                position: absolute;
                height: 10px;
                background-color: yellow;
                margin-left: -65%;
                margin-top: 30px;
                width: 60%;
                border-bottom: 10px solid yellow;
            }
        }
        
    }    
`
const SectionContent = styled.div`
    width: 100%;
    height: auto;
    font-weight: 300px;
    padding: 40px;
    color: white;
    font-family: 'Roboto', sans-serif;
`
