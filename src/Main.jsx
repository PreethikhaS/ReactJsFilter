import React from 'react';
import { ObjectDemo } from './components/ObjectDemo';
import { ArrayDemo } from './components/ArrayDemo';
import { FilterDemo } from './components/FilterDemo';
import { APIDemo } from './components/APIDemo';
export function Main(){
return(
    <div>
    <ObjectDemo></ObjectDemo>
    <ArrayDemo></ArrayDemo>
    <FilterDemo></FilterDemo>
    <APIDemo></APIDemo>
    </div>
    )
}