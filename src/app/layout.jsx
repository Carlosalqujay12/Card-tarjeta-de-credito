import '../styles/globals.css'


export const metadata = {
  title: 'Tarjeta de Credito',
  description: 'Primer componente',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        
      </body>
    </html>
  )
}
