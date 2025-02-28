import React from 'react'
import { CsvLinedTextProps } from './interface'

const CsvLinedText = ({text, filled}: CsvLinedTextProps) => {
  return (
    <svg height="12vh" style={{fill: filled ? "#ffffff": "rgba(255,255,255,0.1)"}} stroke="#ffffff" strokeWidth="1" className="text-line text-line-1" width="100%">
      <text style={{fontSize: "6em", fontWeight: "bold"}} color="#fffff" x="0" dominantBaseline="middle" textAnchor="left" y="58%">{text}</text>
    </svg>
  )
}

export default CsvLinedText