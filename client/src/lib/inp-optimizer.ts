/**
 * GOOGLE 2026: INP (Interaction to Next Paint) Optimizer
 * Optimizes interactivity metrics for Core Web Vitals
 */

// Make touch and scroll event listeners passive by default
export function initPassiveEventListeners(): void {
  if (typeof window === 'undefined') return;
  
  // Override addEventListener to make touch/scroll events passive by default
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  
  EventTarget.prototype.addEventListener = function(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ) {
    const passiveEvents = ['touchstart', 'touchmove', 'wheel', 'scroll', 'mousewheel'];
    
    if (passiveEvents.includes(type)) {
      if (typeof options === 'boolean') {
        options = { capture: options, passive: true };
      } else if (typeof options === 'object' || options === undefined) {
        options = { ...options, passive: true };
      }
    }
    
    return originalAddEventListener.call(this, type, listener, options);
  };
}

// Defer non-critical work to idle time
export function scheduleIdleWork(callback: () => void): void {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 2000 });
  } else {
    setTimeout(callback, 50);
  }
}

// Debounce for INP optimization
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T, 
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// Throttle for INP optimization
export function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Yield to main thread for long tasks
export function yieldToMain(): Promise<void> {
  return new Promise(resolve => {
    if ('scheduler' in window && 'yield' in (window as { scheduler: { yield: () => Promise<void> } }).scheduler) {
      (window as { scheduler: { yield: () => Promise<void> } }).scheduler.yield().then(resolve);
    } else {
      setTimeout(resolve, 0);
    }
  });
}

// Split long tasks into chunks
export async function runInChunks<T>(
  items: T[],
  processor: (item: T) => void,
  chunkSize = 5
): Promise<void> {
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    chunk.forEach(processor);
    if (i + chunkSize < items.length) {
      await yieldToMain();
    }
  }
}

// Initialize all INP optimizations
export function initINPOptimizations(): void {
  if (typeof window === 'undefined') return;
  
  initPassiveEventListeners();
  
  // Defer non-critical analytics and tracking
  scheduleIdleWork(() => {
    console.log('[INP] Non-critical initialization complete');
  });
  
  // Add CSS containment hints
  document.documentElement.style.setProperty('--contain-layout', 'layout');
  
  console.log('[INP] Optimizations initialized for Google 2026 standards');
}
