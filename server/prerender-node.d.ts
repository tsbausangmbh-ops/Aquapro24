declare module 'prerender-node' {
  interface PrerenderMiddleware {
    set(key: string, value: any): PrerenderMiddleware;
    (req: any, res: any, next: any): void;
  }
  
  const prerender: PrerenderMiddleware;
  export default prerender;
}
