import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A1A1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          fontSize: 16,
          fontWeight: 900,
          color: '#D0021B',
          letterSpacing: '-0.5px',
        }}
      >
        FC
      </div>
    ),
    { ...size }
  )
}
