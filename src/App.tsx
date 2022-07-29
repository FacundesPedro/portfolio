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
              <div style={{height:'100%',padding:'0 8em' ,display:'flex', alignItems:'center',justifyContent:'center'}}>
                <img width={'30%'} style={{paddingRight:'2em'}} src="https://raw.githubusercontent.com/FacundesPedro/FacundesPedro/main/png_to_gif.gif" alt="Facunde's Pedro GitHub-Icon" />
                <div style={{flex:1}}>
                 {' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dicta quae aut odio magni commodi repudiandae tempora ullam quasi, corporis possimus fugit, placeat natus laboriosam maiores ducimus quo enim. Aut.'}
                </div>              
              </div>
            </SectionWrapper>
            <div className="section">
              <h2>section 2</h2>
            </div>
          </ReactFullpage.Wrapper>
      )}
    />
  
}

export default App
