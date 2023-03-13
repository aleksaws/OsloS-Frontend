import React from "react";
import { useParams } from "react-router-dom";
import {config} from '../config.js';

import AktivitetOversiktContainer from "../container/AktivitetOversikt.js";
const AktivitetOversikt = () => {
    const {id} = useParams();
    return (
    <>
    <AktivitetOversiktContainer apiurl={config.API_ENDPOINT+ id + "/list/get/"}/>
    </>
    );
  }
  
export default AktivitetOversikt;
  
