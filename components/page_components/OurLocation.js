import styled from "styled-components"

function OurLocation({r}) {
    return (
        <SectionContainer ref={r} >
            <OverlaySection>
                <div className="flex flex-col" >
                    <h1 className="text-8xl"  >
                        Our Location
                    </h1>
                    <p className="text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
                    </p>
                </div>
            </OverlaySection>
        </SectionContainer>
    )
}

export default OurLocation


const SectionContainer = styled.div`
    width: 100%;
    min-height: 450px;
    background-image: url("https://images.unsplash.com/photo-1613457231357-a5db3bc5bd81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
    background-size: 1440px auto;
    background-repeat: no-repeat;
    background-position: left 50% top -250px;
`
const OverlaySection = styled.div`
min-height: 450px;
    background-color: rgba(0, 0, 0, 0.6);
    padding-top: 30px;
    padding-bottom: 20px;
    @media(min-width: 768px){
        width: 75%;
    }
    @media(max-width: 768px){
        width: 100%;
    }
    >div{
        padding-left: 40px;
        >h1{
            font-weight: 900;
            color: white;
            font-family: 'Bebas Neue';
            text-align: left;
        }
        >p{
            font-weight: 400;
            color: white;
            font-family: 'Roboto', sans-serif;
            text-align: left;
        }
    }
`