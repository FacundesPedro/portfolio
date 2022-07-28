import React, { ReactNode,CSSProperties } from 'react'
import {ISection} from '../../interfaces'

interface SectionComponent {
    styles?: CSSProperties
    children: ReactNode
}

const sectionDivContainer: CSSProperties = {
    width:'100vw'
}

export const SectionWrapper = ({children,styles}: SectionComponent) => {

    
    return (
        <div className="section" style={ {...sectionDivContainer,...styles} }>
            {children}
        </div>
    )
}