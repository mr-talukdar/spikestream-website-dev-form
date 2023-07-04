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

                <Route path="/works">
                    <Route index element={<Pages.Portfolio />} />
                    <Route path="ketobalanced" element={<Pages.Keto />} />
                    <Route path="hbits" element={<Pages.Hbits />} />
                    <Route path="acepay" element={<Pages.Ace />} />
                    <Route path="iqvia" element={<Pages.Iqvia />} />
                    <Route path="kotakloans" element={<Pages.KotakLoans />} />
                    <Route
                        path="kotaknetbanking"
                        element={<Pages.KotakNet />}
                    />
                    <Route
                        path="celestial-mountains"
                        element={<Pages.Celestial />}
                    />
                    <Route path="vectorflow" element={<Pages.VectorFlow />} />
                </Route>

                <Route path="/blogs" element={<Pages.Blogs />} />
                <Route path="/blogs/read" element={<Pages.BlogPage />} />

                <Route path="/about" element={<Pages.About />} />
                <Route path="/old" element={<Pages.Old />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
