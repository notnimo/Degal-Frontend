import * as React from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'
import homeIcon from './assets/home_icon.png'

function Tab(props)
{
  return (
    <>
      <div className='spacer'></div>
      <div className={props.className}>{props.children}</div>
    </>
  ); 
  //<div className={props.className}>{props.children}</div>;
}

function Label(props)
{
  return <div className={props.className}>{props.children}</div>;
}

function TabButtons(props)
{
  let tabs = [];
  let labels = [];
  let header = [];

  let isSelected = (tab) => props.tab == tab;

  props.elements.forEach(element => {
    if(element.type == Tab)
    {
      tabs.push(element);
    } else if(element.type == Label)
    {
      labels.push(element);
    } else
    {
      header.push(element);
    }
  });

  let findLabel = (label) => {
    let result = <></>;
    labels.forEach((labelElem) => {
      if(labelElem.props.label == label)
      {
        result = labelElem;
      }
    })
    return result;
  }

  React.useEffect(() => {
    let isInViewport = element => {
      var rect = element.getBoundingClientRect();
      var html = document.documentElement;
      return (
        rect.top + 200 >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
      );
    }

    tabs.forEach(tab => {
      window.addEventListener('scroll', e => {
        if(isInViewport(document.getElementById(tab.props.label))) {
          props.setTab(tab.props.label);
        }
      }) 
    })
  }, []);

  let labelMap = {};
  tabs.forEach(tab => labelMap[tab.props.label] = findLabel(tab.props.label));

  let buttonList = tabs.map(
    child => <a href={'#'+child.props.label} className={isSelected(child.props.label) ? props.selectedButtonClass : props.buttonClass} key={child.props.label}>{labelMap[child.props.label]}</a>
  );

  return(
    <>
      <div className={props.containerClass}>
        {buttonList}
      </div>
      {header}
    </>
  );
}

function RenderTabs(props) {
  let tabs = [];

  props.elements.forEach(element => {
    if(element.type == Tab)
    {
      tabs.push(element);
    }
    return;
  });

  return <>{
    tabs.map(child => {
      return <div id={child.props.label} className={props.className} style={{flexDirection: 'column'}}>{child}</div>;
    })
  }</>;
};

function TabMenu(props)
{
  let [tab, setTab] = React.useState(props.intialTab);
  
  return (
    <>
      <TabButtons elements={props.children} tab={tab} setTab={setTab} buttonClass={props.buttonClass} selectedButtonClass={props.selectedButtonClass} containerClass={props.menuClass} />
      <RenderTabs elements={props.children} className={props.contentClass} />
    </>
  );
}

function App()
{
  return (
    <>
      <div id='overlay'></div>
      <TabMenu intialTab='tab1' buttonClass='button' selectedButtonClass='button selected' menuClass='menu' contentClass='content'>
        <Label label='tab1'>
          <img src={homeIcon} style={{height: '50px', width: '50px'}}/>
        </Label>
        <Tab label='tab1'>
          <div id='logo' className='glow'></div>
        </Tab>

        <Label label='tab2'>
          Chi siamo
        </Label>
        <Tab label='tab2' className='tab'>
          <h1>Chi siamo</h1>
        </Tab>

        <Label label='tab3'>
          F1 in schools
        </Label>
        <Tab label='tab3' className='tab'>
          <h1>Tab3</h1>
        </Tab>

        <Label label='tab4'>
          I nostri sponsor
        </Label>
        <Tab label='tab4'className='tab'>
          <h1>Tab4</h1>
        </Tab>

        <Label label='tab5'>
          I nostri sponsor
        </Label>
        <Tab label='tab5'className='tab'>
          <h1>Tab5</h1>
        </Tab>

        <Label label='tab6'>
          I nostri sponsor
        </Label>
        <Tab label='tab6'className='tab'>
          <h1>Tab6</h1>
        </Tab>
      </TabMenu>
    </>
  );
}

createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <App />
    <div className='spacer'></div>
 </React.StrictMode>
);

setTimeout(() => {
  document.getElementById('overlay').style.display = 'none';
}, 3000)