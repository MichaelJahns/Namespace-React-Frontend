import React from 'react';
import CampaignFocus from '../campaigns/CampaignFocus';
import CampaignStream from '../campaigns/CampaignStream';

export default function CampaignView() {
  return (
    <React.Fragment>
      <CampaignStream />
      <CampaignFocus />
    </React.Fragment>
  );
}

