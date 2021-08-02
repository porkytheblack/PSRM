import styled from "styled-components"
import BannerComponent from "../BannerComponent"
import psrm_logo from "../../public/psrm_logo.jpeg"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import jetl from "../../public/project_images/jetlink.jpg"
import stima1 from "../../public/project_images/stimavillage.jpg"
import icpackcomplex from "../../public/project_images/icpack.jpg"
import thika from "../../public/project_images/thikagreens.jpg"
import thika3 from "../../public/project_images/thikagreens3.jpg"
import swiss from "../../public/project_images/swisshotel.jpg"
import kc from "../../public/project_images/kcb.jpg"
import kc2 from "../../public/project_images/kcb2.jpg"
import kdc from "../../public/project_images/kenyaairwaysdatacenter.jpg"
import kaa from "../../public/project_images/kAA.jpg"
import blue from "../../public/project_images/blue_bird.jpg"

function ProjectsSection({r}) {
    const [chosen_project, set_chosen_project] = useState(0)
    const [show_gallery, set_show_gallery] = useState(false)
    const [show_description, set_show_description ] = useState(true)
    const projects = [
        {
            name: "JETLINK OFFICE BLOCK AND HANGAR",
            description: "The project entailed the construction of a hangar that houses 3 to 4 aircrafts for Jetlink Holding Ltd.",
            img: jetl ,
            gallery: [
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            ]
        },
        {
            name: "Stima Village",
            description: "The project entailed the construction of a housing scheme with 74 houses complete with a community centre, swimming pool ,treatment plant ,water reticulation and acess roads",
            img: stima1,
            gallery: [
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            ]
        },
        {
            name: "ICKPACK COMPLEX",
            description: "The projct entailed the construuction of an office complex that included a 5 star hotel, swimming pool , offices and conference halls.",
            img: icpackcomplex,
            gallery: [
                "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            ]
        },
        {
            name: "KCB EXPANSION PROGRAM",
            description: "The project entailed the management of KCB'S countrywide branch expansion",
            img: kc,
            gallery: [
                kc2
            ]
        },
        {
            name: "THIKA GREENS",
            description: "The entirety of the project is composed of three estates developed on 1700 acres . The project includes a school, a shopping center , housing estate, 18 hole championing golf course,300 apartments ,2 hotels,a mall and an office park.",
            img: thika,
            gallery: [
                thika3
            ]
        },
        {
            name: "SWISS INTERNATIONAL HOTELS AND RESORTS",
            description: "Hotel and Club house ",
            img: swiss,
            gallery: [
                swiss
            ]
        },
        {
            name: "KENYA AIRWAYS DATA CENTER",
            description: "installation.",
            img: kdc,
            gallery: [
                kdc
            ]
        },
        {
            name: "KENYA AIRPORT AUTHORITY DATA CENTER",
            description: "installation",
            img: kaa,
            gallery: [
             kaa
            ]
        },
        {
            name: "BLUE BIRD OFFICE BLOCK AND HANGAR",
            description: "The project entailed the construction of an office complex and an adjascent hangar that houses 3 to 4 aircrafts",
            img: blue,
            gallery: [
                blue
            ]
        },
        {
            name: "NAIROBI WEST HOSPITAL",
            description: "Construction..........",
            img: thika,
            gallery: [
                thika3
            ]
        }

    ]


    const detail = (content) =>{
        return(
                <ProjectSummary>
                    <p className="text-3xl">{ content }</p>
                </ProjectSummary>
            )
    }

    const gallery = (gallery_images) =>{
        var top = gallery_images.length/2;
        var bottom = gallery_images.length/2;
        top = top.toString().indexOf(".") !== -1 && top > 5 ? top : gallery_images.length;
        bottom = bottom.toString().indexOf(".") !== -1 && top > 5 ? bottom : 0; 
        return(
        <ProjectGallery n={projects[chosen_project].gallery.length} className=" flex flex-col items-center justify-between pt-6 pb-6" >
            
            {top > 0 &&
                
                <div className="ml-28 mb-5" >{
                    gallery_images.map((item)=>{
                        if(gallery_images.indexOf(item) < top){
                            return(
                                <Image src={item} width={300} height={200} />
                        )
                        }
                    })
                    }</div>
            }
            {
                bottom > 0 &&
                <div className="flex flex-row ml-10">{
                    gallery_images.map((item)=>{
                        if(gallery_images.indexOf(item) > top){
                            return(
                                <Image src={item} width={300} height={200} />
                        )
                        }
                    })
                    }</div>
            }
        </ProjectGallery>
        )
    }




    return (
        <div ref={r} >
        <BannerComponent 
            back_image="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" 
            section_title="What We Have Built" 
            section_content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
        <SectionContainer className="w-full flex flex-col items-center justify-start">
            <OverlayContainer>
                    <SectionHeader>
                        <h1 className="text-8xl text-center lg:text-left " >
                            Projects
                        </h1>
                    </SectionHeader>
                    <ProjectDetail className="flex flex-col lg:flex-row mt-6 space-between" >
                        <ProjectScrollSection>
                            <div className="flex flex-row lg:flex-col">
                            {
                                projects.map((obj)=>{
                                    return(
                                        <div onClick={()=>{set_chosen_project(projects.indexOf(obj)), console.log("chosen project is: ",projects.indexOf(obj))}} className={` cursor-pointer ${projects.indexOf(obj) == 0 ? "lg:mt-40" : ""}`} key={projects.indexOf(obj)} >
                                        <ProjectImage  >
                                            <Back>
                                            <Image src={obj.img} height={300} width={250} />
                                            </Back>                                            
                                            <ProjectImageOverlay className="flex items-center justify-center">
                                                <h1 className="text-5xl text-center">{obj.name}</h1>
                                            </ProjectImageOverlay>
                                        </ProjectImage>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </ProjectScrollSection>
                        <ProjectDisplaySection  className="flex flex-col items-center justify-start">
                            <div className="w-full flex items-center justify-center" >
                                <h1 className="text-5xl text-center pt-6 pb-6">
                                    {projects[chosen_project].name}
                                </h1>
                            </div>
                            <div className="w-full flex pl-5 justify-between items-center" >
                                <p onClick={()=>{set_show_gallery(false), set_show_description(true)}} className={` text-3xl cursor-pointer ${show_description?"text-yellow-400" : "text-white"}`} >
                                    Details
                                </p>
                                <p onClick={()=>{set_show_gallery(true), set_show_description(false)}} className={` text-3xl cursor-pointer ${show_gallery?"text-yellow-400" : "text-white"}`} >
                                    Project Gallery
                                </p>
                            </div>
                            <div>
                                {show_gallery && gallery(projects[chosen_project].gallery)}
                                {show_description && detail(projects[chosen_project].description)}
                            </div>
                        </ProjectDisplaySection>
                    </ProjectDetail>
            </OverlayContainer>
            <BackDrop >
                <Image src={psrm_logo} height={300} width={1100} />
                <Image src={psrm_logo} height={300} width={1100} />
            </BackDrop>
        </SectionContainer>
        </div>
    )
}

export default ProjectsSection

const SectionContainer = styled.div`
 min-height: 500px;
 width: 100%;
 position: relative;
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
const BackDrop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left; 0;
    z-index: -2;
`
const OverlayContainer = styled.div`
    width: 100%;
    min-height: 650px;
    background-color: rgba(0, 0, 0, 0.8);
    padding-top: 40px;
    padding-bottom: 30px;
`
const ProjectDetail = styled.div`
    width: 100%;
    height: 100%;

`
const ProjectScrollSection = styled.div`
    @media(min-width: 1024px){
        width: 300px;
        height: 500px;
        flex-direction: column;
        overflow-y: scroll;
        >div{
            padding-top: 3000px;
            >div{
                height: 300px;
                margin-top: 60px;
                margin-left: 10px;
            }
            
        }
    }
    @media(max-width: 1024px){
        width: 90%;
        height: 350px;
        flex-direction: row;
        overflow-x: scroll;
        >div{
            padding-left: 2300px;
            >div{
                height: 300px;
                margin-left: 10px;
            }
            
        }
    }
    
    
    display: flex;
    
    
    justify-content: space-around;
    padding-bottom: 20px;
    align-items: center;
    
    &::-webkit-scrollbar{
        width: 10px;
        height: 10px;
        background-color: rgba(0, 0, 0, 0.8);
    }
    &::-webkit-scrollbar-thumb{
        background-color: yellow;
    }
`

const ProjectImage = styled.div`
    width: 250px;
    margin: auto auto;
    height: 300px;
    position: relative;
    margin-bottom: 20px;
    z-index:0.5;
`
const ProjectImageOverlay = styled.div`
    width: 250px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.6);
    >h1{
        font-weight: 400;
        color: white;
        font-family: 'Bebas Neue';
    }
    position: absolute;
    top: 0;
`

const Back = styled.div`
    width: 100%;
    height: 100%;
`

const ProjectDisplaySection = styled.div`
    @media(max-width: 1024px){
        width: 100%;
    }
    @media(min-width: 1024px){
        width: 70%;
    }
    padding-right: 30px;
    >div{
        >h1{
            font-weight: 500;
            color: white;
            font-family: 'Bebas Neue';
        }
        >p{
            font-weight: 300;
            font-family: 'Bebas Neue'; 
        }
        
    }
`
const ProjectSummary = styled(motion.div)`
    width: 100%;
    height: 100%;
    >p{
            font-weight: 500;
            color: white;
            font-family: 'Roboto', sans-serif;
            text-align: left;
    }
    >span{
            font-size: 30px;
            font-weight: 500;
            color: yellow;
            font-family: 'Roboto';
    }
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    padding-right: 20px;

`
const ProjectGallery = styled(motion.div)`
    height: 450px;
    max-width: 90%;
    
    ${({n})=>{
        if(n > 6){
            return(
                "overflow-y: scroll; &::-webkit-scrollbar{ background-color: rgba(0, 0, 0, 0.8); height: 10px; } &::-webkit-scrollbar-thumb{ background-color: yellow; }"
            )
        }
    }}    
`


