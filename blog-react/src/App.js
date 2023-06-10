import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import PageAdd from "./components/pages/PageAdd";
import PageEdit from "./components/pages/PageEdit";
import Page from "./components/pages/Page";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import { Container } from "react-bootstrap";



const App = () => {
  return (
    <main>
      <Container>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Page />} />
          <Route path="/post/add" element={<PageAdd />}  />
          <Route path="/post/edit/:id" element={<PageEdit />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
