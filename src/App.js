import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeShopDetail from './pages/CoffeeShopDetail';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
    return (
        <Router>
            <div>
                <ErrorBoundary>
                    <Routes>
                        <Route exact path="/" element={<Home />}>
                            
                        </Route>
                        <Route path="/coffeeShop/:coffeeShopId" element={<CoffeeShopDetail />}>
                        </Route>
                        {/* Fallback route */}
                        <Route path="*" element={<h2>404 Not Found</h2>}>
                            
                        </Route>
                        </Routes>
                </ErrorBoundary>
            </div>
        </Router>
    );
};

export default App;
