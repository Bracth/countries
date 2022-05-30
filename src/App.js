import CountrieList from "./components/countries-list/CountriesList";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CountrieDetail from "./components/countrie-detail/CountrieDetail";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<CountrieList />} />
          <Route path=":countrieName" element={<CountrieDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
