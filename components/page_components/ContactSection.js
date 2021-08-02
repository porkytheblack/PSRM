import { Email, Mail, MobileFriendly, Phone, Print } from "@material-ui/icons"
import styled from "styled-components"
import psrm_logo from "../../public/psrm_logo.jpeg"
import Image from "next/image"

function ContactSection({r}) {

    const contacts = [
        {
            title: "Telephone",
            value:"+2542200344333",
            icon: Phone
        },
        {
            title: "Mobile",
            value:"+2542200344333",
            icon: MobileFriendly
        },
        {
            title: "P.O.Box",
            value:"472-00782",
            icon: Mail
        },
        {
            title: "Email",
            value:"example@email.com",
            icon: Email
        },
        {
            title: "FaxMail",
            value:"faxmail address",
            icon: Print
        }
    ]

    const c = (Icon, title, value, i)=>{
        return(
            <div key={i} className="flex bg-gray-900 mt-3 p-2 flex-row items-center justify-between" >
                <Icon style={{color: "white", fontSize: 40}} ></Icon>
                <p className="text-2xl text-white" >{title}</p>
                <p className="text-2xl text-white" >{value}</p>
            </div>
            )
    }
    return (
        <SectionContainer ref={r}>
            <Overlay className="flex flex-wrap items-center justify-around">
                {
                    contacts.map((contact)=>{
                        return c(contact.icon, contact.title, contact.value, contacts.indexOf(contact))
                    })
                }
            </Overlay>
            <BackDrop className="flex items-center justify-center" >
                <Image src={psrm_logo} width={1100} height={300} />
            </BackDrop>
        </SectionContainer>
    )
}

export default ContactSection

const SectionContainer = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    margin-top: 40px;
`
const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
`
const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding-left: 20%;
    padding-right: 20%;
    z-index: 2;
    >div{
        width: 300px;
        >p{
            font-weight: 500;
            font-family: 'Bebas Neue';
        }
    }
`
