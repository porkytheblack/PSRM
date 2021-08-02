import {motion, useAnimation} from 'framer-motion'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { Menu } from '@material-ui/icons'

function HeroSection({r}) {
    const [img1, set_img1] = useState("https://images.unsplash.com/photo-1503039153293-d4d2ba067754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")
  const [img2, set_img2] = useState("https://images.unsplash.com/photo-1560574188-6a6774965120?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")
  const [hght, set_hght] = useState(350)
  const [h1, set_h1] = useState(0)
  const [a, set_a] = useState(true)
  const [b, set_b] = useState(false)
  const timer = useRef(null)
  const timerRef = useRef(null)
  const controls  = useAnimation()
  const [change, set_change] = useState(false)
  const [active_link, set_active_link] = useState(undefined)
  const [link_clicked, set_link_click] = useState(false)
  const [motion, set_motion] = useState(undefined)
  const overlay_text_animation = useAnimation()
  const top_nav_links = ["Home", "About", "Our Services","Our Projects", "Our Location","Contact Us" ]
  const heading_texts = [
    "Leading the Industry Since 2008",
    "Building Tomorrow Today",
    "Briging Change to the Industry",
    "Understanding the process"
  ]
  const heading_images= [
    "https://images.unsplash.com/photo-1503039153293-d4d2ba067754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1560574188-6a6774965120?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1574689049868-e94ed5301745?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80"
  ]
  const [overlay_text, set_overlay_text] = useState(heading_texts[0])
  const [t, set_t] = useState(0)

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

  const w_size = useWindowSize()

  const change_image = async () =>{
    
    var ab = heading_images.indexOf(img1);
    let _a;
    if(ab  < 4){
      if(ab == 3){
        _a  = heading_images[0]
      }else{
        _a  = heading_images[ab+1]
      }      
    }
    
    set_img1(_a)
    set_change(!change)
  } 

  useEffect(() => {
        timer.current = setTimeout(()=>{
          
          change_image()
                   
        }, 5900)
        
    return ()=>{
      clearTimeout(timer.current)
    } 
  }, [change])
  useEffect(() => {
    const n = heading_images.indexOf(img1)
      if(n == 2 || n == 3){
        set_img2(heading_images[0])
      }else{
        set_img2(heading_images[n+1])
      }
    timerRef.current  = setTimeout(()=>{
      overlay_text_animation.start({
        height: [250, 0],
        transition: {duration: 0.5}
      }).then(()=>{
        overlay_text_animation.stop()
        if(heading_texts.indexOf(overlay_text) < 3){
          set_overlay_text(heading_texts[heading_texts.indexOf(overlay_text)+1])
        }else{
          set_overlay_text(heading_texts[0])
        }
      }).then(()=>{
        overlay_text_animation.start({
          height: [0, 250],
          transition: {duration: 1}
        }).then(()=>{
          overlay_text_animation.stop()
        })
      })
    }, 4950)
    return () => {
      clearTimeout(timerRef.current)
    };
  }, [change]);
    return (
        <div ref={r} >
            <BackDrop s={w_size.width}  back_image={img2}>
            <OverlayContainer className="flex flex-col " s={w_size.width} >
                <div className="h-80 flex items-center justify-center w-full">
                <OverlayText s={w_size.width} animate={overlay_text_animation} className="flex items-center justify-center" >
                    <div className="h-52 text-8xl text-center flex-wrap"> {overlay_text} </div>
                </OverlayText>
                </div>
            </OverlayContainer>
            <Cont className="relative flex h-80">
            <Aimage back_image={img1} s={w_size.width} animate={{height: [0, 500]}} transition={{duration: 1.5, repeat: "Infinity", repeatDelay:4.4}}  >
            </Aimage>
            <Bimage back_image={img1} s={w_size.width} animate={{height: [0, 500]}} transition={{duration: 1.3, repeat: "Infinity", repeatDelay:4.6}}>
            </Bimage>
            <Cimage back_image={img1} s={w_size.width}   animate={{height: [0, 500]}} transition={{duration: 1.1, repeat: "Infinity", repeatDelay:4.8}}>
            </Cimage>
            <Dimage back_image={img1} s={w_size.width}   animate={{height: [0, 500]}} transition={{duration: 1.3, repeat: "Infinity", repeatDelay:4.6}}>
            </Dimage>
            <Eimage back_image={img1}  s={w_size.width}   animate={{height: [0, 500]}} transition={{duration: 1.5, repeat: "Infinity", repeatDelay:4.4}}>
            </Eimage>
            </Cont>
        </BackDrop>
        </div>
    )
}

export default HeroSection



const OverlayContainer = styled.div`
  width: ${props=>{return(`${props.s}px`)}};
  height: 500px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const OverlayText = styled(motion.div)`
  
  overflow: hidden;
  height: 180px;
  >div{
    padding: 5px;
    ${(props)=>{
      if(props.s > 500){
        return "font-size: 100px;"
      }else{
        return "font-size: 50px;"
      }
    }}
    font-weight: 400;
    color: white;
    font-family: 'Bebas Neue'
  }
  
`

const BackDrop = styled(motion.div)`
  width: 100%;
  height: 500px;
  background-image: url(${(props)=>{return props.back_image}});
  background-size: ${props=>{return(`${props.s}px`)}} 500px;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`

const Cont = styled.div`
  width: 100%;
`

const Aimage = styled(motion.div)`
  overflow: hidden;
  width: 20%;
  background-image: url(${(props)=>{return props.back_image}});
  background-size: ${props=>{return(`${props.s}px`)}} 500px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
`
const Bimage = styled(motion.div)`
  width: 20%;
  overflow: hidden;
  background-image: url(${(props)=>{return props.back_image}});
  background-size: ${props=>{return(`${props.s}px`)}} 500px;
  background-repeat: no-repeat;
  background-position: left 25% top 0px;
`
const Cimage = styled(motion.div)`
  width: 20%;
  overflow: hidden;
  background-image: url(${(props)=>{return props.back_image}});
  background-size: ${props=>{return(`${props.s}px`)}} 500px;
  background-repeat: no-repeat;
  background-position: left 50% top 0px;
`
const Dimage = styled(motion.div)`
  width: 20%;
  overflow: hidden;
  background-image: url(${(props)=>{return props.back_image}});
  background-size: ${props=>{return(`${props.s}px`)}} 500px;
  background-repeat: no-repeat;
  background-position: left 75% top 0px;
`
const Eimage = styled(motion.div)`
  width: 20%;
  overflow: hidden;
  background-image: url(${(props)=>{return props.back_image}});
  background-size: ${props=>{return(`${props.s}px`)}} 500px;
  background-repeat: no-repeat;
  background-position: right 0px top 0px;
`
