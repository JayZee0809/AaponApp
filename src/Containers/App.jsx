import CategoryContainer from './Category-Container';
import '../Stylesheets/categories.styles.scss';
import { categories } from "../categories";

const App = () => {
  return (
    <div className="App">
      <CategoryContainer categories={categories}/>
    </div>
  );
}

export default App;
