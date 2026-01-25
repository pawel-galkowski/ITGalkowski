import type { Metric } from 'web-vitals';
import * as webVitals from 'web-vitals';

function sendToAnalytics(metric: Metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics', body);
  } else {
    fetch('/api/analytics', {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      keepalive: true,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      navigationType: metric.navigationType,
    });
  }
}

export function reportWebVitals() {
  // Largest Contentful Paint (LCP)
  // Good: < 2.5s, Needs Improvement: 2.5s - 4s, Poor: > 4s
  webVitals.onLCP(sendToAnalytics);

  // Interaction to Next Paint (INP) - replaces FID
  // Good: < 200ms, Needs Improvement: 200ms - 500ms, Poor: > 500ms
  webVitals.onINP(sendToAnalytics);

  // Cumulative Layout Shift (CLS)
  // Good: < 0.1, Needs Improvement: 0.1 - 0.25, Poor: > 0.25
  webVitals.onCLS(sendToAnalytics);

  // First Contentful Paint (FCP)
  // Good: < 1.8s, Needs Improvement: 1.8s - 3s, Poor: > 3s
  webVitals.onFCP(sendToAnalytics);

  // Time to First Byte (TTFB)
  // Good: < 800ms, Needs Improvement: 800ms - 1800ms, Poor: > 1800ms
  webVitals.onTTFB(sendToAnalytics);
}

export function markPerformance(name: string) {
  if (globalThis.window?.performance) {
    performance.mark(name);
  }
}

export function measurePerformance(name: string, startMark: string, endMark: string) {
  if (globalThis.window?.performance) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      if (measure) {
        console.log(`[Performance] ${name}: ${measure.duration}ms`);
        return measure.duration;
      }
    } catch (error) {
      console.error(`Error measuring performance for ${name}:`, error);
    }
  }
  return 0;
}

export function observeResourceTiming() {
  if (globalThis.window?.PerformanceObserver) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (process.env.NODE_ENV === 'development' && entry.duration > 1000) {
            console.warn(`[Slow Resource] ${entry.name}: ${entry.duration}ms`);
          }
        }
      });
      observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.error('Error setting up resource timing observer:', error);
    }
  }
}

export function observeLongTasks() {
  if (globalThis.window?.PerformanceObserver) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`[Long Task] Duration: ${entry.duration}ms`);
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.error('Error setting up long task observer:', error);
    }
  }
}

export function initPerformanceMonitoring() {
  if (globalThis.window !== undefined) {
    reportWebVitals();
    observeResourceTiming();
    observeLongTasks();
  }
}
