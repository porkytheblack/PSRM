import styled from "styled-components"

function AboutSection() {
    return (
        <SectionContainer>
            <Overlay>
                <TopSection className="flex items-center justify-start pt-4" >
                    <div className="flex w-1/2 flex-col">
                    <h1>We help build the future</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>                    </div>
                    
                </TopSection>
                <BottomSection className="w-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex items-center justify-start h-full">
                        <img src="https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full">
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
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
            font-family: 'Bebas Neue'
        }
        >p{
            margin-top: 10px;
            font-size: 28px;
            font-weight: 400;
            color: white;
            font-family: 'Roboto'
        }
    }
    
`
const BottomSection = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    height: 524px;
    padding-left: 40px; 
    padding-right: 40px;
    >div{
        img{
            width: 400px;
            height: 400px;
        }
        >h1{
            font-size: 70px;
            font-weight: 900;
            color: white;
            font-family: 'Bebas Neue'
        }
        >p{
            margin-top: 10px;
            font-size: 28px;
            font-weight: 400;
            color: white;
            font-family: 'Roboto'
        }
    }
`
