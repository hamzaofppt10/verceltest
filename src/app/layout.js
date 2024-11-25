import { ThemeProvider } from '@/components/ui/theme-provider';
import Navbar from './components/Navbar';
import MoviesProvider from './context/moviesContext';
import './styles/globals.css';
import './styles/embla.css';
import { NextUIProvider } from '@nextui-org/react'


export default function Layout({ children }) {
  return (
    <html>

      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        // disableTransitionOnChange  
        >
          <NextUIProvider>

            <MoviesProvider>
              <Navbar >
                {children}
              </Navbar>
            </MoviesProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}