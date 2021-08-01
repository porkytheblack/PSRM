import styled from 'styled-components'
import Image from 'next/image'
import logo from "../../public/psrm_logo.jpeg"

function OurHistory() {
    return (
        <SectionContainer>
            <Image src={logo} width={1365} height={500} />
            <OverlayContainer className="flex flex-col items-center justify-center">
                <SectionHeader>
                    <h1>Our History</h1>
                </SectionHeader>
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
    background-color: rgba(0, 0, 0, 0.9)
`
const SectionHeader = styled.div`
    width: 100%;
    height: 130px;
    >h1{
        font-size: 100px;
        font-weight: 900;
        color: white;
        font-family: 'Bebas Neue';
        margin-left: 60%;
        box-sizing: border-box;
        &:before{
            content: "";
            height: 10px;
            background-color: yellow;
            margin-top: 60px;
            margin-left: -20px;

            width: 50%;
        }
    }    
`
