
    export type RemoteKeys = 'mf-remote/Counter' | 'mf-remote/TodoPage';
    type PackageType<T> = T extends 'mf-remote/TodoPage' ? typeof import('mf-remote/TodoPage') :T extends 'mf-remote/Counter' ? typeof import('mf-remote/Counter') :any;