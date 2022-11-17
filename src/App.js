import Header from "./components/Home/HeaderComponent";
import BodyComponent from "./components/Home/BodyComponent";
import Blog from "./components/Common/Blog";
import { BlogContainer } from './commonStyles';

const App = () => {
  return (
    <div>
      <Header />
      <BodyComponent />
      <BlogContainer>
        <Blog />
        <Blog />
        <Blog />
      </BlogContainer>
    </div>
  );
};

export default App;
