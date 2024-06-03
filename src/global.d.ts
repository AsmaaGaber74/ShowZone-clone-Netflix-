declare var  paypal:any
declare global {
    interface Window {
      paypalLoaded: () => void;
    }
  }