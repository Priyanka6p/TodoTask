import store from './src/Redux/store';
import { Provider } from "react-redux";
import Routes from './src/navigation/Routes';

export default function App() {
  return (
      <Provider store={store}>
        <Routes/>
      </Provider>
  );
};
