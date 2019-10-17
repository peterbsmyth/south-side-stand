# South Side Stand

## Models

### Advertisement

```ts
interface Advertisement {
  photoURL: string;
  name: string;
  startDate: number; // UNIX Timestamp (see: https://www.unixtimestamp.com)
  endDate: number; // UNIX Timestamp (see: https://www.unixtimestamp.com)
  websiteURL: string;
}
```

### Article

```ts
interface Article {
  header: string;
  subhead: string;
  body: string;
  publicationDate: number; // UNIX Timestamp (see: https://www.unixtimestamp.com)
  author: Person;
  SEOTitle: string;
  SEODescription: string;
  category: Category;
  tags: Tag[];
}
```

### Person

```ts
interace Person {
  type: 'board', 'reporter', 'staff', 'community', 'photographer', 'contributor';
  firstName: string;
  lastName: string;
  photoURL: string;
  description: string;
  social: {
    twitterURL: string;
    linkedinURL: string;
    instagramURL: string;
    facebookURL: string;
  };
}
```

### Photo

```ts
interface Photo {
  caption: string;
  photoURL: string;
  photographer: Person;
}
```

### Category

```ts
interface Category {
  name: string;
  descriptin: string;
}
```


### Tag

```ts
interface Tag {
  name: string;
  descriptin: string;
}
```

### Widget

```ts
interface Widget {
  name: string;
  websiteURL: string;
  photoURL: string;
}
```
