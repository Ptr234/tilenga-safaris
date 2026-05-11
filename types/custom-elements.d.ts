declare global {
  namespace JSX {
    interface IntrinsicElements {
      "rr-resnova": {
        "widget-id"?: string;
        "api-url"?: string;
        [key: string]: any;
      };
    }
  }
}

export {};
