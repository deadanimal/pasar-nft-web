"use strict";
import { ethers } from 'ethers';

export default {
   install: (app, options) => {            
      app.config.globalProperties.$ethers = ethers
   }
}