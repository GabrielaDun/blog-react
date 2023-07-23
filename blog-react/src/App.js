import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import PageAdd from "./components/pages/PageAdd/PageAdd";
import PageEdit from "./components/pages/PageEdit/PageEdit";
import Page from "./components/pages/Page/Page";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import { Container } from "react-bootstrap";
import CategoryList from "./components/pages/CategoryList/CategoryList";
import CategoryPage from "./components/pages/CategoryPage/CategoryPage";



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
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
