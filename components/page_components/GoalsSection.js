import { QuestionAnswer } from "@material-ui/icons"
import styled from "styled-components"
import eng from "../../public/black-24dp/2x/outline_engineering_black_24dp.png"
import ccr from "../../public/black-24dp/2x/outline_change_circle_black_24dp.png"
import Image from "next/image"

function GoalsSection() {
    const display_values = [
        {
            img: "https://icon2.cleanpng.com/20180402/yxw/kisspng-black-white-computer-icons-handshake-shake-hands-5ac2e0f16b2987.910225141522721009439.jpg",
            text: "Understand Our Clients",
            pos: "left"
        },
        {
            icon: QuestionAnswer,
            text: "Easen the Process",
            pos: "right"
        },
        {
            img: eng,
            text: "Expert Design",
            pos: "left"
        },
        {
            img: ccr,
            text: "Change",
            pos: "right"
        },
        {
            img: "https://static.thenounproject.com/png/946699-200.png",
            text: "Efficiency",
            pos: "left"
        }
    ]

    const goal = (Icon, text, pos, img, i) => {
        return(
            <div key={i} className="flex items-center w-full justify-between  mb-8 flex-row">
                <GoalIcon className={`flex flex-row ${pos=="left"? "order-1" : "order-2"} items-center justify-center`}>
                {Icon && <Icon style={{fontSize: 70, color: "black"}} />}
                {img && <Image src={img} width={100} height={100}  alt="picture" /> }
                </GoalIcon>
                <GoalText className={`flex text-6xl flex-row ${pos=="left"? "order-2" : "order-1"} items-center justify-center`}>
                    {text}
                </GoalText>
                
            </div>
            
        )
    }
    return (
        <SectionContainer>
            <SectionHeader>
                <h1 className="text-center text-8xl sm:text-left" >
                Our Goals
                </h1>
            </SectionHeader>
            <div className="flex flex-col items-center justify-start">
                {
                    display_values.map((obj)=>{
                        return(
                            goal(obj.icon, obj.text, obj.pos, obj.img, display_values.indexOf(obj))
                        )
                    })
                }
            </div>
        </SectionContainer>
    )
}

export default GoalsSection

const SectionContainer = styled.div`
    margin-top: 40px;
    background-color: white;
    padding-left: 33px;
    padding-right: 33px;
    margin-bottom: 20px;
`
const SectionHeader = styled.div`
width: 100%;
    >h1{
        color: black;
        font-weight: 900;
        font-family: 'Bebas Neue';
        @media(min-width: 640px){
            &:after{
                margin-top: 40px;
                margin-left: 40px;
                position: absolute;
                content: " ";
                height: 10px;
                width: 60%;
                background-color: yellow;
                padding-bottom: 10px;
            }
        }
    }
`

const GoalIcon = styled.div`
    height: 130px;
    width: 200px;
    border-bottom: 10px solid black;
`
const GoalText = styled.div`
    font-weight: 900;
    color: black;
    font-family: 'Bebas Neue';
`
