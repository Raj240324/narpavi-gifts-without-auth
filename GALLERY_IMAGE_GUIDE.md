# Gallery Image Guide

## Recommended Image Sources for Your Gallery

### For Pencil Portraits:
- Use actual photos of your pencil portrait work
- Recommended size: 800x800px minimum
- Format: JPG or PNG
- Categories to showcase:
  - Couple portraits
  - Pet portraits
  - Family portraits
  - Individual portraits
  - Memorial portraits

### For Resin Art:
- Use photos of your actual resin creations
- Recommended size: 800x800px minimum
- Format: JPG or PNG
- Categories to showcase:
  - Ocean wave trays
  - Geode art
  - Coasters
  - Wall clocks
  - Jewelry
  - Keychains
  - Phone stands

### How to Add Images:

1. **Create the gallery folder:**
   ```
   d:\narpavi-gifts\public\gallery\
   ```

2. **Organize by category:**
   ```
   public/gallery/pencil-art/
   public/gallery/resin-art/
   public/gallery/resin-gifts/
   ```

3. **Name your files descriptively:**
   - pencil-couple-portrait-1.jpg
   - resin-ocean-tray-blue.jpg
   - resin-coaster-set-pink.jpg

4. **Update Gallery.tsx to use local images:**
   Replace image URLs like:
   ```tsx
   image: 'https://images.unsplash.com/...'
   ```
   With:
   ```tsx
   image: '/gallery/pencil-art/couple-portrait-1.jpg'
   ```

### Image Quality Tips:
- Use good lighting when photographing your work
- Clean backgrounds (white or neutral)
- Show details and textures
- Include multiple angles for complex pieces
- Ensure images are sharp and in focus

### Free Stock Photo Alternatives (if needed):
- Pexels.com - Search "pencil drawing", "resin art"
- Pixabay.com - Search "portrait sketch", "epoxy resin"
- Unsplash.com - Search "pencil portrait", "resin crafts"
