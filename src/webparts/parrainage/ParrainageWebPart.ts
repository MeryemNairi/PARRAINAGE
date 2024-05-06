import * as React from 'react';
import * as ReactDom from 'react-dom';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import Parrainage from './components/Parrainage';
import { IParrainageProps } from './components/IParrainageProps';

export interface IParrainageWebPartProps {
  description: string;
}

export default class ParrainageWebPart extends BaseClientSideWebPart<IParrainageWebPartProps> {



  public render(): void {
    const element: React.ReactElement<IParrainageProps> = React.createElement(
      Parrainage,
    
    );

    ReactDom.render(element, this.domElement);
  }

 
}
