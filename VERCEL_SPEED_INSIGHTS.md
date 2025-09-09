# Vercel Speed Insights Integration

## Overview

Vercel Speed Insights has been integrated into the Nestoria Group website to provide real user monitoring and performance analytics. This integration helps track and improve the website's performance metrics, which are crucial for user experience and SEO.

## Features

- **Real User Monitoring**: Collects actual user experience data rather than synthetic tests
- **Core Web Vitals Tracking**: Monitors important metrics like LCP, FID, CLS, and TTFB
- **Performance Insights**: Provides actionable insights to improve site performance
- **Zero Configuration**: Works automatically without additional setup
- **Minimal Impact**: Lightweight implementation with negligible performance overhead

## Implementation Details

The integration was done by:

1. Installing the package:
   ```
   npm install @vercel/speed-insights --save
   ```

2. Adding the component to `src/main.jsx`:
   ```jsx
   import { SpeedInsights } from '@vercel/speed-insights/react';
   
   // Inside the render method
   <StrictMode>
     <App />
     <SpeedInsights />
   </StrictMode>
   ```

## Accessing Analytics

To view the collected performance data:

1. Log in to your Vercel dashboard
2. Navigate to your project
3. Click on the "Analytics" tab
4. Select "Speed Insights" from the menu

## Benefits

- **Improved User Experience**: Identify and fix performance bottlenecks
- **Better SEO Rankings**: Core Web Vitals are a Google ranking factor
- **Conversion Rate Optimization**: Faster sites typically have higher conversion rates
- **Data-Driven Decisions**: Make improvements based on real user data

## Additional Configuration (Optional)

For more advanced usage, you can configure the SpeedInsights component with options:

```jsx
<SpeedInsights 
  sampleRate={0.5} // Sample 50% of users
  debug={process.env.NODE_ENV === 'development'} // Enable debug mode in development
/>
```

Refer to the [official documentation](https://vercel.com/docs/speed-insights) for more configuration options.