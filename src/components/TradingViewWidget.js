import React from 'react';
import TradingViewWidget, { Themes, RangeTypes } from 'react-tradingview-widget'; 

const TVWidgetChart = () => (
  <TradingViewWidget
    widgetType="chart"
    chart="iMZquMdf"
    width={730}
    height={480}
    theme={Themes.LIGHT}
    locale="ja"
  />
);

export { TVWidgetChart };
