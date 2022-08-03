import { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage'
import {IApp} from './interfaces';
import { SectionWrapper } from './components/SectionWrapper';
import { NintendoSwitch } from './components/NintendoSwitch';

function App() {

  return <ReactFullpage
      licenseKey='123'

      render={
        ({state,fullpageApi}) => (
          <ReactFullpage.Wrapper>
            <SectionWrapper styles={{backgroundColor:'#ffe042',padding:'20px'}}>
              <div className='headerContainer' style={{height:'2em',backgroundColor:'#d9c9D9',display:'flex',justifyContent:'flex-end',alignItems:'center',borderRadius:'10px 10px 0 0',border:'1px solid #444'}}>
                <div style={{margin:'0 10px'}}><strong>Facundes-PC</strong><strong>:</strong><strong>/home</strong></div>
                <div className="actionButtonsContainer" style={{display:'flex',width:'5em',justifyContent:'space-evenly'}}>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                   <div className="closeBtn" style={{height:'15px',width:'15px' ,backgroundColor:'red',borderRadius:'50%',border:'1px solid #000',cursor:'pointer'}}></div>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                    <div className="maxBtn" style={{height:'15px',width:'15px' ,backgroundColor:'yellow',borderRadius:'50%',border:'1px solid #000',cursor:'pointer'}}></div>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                    <div className="minBtn" style={{height:'15px',width:'15px' ,backgroundColor:'green',borderRadius:'50%',border:'1px solid #000',cursor:'pointer'}}></div>
                  </div>
                </div>
              </div>
              <div className='terminal' style={{flexGrow:1,padding:'2px 5px',background:'#333',border:'solid #444',borderWidth:'0 1px 1px 1px'}}>
                <div className="inputContainer" style={{color:'red'}} >
                  <div className="metaInfo" style={{display:'inline'}} ><strong>Facundes-PC</strong><strong>:</strong><strong>/home</strong></div>
                  <input style={{height:'100%'}} type="text" />
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper>
              <NintendoSwitch />
            </SectionWrapper>
          </ReactFullpage.Wrapper>
      )}
    />
  
}

export default App
