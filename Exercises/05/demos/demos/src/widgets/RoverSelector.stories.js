import React from 'react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import RoverSelector from './RoverSelector';
import {rovers, roverSelection} from '../pages/ConnectedRoverSearch';

export default {
  component: RoverSelector,
  title: 'RoverSelector'
};

const props = {
    dateSelected: '2015-6-3',
    roversActive: {
        spirit: true,
        opportunity: true,
        curiosity: true
      },
    rovers,
    roverSelection
};

export const All = () => (
    <RoverSelector {...props} onRoverSelection={action('onRoverSelection')} />
);

export const Partial = () => (
    <RoverSelector {...props} roversActive={{
        spirit: true,
        opportunity: false,
        curiosity: true
      }} roverSelection={{
        spirit: true,
        opportunity: false,
        curiosity: false
      }} onRoverSelection={action('onRoverSelection')} />
);
