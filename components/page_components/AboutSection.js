import styled from "styled-components"
import Image from "next/image"

function AboutSection({w_size, r}) {
    return (
        <SectionContainer ref={r} >
            <Overlay>
                <TopSection w_size={w_size}  className="flex items-center justify-start pt-4" >
                    <div className="flex w-3/4 flex-col">
                    <h1>We help build the future</h1>
                    <p>PSRM assists stakeholders in identification,planning ,capital design and construction programs and in understanding how project teams are selected,procured/contracted , and coordinated for successful project delivery </p>                    </div>
                    
                </TopSection>
                <BottomSection w_size={w_size} className="w-full flex flex-col space-around md:flex-row">
                    <div className=" h-80 md:w-1/2 flex items-center justify-start ">
                        <Image   src={"https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"} width={300} height={300}  />
                    </div>
                    <div className="flex md:w-1/2 flex-col items-start justify-center h-full">
                    <h1 className="text-8xl text-center md:text-left ">Our Mission</h1>
                    <p className="text-1xl text-center md:text-left" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                    </div>
                </BottomSection>
            </Overlay>
        </SectionContainer>
    )
}

export default AboutSection

const SectionContainer = styled.div`
    width: 100%;
    position: relative;
    margin-top: 50px;
    min-height: 1045px;
    background-image: url("https://images.unsplash.com/photo-1581091878330-f5cf2a3b1564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
    background-size: 1440px auto;
    padding-left: 40px;
    padding-right: 40px;
    background-repeat: repeat;
`
const Overlay = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
`
const TopSection = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    padding-left: 40px; 
    padding-right: 40px;
    height: 520px;
    >div{
        >h1{
            font-size: 100px;
            font-weight: 900;
            color: white;
            font-family: 'Bebas Neue';
            @media(min-width: 800px){
                font-size:100px;
            }
            @media(max-width: 800px){
                font-size: 80px;
            }
            @media(max-width: 800px){
                font-size:60px;
            }
            @media(max-width: 600px){
                font-size:40px;
            }
        }
        >p{
            @media(min-width: 800px){
                font-size: 24px;
            }
            @media(max-width: 800px){
                font-size: 22px;
            }
            @media(max-width: 800px){
                font-size:20px;
            }
            @media(max-width: 600px){
                font-size:18px;
            }
            margin-top: 10px;            
            font-weight: 400;
            color: white;
            font-family: 'Roboto', sans-serif;
        }
    }
    
`
const BottomSection = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    min-height: 524px;
    padding-left: 40px; 
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 30px;
    >div{
        >h1{
            font-weight: 900;
            color: white;
            font-family: 'Bebas Neue'
        }
        >p{
            margin-top: 10px;
            font-weight: 400;
            color: white;
            font-family: 'Roboto', sans-serif;
        }
    }
`
