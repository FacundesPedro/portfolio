import { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage'
import {IApp} from './interfaces';
import { SectionWrapper } from './components/Section';

function App() {
  const sections = useState(1);

  return <ReactFullpage
      licenseKey='123'

      render={
        ({state,fullpageApi}) => (
          <ReactFullpage.Wrapper>
            <SectionWrapper styles={{backgroundColor:'blue'}}>
              <h2>section 1</h2>
            </SectionWrapper>
            <div className="section">
              <h2>section 2</h2>
            </div>
          </ReactFullpage.Wrapper>
      )}
    />
  
}

export default App
