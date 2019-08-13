declare module 'find-free-port' {
  type CallbackType = (error: any, freePort: number) => void;

  function findFreePort(port: number): Promise<number>;
  function findFreePort(portBegin: number, portEnd: number): Promise<number>;
  function findFreePort(portBegin: number, host: string): Promise<number>;
  function findFreePort(portBegin: number, portEnd: number, host: string): Promise<number>;
  function findFreePort(portBegin: number, portEnd: number, host: string, howMany: number): Promise<number[]>;

  function findFreePort(port: number, cb: CallbackType): void;
  function findFreePort(portBegin: number, portEnd: number, cb: CallbackType): void;
  function findFreePort(portBegin: number, host: string, cb: CallbackType): void;
  function findFreePort(portBegin: number, portEnd: number, host: string, cb: CallbackType): void;
  function findFreePort(
    portBegin: number, portEnd: number, host: string, howMany: number, cb: (error: any, ...ports: number[]) => void
  ): void;

  export = findFreePort;
}
