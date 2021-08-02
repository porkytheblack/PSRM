import Image from "next/image"
import styled from "styled-components"

function Clients() {
    return (
        <SectionContainer className="flex flex-col justify-start items-center">
            <h1>
                Our Clients
            </h1>
            <ClientSection className="flex items-center justify-around">
                <Image src="https://upload.wikimedia.org/wikipedia/en/a/a0/Kenya_Airports_Authority_logo.png" height={100} width={100} />
                <Image src="https://upload.wikimedia.org/wikipedia/en/a/a0/Kenya_Airports_Authority_logo.png" height={100} width={100} />
                <Image src="https://upload.wikimedia.org/wikipedia/en/a/a0/Kenya_Airports_Authority_logo.png" height={100} width={100} />
                <Image src="https://upload.wikimedia.org/wikipedia/en/a/a0/Kenya_Airports_Authority_logo.png" height={100} width={100} />
            </ClientSection>
        </SectionContainer>
    )
}

export default Clients

const SectionContainer = styled.div`
    width: 100%;
    height: 400px;
    >h1{
        font-size: 100px;
        font-weight: 900;
        font-color: black;
        font-family: 'Bebas Neue';
        text-align: center;
    }
`
const ClientSection = styled.div`
    height: 200px;
    width: 100%;
`
