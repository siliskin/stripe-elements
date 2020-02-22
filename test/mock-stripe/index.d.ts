export function addUserAgentCreditCard(card: any): void;
export function resetUserAgentCreditCards(): void;
export const PUBLISHABLE_KEY: "pk_test_XXXXXXXXXXXXXXXXXXXXXXXX";
export const SHOULD_ERROR_KEY: "SHOULD_ERROR_KEY";
export const TOKEN_ERROR_KEY: "TOKEN_ERROR_KEY";
export const INCOMPLETE_CARD_KEY: "INCOMPLETE_CARD_KEY";
export const CLIENT_SECRET: "CLIENT_SECRET";
export const CARD_CONFIRM_ERROR_SECRET: "CARD_CONFIRM_ERROR_SECRET";
export const SUCCESSFUL_TOKEN: Readonly<{
    id: string;
}>;
export const SUCCESSFUL_SOURCE: Readonly<{
    id: string;
}>;
export const SUCCESSFUL_PAYMENT_METHOD: Readonly<{
    id: string;
}>;
export const SUCCESSFUL_PAYMENT_INTENT: Readonly<{
    id: string;
}>;
export const SUCCESS_RESPONSES: Readonly<{
    paymentMethod: Readonly<{
        id: string;
    }>;
    source: Readonly<{
        id: string;
    }>;
    token: Readonly<{
        id: string;
    }>;
}>;
export const INCOMPLETE_CARD_ERROR: Readonly<{
    type: string;
    code: string;
    message: string;
}>;
export const CARD_DECLINED_ERROR: Readonly<{
    type: string;
    code: string;
    decline_code: string;
    message: string;
}>;
export const NO_CLIENT_SECRET_ERROR: "Cannot confirm a card payment without a client-secret";
export class Stripe {
    constructor(key: any, opts: any);
    key: any;
    opts: any;
    keyError: Error;
    elements({ fonts, locale }?: {
        fonts: any;
        locale: any;
    }): Elements;
    paymentRequest(options: any): PaymentRequest;
    async confirmCardPayment(clientSecret: any, data: any, options: any): Promise<{
        error: Error | Readonly<{
            type: string;
            code: string;
            decline_code: string;
            message: string;
        }>;
        paymentIntent: Readonly<{
            id: string;
        }>;
    }>;
    async createPaymentMethod(paymentMethodData: any): Promise<{
        error: any;
        paymentMethod: Readonly<{
            id: string;
        }>;
    }>;
    async createSource({ error }: {
        error?: Error;
    }, cardData: any): Promise<{
        error: Error;
        source: Readonly<{
            id: string;
        }>;
    }>;
    async createToken({ error }?: {
        error?: Error;
    }, cardData: any): Promise<{
        error: Error;
        token: Readonly<{
            id: string;
        }>;
    }>;
    get userAgentCreditCards(): any[];
}
declare class Elements {
    constructor({ locale, fonts }: {
        locale: any;
        fonts: any;
    });
    locale: any;
    fonts: any;
    create(type: any, { style }?: {
        style: any;
    }): CardElement | PaymentRequestButtonElement;
}
declare class PaymentRequest extends SynthEventTarget {
    constructor(options: any);
    async canMakePayment(): Promise<{
        applePay: boolean;
    }>;
}
declare class CardElement extends Element {
    constructor(type: any, options: any);
    get error(): any;
    setState({ cardNumber, mm, yy, cvc, zip }: {
        cardNumber: any;
        mm: any;
        yy: any;
        cvc: any;
        zip: any;
    }): void;
    complete: boolean;
    empty: boolean;
}
declare class PaymentRequestButtonElement extends Element {
    constructor(type: any, options: any);
}
declare class SynthEventTarget {
    eventTarget: EventTarget;
    listeners: any[];
    synthEvent(type: any, params: any): void;
    addEventListener(type: any, handler: any): void;
    on(type: any, handler: any): void;
}
declare class Element extends SynthEventTarget {
    constructor(type: any, options: any);
    type: any;
    setState(props: any): void;
    mount(node: any): void;
    blur(): void;
    clear(): void;
    destroy(): void;
    focus(): void;
    unmount(): void;
    update(): void;
}
export {};
