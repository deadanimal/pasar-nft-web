"use strict";
import { ethers } from 'ethers';

export default {
   install: (app) => {
      app.config.globalProperties.$ethers = ethers
   }
}