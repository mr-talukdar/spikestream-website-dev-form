import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import GlobalStyles from "./GlobalStyles"

import * as Pages from "./pages"

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/privacy-policy" element={<Pages.Privacy />} />
                <Route path="/contact-us" element={<Pages.ContactUs />} />
                <Route
                    path="/digital-marketing-services-works"
                    element={<Pages.Portfolio />}
                />
                <Route path="/works">
                    <Route index element={<Pages.Portfolio />} />
                    <Route
                        path="app-development-ketobalanced"
                        element={<Pages.Keto />}
                    />
                    <Route path="hbits" element={<Pages.Hbits />} />
                    <Route path="acepay" element={<Pages.Ace />} />
                    <Route path="iqvia" element={<Pages.Iqvia />} />
                    <Route path="kotakloans" element={<Pages.KotakLoans />} />
                    <Route
                        path="website-animation-kotaknetbanking"
                        element={<Pages.KotakNet />}
                    />
                    <Route
                        path="web-design-celestial-mountains"
                        element={<Pages.Celestial />}
                    />
                    <Route path="vectorflow" element={<Pages.VectorFlow />} />
                </Route>

                <Route path="/blogs" element={<Pages.Blogs />} />
                <Route path="/blogs/:blogPath" element={<Pages.BlogPage />} />

                <Route path="/about" element={<Pages.About />} />
                <Route path="/old" element={<Pages.Old />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
