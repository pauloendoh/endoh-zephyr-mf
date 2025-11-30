
    export type RemoteKeys = 'mf-remote/Counter' | 'mf-remote/HomePage';
    type PackageType<T> = T extends 'mf-remote/HomePage' ? typeof import('mf-remote/HomePage') :T extends 'mf-remote/Counter' ? typeof import('mf-remote/Counter') :any;