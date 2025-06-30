// src/Routes.jsx
import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

// Page imports
import AccueilHomepage from "pages/accueil-homepage";
import ActualitSGastronomiquesEditorialHub from "pages/actualit-s-gastronomiques-editorial-hub";
import VNementsCulinairesEventsCalendar from "pages/page-riads";
import RestaurantsDiscoveryHub from "pages/restaurants-discovery-hub";
import GuidesRegionauxRegionalDiscovery from "pages/guides-r-gionaux-regional-discovery";
import NavigationSystemGlobalHeader from "pages/navigation-system-global-header";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<AccueilHomepage />} />
          <Route path="/accueil-homepage" element={<AccueilHomepage />} />
          <Route path="/actualit-s-gastronomiques-editorial-hub" element={<ActualitSGastronomiquesEditorialHub />} />
          <Route path="/v-nements-culinaires-events-calendar" element={<VNementsCulinairesEventsCalendar />} />
          <Route path="/restaurants-discovery-hub" element={<RestaurantsDiscoveryHub />} />
          <Route path="/guides-r-gionaux-regional-discovery" element={<GuidesRegionauxRegionalDiscovery />} />
          <Route path="/navigation-system-global-header" element={<NavigationSystemGlobalHeader />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;