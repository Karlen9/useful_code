# Carousel Example

This example demonstrates how to create a smooth, infinite carousel component using React and TypeScript. The carousel features automatic sliding, manual navigation, and a seamless infinite scroll effect.

## Features

- Infinite scroll effect with smooth transitions
- Automatic sliding with configurable interval
- Manual navigation with previous/next buttons
- Responsive design
- TypeScript interfaces for type safety
- Tailwind CSS for styling

## Required Configuration

Before using the Carousel component, you need to add the following configuration to your `tailwind.config.js`:

```js
module.exports = {
  // ... other config
  theme: {
    extend: {
      keyframes: {
        carousel: {
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        carousel: "carousel var(--duration, 30s) linear infinite",
      },
    },
  },
};
```

This configuration:

- Defines a `carousel` keyframe animation that moves content horizontally
- Sets up an animation utility class that can be customized with `--duration` CSS variable
- Default duration is 30 seconds if not specified

## Implementation Details

### Key Concepts

1. **Infinite Scroll Effect**

   - Creates a tripled array of items to enable seamless looping
   - Handles edge cases by resetting position when reaching the end
   - Uses CSS transforms for smooth animations

2. **State Management**

   - Tracks current index and transition state
   - Uses React hooks for state and side effects
   - Implements cleanup for intervals

3. **Accessibility**
   - Includes ARIA labels for navigation buttons
   - Keyboard navigation support
   - Semantic HTML structure

### Code Structure

- `Carousel.tsx`: Main component with carousel logic
- `page.tsx`: Example page implementation
- Tailwind CSS for styling

## Usage

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

## Best Practices

- Uses CSS transforms for better performance
- Implements proper cleanup in useEffect
- Handles edge cases for infinite scroll
- Provides smooth transitions
- Maintains type safety with TypeScript
- Follows React best practices for state management
