import React, { useMemo, useState }  from 'react'
import { Button, Container } from '.';
import styled from 'styled-components'
import { MainLayout } from '../components/layouts/MainLayout';
import {generateTheme, positionAnswer, PropsThemGame, sortedArrayNum, sortedArrayStr, themGame } from '../utils';
import { NextPage } from 'next';
import Modal from '../components/modal/Modal';
import Link from 'next/link';
import { PropsAnswerContent, PropsArray, PropsGame, PropsIconContainer, PropsItemImg } from '../types';

const game: NextPage<PropsGame> = ({arr, increasing}) => {
    const [answerUser, setAnswerUser] = useState<number[]>([]);
    const [themeCustom, setThemeCustom] = useState<PropsThemGame>(generateTheme(themGame));
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    let array = [...arr];
    let answerRigth = +array[0] < 1000 == true ? sortedArrayNum(array) : sortedArrayStr(array);
    const position = positionAnswer(answerRigth);
    if(increasing !== 'true') {
        answerRigth.reverse();
    }

    const handleElem = (element: number, index: number) => {
        if(answerRigth[answerUser.length] == element){
            setAnswerUser(prev => [...prev, element])
        }
    }
    useMemo(() => {
        if(answerRigth.length == answerUser.length){
            setTimeout(() => setVisibleModal(true), 500)
        }
    },[answerUser])

    return (
        <MainLayout title={'Game page'}>
            <Container flexDirection={'column'} background={themeCustom.theme}>
                <Wrapper>
                    <UpContent>
                        {arr.map((el, index) => {
                            const el2 = themeCustom.icons[index];
                            return(
                                <IconContainer 
                                    onClick={() => handleElem(el, index)}
                                    id={'card'}
                                    key={el}
                                >
                                    <ItemImg key={el} src={el2}/>
                                    <ItemText>{el}</ItemText>
                                </IconContainer>
                            )
                        })}
                    </UpContent>
                    <Array bg={increasing}>
                        <ArrayText bg={increasing}>{increasing !== 'true' ? 'По убыванию' : 'По возрастанию'}</ArrayText>
                    </Array>
                    <AnswerContainer>
                        <DownContent src={themeCustom.field}></DownContent>
                        <AnwserContent position={position}>
                            {answerUser ? answerUser.map((el, index) => {
                            const el2 = themeCustom.icons[arr.indexOf(el)];
                                return(
                                    <IconContainer 
                                        id={'card'}
                                        key={el}
                                >
                                    <ItemImg key={el} src={el2}/>
                                    <ItemText>{el}</ItemText>
                                </IconContainer>
                                )
                            }):
                            null
                        }
                        </AnwserContent>
                    </AnswerContainer>
                </Wrapper>
                <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
                    <ModalIcon left='-83px' top='-56px' src={'./star.svg'}></ModalIcon> 
                    <ModalIcon left='521px' top='39px' width='250px' src={'./star.svg'}></ModalIcon> 
                    <ModalIcon left='550px' top='303px' width='150px' src={'./star.svg'}></ModalIcon>
                    <ModalIcon left='-79px' top='303px' width='250px' src={'./star.svg'}></ModalIcon> 
                    <ModalTitle>Победа!</ModalTitle>   
                    <ModalContent>Молодец! Ты успешно справился с заданием!</ModalContent>
                    <Link href={{pathname: "/"}}>
                        <Button padding={'20px'} color={'white'} bg={'#38DF7A'}>Заново</Button>
                    </Link>
                </Modal>
            </Container>
        </MainLayout>
  )
}

game.getInitialProps = async ({ query }: any) => {
    const {arr, increasing} = query;
    return {arr, increasing}
}

export const Array = styled.div<PropsArray>`
    padding-top: 200px;
    background: url(${p => p.bg !== 'true' ? './reverse.svg': './arr.svg'});
    background-position: ${p => p.bg == 'true' ? '-55px 140px;' : '667px 135px'};
    background-repeat: no-repeat;
    position: relative;
`

export const ArrayText = styled.span<PropsArray>`
    position: absolute;
    top: 150px;
    left: ${p => p.bg !== 'true' ? '694px' : '30px'};
    font-weight: 400;
    font-size: 26px;
    letter-spacing: 2px;
	color: #FFFFFF;
	text-shadow: 
		-0   -2px 0   #242546,
		 0   -2px 0   #242546,
		-0    2px 0   #242546,
		 0    2px 0   #242546,
		-2px -0   0   #242546,
		 2px -0   0   #242546,
		-2px  0   0   #242546,
		 2px  0   0   #242546,
		-1px -2px 0   #242546,
		 1px -2px 0   #242546,
		-1px  2px 0   #242546,
		 1px  2px 0   #242546,
		-2px -1px 0   #242546,
		 2px -1px 0   #242546,
		-2px  1px 0   #242546,
		 2px  1px 0   #242546,
		-2px -2px 0   #242546,
		 2px -2px 0   #242546,
		-2px  2px 0   #242546,
		 2px  2px 0   #242546,
		-2px -2px 0   #242546,
		 2px -2px 0   #242546,
		-2px  2px 0   #242546,
		 2px  2px 0   #242546;
`

export const Wrapper = styled.div`
    min-width: 700px;
    margin: 0 auto
`

export const IconContainer = styled.div<PropsIconContainer>`
    position: relative;
    cursor: pointer;
`

export const UpContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ItemImg = styled.img<PropsItemImg>`
    src: ${p => p.src};
    object-fit: cover;
    width: 110px;
`

export const ItemText = styled.span`
    position: absolute;
    top: 34px; 
    left: 11px;
    font-weight: 400;
    font-size: 56px;
    line-height: 68px;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
	color: #FFFFFF;
	text-shadow: 
		-0   -2px 0   #242546,
		 0   -2px 0   #242546,
		-0    2px 0   #242546,
		 0    2px 0   #242546,
		-2px -0   0   #242546,
		 2px -0   0   #242546,
		-2px  0   0   #242546,
		 2px  0   0   #242546,
		-1px -2px 0   #242546,
		 1px -2px 0   #242546,
		-1px  2px 0   #242546,
		 1px  2px 0   #242546,
		-2px -1px 0   #242546,
		 2px -1px 0   #242546,
		-2px  1px 0   #242546,
		 2px  1px 0   #242546,
		-2px -2px 0   #242546,
		 2px -2px 0   #242546,
		-2px  2px 0   #242546,
		 2px  2px 0   #242546,
		-2px -2px 0   #242546,
		 2px -2px 0   #242546,
		-2px  2px 0   #242546,
		 2px  2px 0   #242546;
`


export const DownContent = styled.img<PropsItemImg>`
    src: ${p => p.src};
    height: 232px;
`

export const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`

export const AnwserContent = styled.div<PropsAnswerContent>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 48px;
    left: ${p => p.position};
    & > * {
        margin-right: 15px;
    }
`

export const Answer = styled.div`
    width: 131px;
    height: 131px;
    background: rgba(0, 0, 0, 0.06);
    box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
`

export const ModalTitle = styled.span`
    color: #FFF9D8;
    font-size: 68px;
	text-shadow: 
		-0   -2px 0   #1E813A,
		 0   -2px 0   #1E813A,
		-0    2px 0   #1E813A,
		 0    2px 0   #1E813A,
		-2px -0   0   #1E813A,
		 2px -0   0   #1E813A,
		-2px  0   0   #1E813A,
		 2px  0   0   #1E813A,
		-1px -2px 0   #1E813A,
		 1px -2px 0   #1E813A,
		-1px  2px 0   #1E813A,
		 1px  2px 0   #1E813A,
		-2px -1px 0   #1E813A,
		 2px -1px 0   #1E813A,
		-2px  1px 0   #1E813A,
		 2px  1px 0   #1E813A,
		-2px -2px 0   #1E813A,
		 2px -2px 0   #1E813A,
		-2px  2px 0   #1E813A,
		 2px  2px 0   #1E813A,
		-2px -2px 0   #1E813A,
		 2px -2px 0   #1E813A,
		-2px  2px 0   #1E813A,
		 2px  2px 0   #1E813A;
`

export const ModalContent = styled.div`
    color: #5F40A1;
    font-size: 40px;
    padding: 70px 0;
    width: 614px;
    text-align: center;
`

export const ModalIcon = styled.img<PropsItemImg>`
    src: ${p => p.src};
    position: absolute;
    left: ${p => p.left};
    top: ${p => p.top};
`

export default game