export const metadata = {
  title: 'TOSS Consultancy Services',
  description: 'Professional consultancy services for your business needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        lineHeight: 1.6,
        color: '#333'
      }}>{children}</body>
    </html>
  )
}
