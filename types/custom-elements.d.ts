import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "rr-resnova": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "widget-id"?: string;
        "api-url"?: string;
        [key: string]: any;
      };
    }
  }
}

// For non-React JSX if any
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "rr-resnova": any;
    }
  }
}

export {};
