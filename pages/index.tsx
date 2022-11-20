import {MainLayout} from '../components/layouts/MainLayout'
import styled from 'styled-components'
import SliderMain from '../components/slider/SliderMain'
import { countItems, countRangeGenerate, generateArr, generateLetters, meaning } from '../utils'
import { useState } from 'react';
import Link from 'next/link';
import { PropsButton, PropsContainer } from '../types';

export default function Home() {
  const [valueItems, setValueItems] = useState<number>(1);
  const [valueRange, setValueRange] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(false);

  const size = countItems[+valueItems - 1].label;
  const countRange = meaning[+valueRange - 1].label;

  let beggin: string = '';
  let end: string | undefined = '';
  let letter: string = '';
  let arr: any[] = [];
  let increasing: boolean = false;

  if(countRange == 'A'){
    letter = countRangeGenerate(+valueRange)
  } else {
    beggin = countRangeGenerate(+valueRange);
    end = meaning[+valueRange - 1].beggin;
  }

  if(beggin && end ) {
    arr = generateArr(beggin, end, size);
  }

  if(letter){
    arr = generateLetters(letter, size);
  }
  
  const toggleBtn = (arr: any[]) => {
    setDisabled(prev => !prev);
  }

  if(disabled) {
    increasing = true;
  } else {
    increasing = false;
  }

  return (
    <MainLayout title={'Main page'}>
      <Container background={'./bg-main.png'}>  
        <MainCardShell>
          <MainCard>
            <MainCardContent>
              <SliderMain setValue={setValueItems} value={valueItems} arr={countItems} title='Кол-во предметов'></SliderMain>
              <SliderMain setValue={setValueRange} value={valueRange} arr={meaning} title='Значения'></SliderMain>
              <ButtonContainer>
                <Button onClick={() => toggleBtn(arr)} disabled={disabled} padding={'10px'} color={'#423F45'} bg={'#FFD748'}>По возрастанию</Button>
                <Button onClick={() => toggleBtn(arr)} disabled={!disabled} padding={'10px'} color={'#423F45'} bg={'#FFD748'}>По убыванию</Button>
              </ButtonContainer>
              <Link href={{pathname: "game", query: {arr: arr, increasing: increasing}}}>
                <Button marginTop={'70px'} padding={'15px'} color={'white'} bg={'#2BD600'}>Играть</Button>
              </Link>
            </MainCardContent>
          </MainCard>
        </MainCardShell>
      </Container>
    </MainLayout>
  )
}

export const Container = styled.div<PropsContainer>`
  background-image: url(${p => p.background});
  flex-direction: ${p => p.flexDirection};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainCardShell = styled.div`
  background: linear-gradient(198.7deg, #7F75F0 -40.02%, #101F32 96.22%),linear-gradient(0deg, #FFFFFF, #FFFFFF);
  border-radius: 40px;
`

const MainCard = styled.div`
  background: white;
  margin: 10px;
  border-radius: 40px;
  width: 600px;
  display: flex;
  justify-content: center;
`

const MainCardContent = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`

export const Button = styled.button<PropsButton>`
  background: ${p => p.bg};
  color: ${p => p.color};
  border: none;
  cursor: pointer;
  padding: ${p => p.padding};
  width: 200px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 22px;
  margin-top: ${p => p.marginTop};

  :hover{
    opacity: 0.8;
  }

  :disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }
`