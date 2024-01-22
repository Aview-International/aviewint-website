import React from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
const Billing = () => {
  return (
    <div>
      <Settings_Back_Button title="Billing" />
      <p>Billing</p>
    </div>
  );
};

Billing.getLayout = SettingsLayout;
export default Billing;
