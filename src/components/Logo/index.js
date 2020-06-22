import React from 'react'
import { Svg } from './styles'

export const Logo = props => {
  return (
    <Svg
      width={252.688}
      height={122.021}
      viewBox="123.656 13.989 252.688 122.021"
      style={{
        background: '0 0'
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter id="prefix__editing-extrude-glow">
          <feFlood floodColor="#333" result="flood-1" />
          <feMorphology radius={1} in="SourceAlpha" result="erode" />
          <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
          <feConvolveMatrix
            order="2,2"
            divisor={1}
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 1 1"
          />
          <feOffset dx={-2} in="convolve" result="extrude" />
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          />
          <feFlood floodColor="#000" result="flood-2" />
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          />
          <feMorphology
            operator="dilate"
            radius={1}
            in="comp2"
            result="dilate"
          />
          <feOffset dx={-3} in="dilate" result="offset" />
          <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-extrude-glow)">
        <path
          d="M190.955 60.077q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57h-1.54q-.38 0-.7.07l-7.36 38.59h-13.89l7.87-41.92q6.85-.64 10.82-.7 3.96-.07 6.97-.07zm41.92 31.87q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.52 2.11-4.41 0-7-.96-2.6-.96-4.32-2.75-3.4-3.39-3.4-9.6 0-9.67 5.25-15.55 5.63-6.34 15.43-6.34 6.08 0 9.08 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07 1.32 1.12 3.75 1.12 2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.16-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm22.2 11.39q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63zm42.12-11.58q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02l-3.32 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76zm33.66 10.75q-3.33 3.45-9.41 3.45-7.61 0-9.21-5.56-.52-1.67-.52-3.52 0-1.86.39-3.78l3.01-16 12.99-1.28-3.52 18.62q-.13.84-.32 1.73-.19.9-.19 1.83 0 .92.32 1.53t.76.99q.77.52 2.15.52 1.37 0 2.56-1.67 1.18-1.66 1.76-4.54l3.52-17.73 12.61-1.28-4.8 25.15q-2.37 12.29-7.24 17.15-2.49 2.5-5.72 3.49-3.24.99-7.4.99-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.62 1.99-4.13 1.98-1.5 5.05-1.5 2.69 0 4.74 1.15 1.22.7 1.79 1.6-1.47 1.28-1.47 3.39 0 2.82 2.56 2.82 4.22 0 6.66-9.73.7-2.88 1.34-5.95z"
          fill="#7069fa"
        />
      </g>
      <style />
    </Svg>
  )
}
