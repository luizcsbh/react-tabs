import { Tab } from './components/Tab';
import './App.css';

const tabContent = [
  {
    title: "Tab 1",
    content: "Tab 1 ativa"
  },
  {
    title: "Tab 2",
    content: "Tab 2 ativa"
  },
  {
    title: "Tab 3",
    content: "Tab 3 ativa"
  }
];

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col text-center">
          <h2>Tab Component</h2>
         
          <div className="row text-center">
            <Tab active={0}>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {tab.content}
                </Tab.TabPane>
              ))}
            </Tab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
