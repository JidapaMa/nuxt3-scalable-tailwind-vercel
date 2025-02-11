// .d.ts -> interface, typechecking -> ไม่มีการ build, complie
// .ts -> มีการ build, complie ไปเป็น .js

// define type of post for typescript wordpress rest api
export interface Post {
    id: number;
    date: string;
    title: {
        rendered: string;
    };
    slug: string;
    excerpt: {
        rendered: string;
    };
    link: string;
    author: number;
    _embedded: any;
    content: {
        rendered: string;
    };
}