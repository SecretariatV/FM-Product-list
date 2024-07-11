import GlobalStyles from "@styles/globalStyles";
import MainPage from "@pages/main";
import Modal from "@components/modal";
import { AppContext } from "@machines/appMachine";

const App = () => {
  const state = AppContext.useSelector((state) => state);

  return (
    <>
      <GlobalStyles />
      <MainPage />
      {state.context.openModal && <Modal />}
    </>
  );
};

export default App;
