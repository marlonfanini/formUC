import type { Metadata } from 'next'
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material'
import '@/styles/styles.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Grid style={{display: 'flex', flexDirection: 'column'}} container component="main" >
          <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#0A233F' }} position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <span className='globalFont' style={{ fontWeight: 400, fontSize: '18px' }}>UNITED</span> <span className='globalFont' style={{ fontWeight: 400, fontSize: '18px' }}>CAPITAL | </span>
                  <span className='globalFont' style={{ fontWeight: 300, fontSize: '18px' }}>HAZTE</span> <span className='globalFont'  style={{ fontWeight: 300, fontSize: '18px' }}>CLIENTE</span>
                </Typography>
              </Toolbar>              
            </AppBar>
          </Box>
          <div style={{display: 'flex',justifyContent: 'right', margin: '30px 40px 0px 30px '}}>
            <img src="https://i.ibb.co/Vwpm8yj/logo-og.png" width={'100px'}  ></img>              
            </div>
          {children}
        </Grid>
      </body>
    </html>
  )
}
