# Infinite Carousel Example

This example demonstrates how to create a smooth, infinite carousel component using React and TypeScript. The carousel features automatic sliding, manual navigation, and a seamless infinite scroll effect.

## Features

- Infinite scroll effect with smooth transitions
- Automatic sliding with configurable interval
- Manual navigation with previous/next buttons
- Responsive design
- TypeScript interfaces for type safety
- Tailwind CSS for styling

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

- `InfiniteCarousel.tsx`: Main component with carousel logic
- `page.tsx`: Example page implementation
- TypeScript interfaces for props and items
- Tailwind CSS for styling

## Usage

```tsx
import { InfiniteCarousel } from "./components/InfiniteCarousel";

const items = [
  { id: 1, title: "Item 1", color: "bg-blue-500" },
  { id: 2, title: "Item 2", color: "bg-green-500" },
  // ... more items
];

function MyComponent() {
  return <InfiniteCarousel items={items} />;
}
```

## Props

| Prop  | Type           | Description               |
| ----- | -------------- | ------------------------- |
| items | CarouselItem[] | Array of items to display |

## Best Practices

- Uses CSS transforms for better performance
- Implements proper cleanup in useEffect
- Handles edge cases for infinite scroll
- Provides smooth transitions
- Maintains type safety with TypeScript
- Follows React best practices for state management
