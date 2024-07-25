import { StatusBar } from 'expo-status-bar';
import { Navigation } from './scr/navigations'
import React from 'react';

export default function App() {
  return (
    <>
    <Navigation />
    <StatusBar style="auto"/>
    </>
  );
}