// Type declarations for importing CSS/SASS files in TypeScript
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// For CSS Modules (when using `*.module.css` etc.) provide a typed mapping
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
// Allow importing plain JSON via `import en from './en.json'` (already allowed by tsconfig, but keep safe)
declare module '*.json' {
  const value: any;
  export default value;
}
