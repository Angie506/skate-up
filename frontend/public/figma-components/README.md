Drop your licensed welcome image here so the app shows it in the welcome card.

Place a file named `welcome.png` at:

frontend/public/figma-components/welcome.png

The app (and `FigmaFrame`) will use `/figma-components/welcome.png` as the default welcome image. If you add the file while the dev server is running you may need to hard-refresh the browser or restart the dev server.

Example copy command (run from the repo root):

```bash
# replace /path/to/photo.jpg with your local file
cp "/path/to/photo.jpg" "frontend/public/figma-components/welcome.png"
```

If you'd rather use a different filename, update `FigmaFrame.jsx`'s `DEFAULT_SRC` accordingly.
