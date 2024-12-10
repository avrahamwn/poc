import {InputSignal} from '@angular/core';

type InferInputSignalType<T> = T extends InputSignal<infer U> ? U : never;

export type PickInputFromComponent<Component> = {
    [PropertyKey in keyof Component as Component[PropertyKey] extends InputSignal<any> ? PropertyKey : never]: InferInputSignalType<
       Component[PropertyKey]
    >;
};