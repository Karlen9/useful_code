# Useful Code Examples

A collection of useful code examples and patterns built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern tech stack (Next.js 14, TypeScript, Tailwind CSS)
- App Router architecture
- Type-safe development
- Responsive design
- Well-documented examples

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Run the development server:
   ```bash
   bun run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Examples

### Form Validation

- Location: `/examples/form-validation`
- Demonstrates form handling and validation
- TypeScript interfaces and type safety
- Error handling and display

### Infinite Carousel

- Location: `/examples/infinite-carousel`
- Smooth infinite scrolling carousel implementation
- Customizable animation duration
- Requires Tailwind CSS configuration:
  ```js
  // tailwind.config.js
  extend: {
    keyframes: {
      carousel: {
        to: { transform: 'translateX(-50%)' }
      }
    },
    animation: {
      carousel: "carousel var(--duration, 30s) linear infinite",
    },
  }
  ```
- Usage example:

  ```tsx
  import { Carousel } from "./components/Carousel";

  function MyComponent() {
    return (
      <Carousel>
        <div className="bg-blue-500">Item 1</div>
        <div className="bg-green-500">Item 2</div>
        <div className="bg-red-500">Item 3</div>
      </Carousel>
    );
  }
  ```

### Data Fetching (Coming Soon)

- Location: `/examples/data-fetching`
- Different ways to fetch data in Next.js
- Server and client-side data fetching
- Error handling and loading states

### Authentication (Coming Soon)

- Location: `/examples/auth`
- Basic authentication implementation
- Protected routes
- Session management

## Project Structure

```
useful-code/
├── app/
│   ├── examples/
│   │   ├── form-validation/
│   │   │   ├── components/
│   │   │   ├── page.tsx
│   │   │   └── README.md
│   │   ├── data-fetching/
│   │   └── auth/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── public/
└── styles/
```

## Contributing

Feel free to contribute by adding new examples or improving existing ones. Each example should:

1. Have its own route under `/examples`
2. Include a README.md with documentation
3. Be type-safe and follow best practices
4. Include clear comments and explanations

## License

MIT
