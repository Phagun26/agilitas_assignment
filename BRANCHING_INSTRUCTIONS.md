# Branching Instructions

## Current State
The codebase now contains a mobile-optimized version of the Agilitas website that matches the mobile Figma design.

## To Create Branches as Requested:

### 1. Create Mobile View Branch
```bash
# Create and switch to mobile view branch
git checkout -b mobile-view

# The current code in Index.tsx is already optimized for mobile
# This branch contains the mobile-first responsive design
```

### 2. Create Browser View Branch
```bash
# Go back to main branch
git checkout main

# Create browser view branch from the original desktop code
git checkout -b browser-view

# You would need to restore the original desktop-optimized Index.tsx
# The original desktop version had:
# - Large hero sections (h-[699px])
# - Desktop navigation with full menu
# - Side-by-side layouts
# - Larger typography and spacing
```

## Key Differences Between Branches:

### Mobile View Branch (Current):
- ✅ 375px max-width container
- ✅ Glass navigation card with mobile menu icon
- ✅ Stacked layout for all sections
- ✅ Mobile-optimized image sizes and spacing
- ✅ Touch-friendly interactive elements
- ✅ Smaller typography scales
- ✅ Vertical product grid layout

### Browser View Branch (Needed):
- 🔄 Full-width responsive design
- 🔄 Horizontal navigation with full menu
- 🔄 Multi-column layouts for larger screens
- 🔄 Desktop-optimized image sizes
- 🔄 Larger typography and hero sections
- 🔄 Grid layouts with side-by-side content

## Files Modified for Mobile View:
- `client/pages/Index.tsx` - Complete mobile redesign
- `client/global.css` - Already had proper brand colors
- `tailwind.config.ts` - Already had proper font configurations

## Next Steps:
1. Use git commands shown above to create the branches
2. Keep current mobile code in `mobile-view` branch
3. Restore original desktop code to `browser-view` branch
4. Set up proper responsive breakpoints if you want a unified responsive approach later
