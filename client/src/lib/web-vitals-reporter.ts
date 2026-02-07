import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

interface VitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

function sendToAnalytics(metric: VitalMetric) {
  const body = JSON.stringify({
    name: metric.name,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    rating: metric.rating,
    delta: Math.round(metric.delta),
    id: metric.id,
    page: window.location.pathname,
    timestamp: Date.now()
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/web-vitals', body);
  }
}

export function initWebVitalsReporting(): void {
  try {
    onCLS((metric) => sendToAnalytics(metric as unknown as VitalMetric));
    onINP((metric) => sendToAnalytics(metric as unknown as VitalMetric));
    onLCP((metric) => sendToAnalytics(metric as unknown as VitalMetric));
    onFCP((metric) => sendToAnalytics(metric as unknown as VitalMetric));
    onTTFB((metric) => sendToAnalytics(metric as unknown as VitalMetric));
  } catch (e) {
    // silently fail
  }
}
