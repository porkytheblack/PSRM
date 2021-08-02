import styled from "styled-components"

function BannerComponent({back_image, section_title, section_content}) {
    return (
        <SectionContainer back_image={back_image}>
            <OverlayContainer className="flex items-center justify-start" >
                <div className="flex flex-col w-full md:w-3/4 lg:w-1/2">
                    <h1 className="text-5xl lg:text-8xl" >
                        {section_title}
                    </h1>
                    <p className="text-3xl">
                        {section_content}
                    </p>
                </div>
            </OverlayContainer>
        </SectionContainer>
    )
}

export default BannerComponent

const SectionContainer = styled.div`
    min-height: 400px;
    width: 100%;
    background-image: url(${({back_image})=> {
        return(back_image)
    } });
    background-size: 100% 100%;
    background-position: right 0px top 0px;
    background-repeat: no-repeat;
`
const OverlayContainer = styled.div`
    width: 100%;
    min-height: 450px;
    background-color: rgba(0, 0, 0, 0.8);
    padding-left: 40px;
    >div{
        >h1{
            color: white;
            font-weight: 900;
            font-family: 'Bebas Neue';
        }
        >p{
            color: white;
            font-weight: 400;
            font-family: 'Roboto', sans-serif;
        }
    }
`
