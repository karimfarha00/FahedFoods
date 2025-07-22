import Header from './components/header/Header';
import Logowrapper from './components/logowrapper/page';
import Trustpage from './components/trust/page';
import FoodPortfoliopage from './components/foodportfolio/page';
import  BeveragePortfolioPage from './components/beverageportfolio/page';
import RootedPage from './components/rooted/page';
import BlogsPage from './components/blogs/page';

export default function Home() {
  return (
    <section>
      <Header />
      <Logowrapper />
      <Trustpage />
      <FoodPortfoliopage />
      <BeveragePortfolioPage />
      <RootedPage />
      <BlogsPage />
    </section>
  );
}
