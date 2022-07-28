import { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage'
import {IApp} from './interfaces';

function App() {
  const sections = useState(1);

  return <ReactFullpage
      licenseKey='123'

      render={
        ({state,fullpageApi}) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h2>section 1</h2>
            </div>
            <div className="section">
              <h2>section 2</h2>
            </div>
          </ReactFullpage.Wrapper>
      )}
    />
  
}

export default App
