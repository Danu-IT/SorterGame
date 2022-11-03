import  Head  from 'next/head';
import React, { FC } from 'react'

type Props = {
    children: React.ReactNode;
    title: string;
}

export const MainLayout: FC<Props> = ({children, title}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
    </Head>
    <main>{children}</main>
    </>
  )
}
