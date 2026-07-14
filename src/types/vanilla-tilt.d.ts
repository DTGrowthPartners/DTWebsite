declare module 'vanilla-tilt' {
  interface TiltOptions {
    max?: number;
    speed?: number;
    glare?: boolean;
    'max-glare'?: number;
    scale?: number;
    gyroscopeMinAngleX?: number;
    gyroscopeMaxAngleX?: number;
    gyroscopeMinAngleY?: number;
    gyroscopeMaxAngleY?: number;
  }

  interface VanillaTilt {
    init(element: HTMLElement, options?: TiltOptions): void;
    destroy(): void;
  }

  const VanillaTilt: {
    init(element: HTMLElement, options?: TiltOptions): VanillaTilt;
  };

  export default VanillaTilt;
}