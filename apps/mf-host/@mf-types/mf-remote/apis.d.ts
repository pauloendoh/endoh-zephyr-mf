
    export type RemoteKeys = 'mf-remote/Counter';
    type PackageType<T> = T extends 'mf-remote/Counter' ? typeof import('mf-remote/Counter') :any;