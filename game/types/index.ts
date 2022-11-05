import { Dispatch, SetStateAction } from 'react';
export interface IMark {
    value: number;
    label: string;
    beggin?: string;
    id: string;
}

export interface PropsArray {
    bg: string;
}

export interface PropsIconContainer {
    onClick?: (event: MouseEvent) => void
}

export interface PropsItemImg {
    src: string;
    left?: string;
    top?: string;
    width?: string;
    height?: string;
}

export interface PropsAnswerContent {
    position: string;
}

export interface PropsGame {
    arr: any[];
    increasing: string;
}

export interface PropsContainer {
    background: string;
    flexDirection?: string;
}

export interface PropsButton {
    bg: string;
    color: string;
    marginTop?: string;
    padding?: string;
    onClick?: Dispatch<SetStateAction<number>>;
    children?: React.ReactNode;
}

export interface PropsModalContainer {
    visibleModal: boolean;
    onClick: () => void;
}

export interface PropsModal {
    children: React.ReactNode;
    visibleModal: boolean;
    setVisibleModal: Dispatch<SetStateAction<boolean>>;
}