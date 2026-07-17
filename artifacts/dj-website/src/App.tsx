import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { LanguageProvider } from './context/LanguageContext';
import { AudioProvider } from './context/AudioContext';

import Home from './pages/Home';
import About from './pages/About';
import Mixes from './pages/Mixes';
import Music from './pages/Music';
import Videos from './pages/Videos';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Press from './pages/Press';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/mixes" component={Mixes} />
      <Route path="/music" component={Music} />
      <Route path="/videos" component={Videos} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/events" component={Events} />
      <Route path="/press" component={Press} />
      <Route path="/bookings" component={Bookings} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AudioProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
        </AudioProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
