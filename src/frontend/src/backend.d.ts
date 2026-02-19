import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Greeting {
    message: string;
}
export interface backendInterface {
    concatenateMessage(message: string, sender: string): Promise<Greeting>;
    double_(x: bigint): Promise<bigint>;
    getGreeting(greeting: Greeting): Promise<string>;
}
