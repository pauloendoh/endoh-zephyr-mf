
    export type RemoteKeys = 'mf-remote/TodoPage';
    type PackageType<T> = T extends 'mf-remote/TodoPage' ? typeof import('mf-remote/TodoPage') :any;