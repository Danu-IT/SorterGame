import React, { Dispatch, FC, SetStateAction} from 'react'
import styled from 'styled-components'
import { IMark } from '../../types';
import {Slider} from '@mui/material';
import { countWidth } from '../../utils';

interface PropsSlider {
    arr: IMark[];
    title: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const SliderMain: FC<PropsSlider> = ({arr, title, value, setValue}) => {
    const width = countWidth(arr.length);
  return (
    <CountItems width={width}>
        <H>{title}</H>
        <Slider
            onChange={(e) => setValue(e.target.value)}
            value={value}
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