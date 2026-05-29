import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'DS Creative';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          border: '24px solid #eab308',
        }}
      >
        <div
          style={{
            fontSize: 320,
            fontWeight: 900,
            color: '#eab308',
            fontFamily: 'sans-serif',
            lineHeight: 1,
            marginTop: -40,
          }}
        >
          DS
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'sans-serif',
            marginTop: 20,
            letterSpacing: '0.1em',
          }}
        >
          CREATIVE
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
