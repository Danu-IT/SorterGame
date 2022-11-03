import {MainLayout} from '../components/layouts/MainLayout'
import styled from 'styled-components'
import SliderMain from '../components/slider/SliderMain'
import { countItems, countRangeGenerate, generateArr, generateLetters, meaning } from '../utils'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

export default function Home() {
  const [valueItems, setValueItems] = useState<string>('1');
  const [valueRange, setValueRange] = useState<string>('1');
  const [disabled, setDisabled] = useState<boolean>(false);

  const size = countItems[+valueItems - 1].label;
  const countRange = meaning[+valueRange - 1].label;

  let beggin: string = '';
  let end: string | undefined = '';
  let letter: string = '';
  let arr: any[] = [];

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

  useMemo(() => {
    if(disabled) arr;
    else arr.reverse()
  },[disabled])

  return (
    <MainLayout title={'Main page'}>
      <Container>
        <MainCardShell>
          <MainCard>
            <MainCardContent>
              <SliderMain setValue={setValueItems} value={valueItems} arr={countItems} title='Кол-во предметов'></SliderMain>
              <SliderMain setValue={setValueRange} value={valueRange} arr={meaning} title='Значения'></SliderMain>
              <ButtonContainer>
                <Button onClick={() => toggleBtn(arr)} disabled={disabled} padding={'10px'} color={'#423F45'} bg={'#FFD748'}>По возрастанию</Button>
                <Button onClick={() => toggleBtn(arr)} disabled={!disabled} padding={'10px'} color={'#423F45'} bg={'#FFD748'}>По убыванию</Button>
              </ButtonContainer>
              <Button marginTop={'70px'} padding={'15px'} color={'white'} bg={'#38DF7A'}>Играть</Button>
              <div style={{display: 'flex'}}>{arr.map(el => (<div>{el}.</div>))}</div>
            </MainCardContent>
          </MainCard>
        </MainCardShell>
      </Container>
    </MainLayout>
  )
}

const Container = styled.div`
  background-image: url('./bg-main.png');
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
interface PropsButton {
  bg: string;
  color: string;
  marginTop?: string;
  padding?: string;
  onClick?: Dispatch<SetStateAction<number>>;
}

const Button = styled.button<PropsButton>`
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