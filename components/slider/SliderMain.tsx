import React, { Dispatch, FC, FormEvent, SetStateAction} from 'react'
import styled from 'styled-components'
import { IMark } from '../../types';
import { Slider } from '@mui/material';
import { countWidth } from '../../utils';

interface PropsSlider {
    arr: IMark[];
    title: string;
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
}

const SliderMain: FC<PropsSlider> = ({arr, title, value, setValue}) => {
    const width = countWidth(arr.length);
    const handle = (e: any) => setValue(e.target.value)

  return (
    <CountItems width={width}>
        <H>{title}</H>
        <Slider
            value={value}
            onChange={handle}
            defaultValue={1}
            step={1}
            marks={arr}
            min={1}
            max={arr.length}
            />
    </CountItems>
  )
}

export default SliderMain

interface PropsCountItems {
  width: number;
}

const CountItems = styled.div<PropsCountItems>`
  width: ${p => p.width}px
`
const H = styled.h2`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: #423F45;
`