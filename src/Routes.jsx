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

// ✅ Nouveaux imports
//import PageAlcohol from "pages/page-alcohol";
import PagePeople from "pages/page-people";
import PageRecette from "pages/page-recette";

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

          {/* ✅ Nouvelles routes */}
         {/* <Route path="/page-alcohol" element={<PageAlcohol />} /> */}
          <Route path="/page-people" element={<PagePeople />} />
          <Route path="/page-recette" element={<PageRecette />} />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
