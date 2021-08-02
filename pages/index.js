import { Menu } from '@material-ui/icons'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import AboutSection from '../components/page_components/AboutSection'
import AchievementSection from '../components/page_components/AchievementSection'
import Clients from '../components/page_components/Clients'
import ContactSection from '../components/page_components/ContactSection'
import GoalsSection from '../components/page_components/GoalsSection'
import HeroSection from '../components/page_components/HeroSection'
import InfoSection from '../components/page_components/InfoSection'
import OurHistory from '../components/page_components/OurHistory'
import OurLocation from '../components/page_components/OurLocation'
import ProjectsSection from '../components/page_components/ProjectsSection'
import ServicesSection from '../components/page_components/ServicesSection'

function Home({topnav_bg}) {
  //scroll refs
  const abt_ref = useRef(null)
  const goal_ref = useRef(null)
  const hist_ref = useRef(null)
  const loc_ref = useRef(null)
  const ach_ref  = useRef(null)
  const ser_ref = useRef(null)
  const cli_ref  = useRef(null)
  const p_ref = useRef(null)
  const h_ref = useRef(null)
  const c_ref = useRef(null)

  const scrollTo = (n)=>{
    if(n !== null){
      n.current.scrollIntoView({ behavior: 'smooth' })
    }    
  }


  const [active_link, set_active_link] = useState(undefined)
  const [link_clicked, set_link_click] = useState(false)
  const [motion, set_motion] = useState(undefined)
  const top_nav_links = ["Home", "About", "Our Services","Our Projects", "Our Location","Contact Us" ]

  const useWindowSize = () =>{
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined
    })
    useEffect(() => {
      const handleResize = () =>{
        if(typeof(window) !== undefined){
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          })
        }
      }
      if(typeof(window) !== undefined){
        window.addEventListener("resize", handleResize);

        handleResize()

        return () => {
          window.removeEventListener("resize", handleResize)
        };
      }
      
    }, []);
    return windowSize
  }
  const w_size = useWindowSize();

  //top nav link
  const NavLink = (title, i) =>{
    return(
      <TopNavLink className="cursor-pointer" onMouseEnter={()=>{set_motion("hover"), set_active_link(i)}} onMouseLeave={()=>{set_motion("hover_leave"), set_active_link(i)}}   onClick={()=>{set_active_link(i), set_motion("click"), set_link_click(true), scrollTo(title == "About" ? abt_ref : title == "Our Services" ? ser_ref: title=="Our Projects" ? p_ref: title == "Home" ? h_ref : title == "Our Location" ? loc_ref : title == "Contact Us" ? c_ref : null ) }} key={i}>
        <div>
         {title}
        </div> 
        {(typeof(active_link) !== 'undefined' && link_clicked !== true && i == active_link && typeof(motion) !== "undefined" && motion=="hover_leave")  && <LinkUnderline animate={{width: ["100%", "0%"]}} transition={{duration: 1}} custom={i} >  </LinkUnderline>}
        {(typeof(active_link) !== 'undefined' && i == active_link && typeof(motion) !== "undefined" && (motion == "click" || motion == "hover") ) && <LinkUnderline animate={{width: ["0%", "100%"]}} transition={{duration: 0.5}} custom={i} >  </LinkUnderline>}  
      </TopNavLink>
    )
  }



  return (
    <div >
      <Head>
        <title>PSRM CONSULTUNTS</title>
        <meta name="description" content="PSRM CONSULTUNTS" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      </Head>
      <TopNav bg={topnav_bg} className=" flex items-center z-50 justify-between fixed pl-4 pr-4">
            <div className="w-28 h-20">

            </div>
            {w_size.width < 768 &&<Menu className="flex  md:hidden"  style={{color:"white"}} />}
            <div className="hidden md:flex items-center  justify-around w-3/4">
                {top_nav_links.map((title)=>{
                return(
                    NavLink(title, top_nav_links.indexOf(title))
                )              
                })}
            </div>
            </TopNav>
      <HeroSection r={h_ref} />
      <InfoSection w_size={w_size} />
      <AboutSection r={abt_ref} w_size={w_size} />
      <GoalsSection r={goal_ref} w_size={w_size} />
      <OurHistory r={hist_ref} w_size={w_size} />
      <OurLocation r={loc_ref} w_size={w_size} />
      <AchievementSection r={ach_ref} w_size={w_size} />
      <ServicesSection r={ser_ref} w_size={w_size} />
      <Clients r={cli_ref } w_size={w_size} />
      <ProjectsSection r={p_ref} w_size={w_size} />
      <ContactSection r={c_ref} />
    </div>
  )
}

const mapStateToProps = state =>{
  return ({
      topnav_bg: state.main.topnav_bg
  })
}


export default connect(mapStateToProps)(Home) 

const TopNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(0,0,0, 0.8);
  

`
const TopNavLink = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  >div{
    font-weight: 400;
    color: white;
    font-size: 30px;
    font-family: 'Bebas Neue'
  }
`

const LinkUnderline = styled(motion.div)`
  height: 0px;
  background-color: yellow;
  padding-bottom: 5px;
  width: 0%;
`
