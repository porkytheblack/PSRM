import styled from "styled-components"
import BannerComponent from "../BannerComponent"
import psrm_logo from "../../public/psrm_logo.jpeg"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import clerk from "../../public/services_images/clerk_of_works.jpg"
import project_s from"../../public/services_images/project_services.jpg"
import project_su from"../../public/services_images/project_supervision.jpg"
import project_des from"../../public/services_images/project_design.jpg"
import environ_assessment from"../../public/services_images/environment_assessment.jpg"
import structural from"../../public/services_images/structural_engineering.jpg"
import audit from"../../public/services_images/audit_service.jpg"

function ServicesSection({r}) {

    const [isClicked, set_isclicked] = useState(false)
    const [active_service, set_active_service] = useState(undefined)




    const services = [
        {
            name: "Project Services",
            description: "The project services include; identification and Prioritizing, Site investigation and Selection,procurement/selection of specialists,feasibility studies ,Environmental Impact Assesment ,Resettlement Action PLan ,Project Management, Cost estimatio,plannining,project programming and reviewing the project sucess in totality",
            img: project_s
        },
        {
            name: "Project Design",
            description: "Preliminary Design and Reports,Environmental Impact Assessment, Preliminary Cost Estimates ,Final Scheme design,Attainment of required approvals, Tender and Procurement processes.",
            img: project_des
        },
        {
            name: "Project Supervision",
            description: "These include; Resettlement Action Plan Implementation, Implementation Monitoring, Progress and Quality Control Monitoring, Manage Schedule and Budget , Scope Change Management, Financial Control Appraisals, Contract Admnstration, Control Contract Management issues, Post Contract Review and Finalisation",
            img: project_su
        },
        {
            name: "Audit Review Services",
            description: "These include; financial audits, operation audits, compliance audits, health and safety audits, energy audits ,consulting and advisory services and special investigations.",
            img: audit
        },
        {
            name: "Envirionmental Impact Assessment Services",
            description: "PSRM offers a broad array of scientific, testing ,engineering and consulting services related to environmental impact assessment . these services include; environmental impact statements,biological assessments, remedial investigations, feasibility studies and natural reasource damage assesment.",
            img: environ_assessment
        },
        {
            name: "Structural Engineering Services",
            description: "structural engineering of building projects, bridges and other structures. civil engineering for roads, parking areas, waterways, urban developement and urban structure. Storm and Foul Water Drainage, Jetties and Sea Walls, sustainable Engineering, Historic Rehabiltation and Renovation, Rehabilitation and Maintenance Works",
            img: structural
        },
        {
            name: "Clerk of work Services",
            description: "Keeping site records and reporting progress , confering with architects and contractors, continous inspection during construction to ensure adherence to plans , specifications and alloted budget. Assist project manager to review plans,designs and specifications and to ensure construction work schedule is maintained",
            img: clerk
        }
    ]
    return (
        <div ref={r} >
            <BannerComponent 
            back_image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
            section_title="What We Provide" 
            section_content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
            <SectionContainer className="flex flex-col items-center justify-start">
                <OverlayContainer className="flex flex-col items-center justify-start">
                    <SectionHeader>
                        <h1 className="text-8xl text-center lg:text-left" >
                            Services
                        </h1>
                    </SectionHeader>
                    <ServicesScroll>
                        <Scroll className="flex items-center " >
                       {services.map((obj)=>{
                           return(
                               <div  key={services.indexOf(obj)}>
                                   <ServiceImage onClick={()=>{set_isclicked(true), set_active_service(services.indexOf(obj))}} animate={{scale: isClicked && active_service == services.indexOf(obj) ?  1.05 : 0.95}} whileHover={{scale: [0.95, 1.05], transition:{duration: 0.9}}} >
                                       <ServiceOverlay>
                                           <h1 className="text-5xl text-center" >
                                               {obj.name}
                                           </h1>
                                       </ServiceOverlay>
                                       <Image src={obj.img} height={250} width={400} />
                                   </ServiceImage>
                               </div>
                           )
                       })}
                       </Scroll>
                    </ServicesScroll>
                    <ServiceContent className="w-full flex flex-col lg:flex-row justify-around items-center pr-4 h-full" >
                        <h1 className="w-full lg:w-1/2 flex h-full items-center justify-center text-center text-5xl" >{services[active_service]?.name}</h1>
                        <p className="w-full lg:w-1/2 flex h-full items-center justify-center text-center text-3xl" >{services[active_service]?.description}</p>
                    </ServiceContent>
                </OverlayContainer>
                <BackDrop>
                    <Image src={psrm_logo} width={1200}  height={400}/>
                </BackDrop>
            </SectionContainer>
        </div>
    )
}

export default ServicesSection

const SectionContainer = styled.div`
    width: 100%;
    position: relative;
    min-height: 500px;
    margin-bottom: 30px;
`

const OverlayContainer = styled.div`
    padding-top: 40px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.8);
    z-index: 1;
`
const SectionHeader = styled.div`
    width: 100%;
    height: 100px;
    padding-left: 30px;
    padding-bottom: 10px;
    >h1{
        color: white;
        font-weight: 900;
        font-family: 'Bebas Neue';
        @media(min-width: 1024px){
            &:after{
                width: 60%;
                height: 5px;
                border-bottom: 5px solid yellow;
                position: absolute;
                background-color: yellow;
                content: "";
                right: 30px;
                margin-top: 40px;
            }
        }
        
    }
`
const ServicesScroll = styled.div`
    width: 80%;
    min-height: 320px;
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    justify-content: space-around;
    overflow-x: scroll;
    padding-left: 500px;
    box-sizing: border-box;
    &::-webkit-scrollbar{
        height: 10px;
        background-color: rgba(0,0,0, 0.6);
    }
    &::-webkit-scrollbar-thumb{
        background-color: yellow;
    }
`
const Scroll = styled.div`
    padding-left: 2100px;
`
const ServiceImage = styled(motion.div)`
    position: relative;
    width: 400px;
    height: 250px;
    box-sizing: border-box;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`
const ServiceOverlay = styled(motion.div)`
    position: absolute;
    top:0;
    background-color: rgba(0,0,0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    >h1{
        color: white;
        font-weight: 500;
        font-family: 'Bebas Neue';
    }
    z-index: 2;
`
const BackDrop = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
`
const ServiceContent = styled.div`
    width: 100%;
    min-height: 400px;
    padding-bottom: 30px;
    >h1{
        color: white;
        font-weight: 800;
        font-family: 'Bebas Neue';
    }
    >p{
        color: white;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`
