# LN Local Natural — property landing page

## Publishing to the existing cPanel host

The `dist/` folder contains the complete, ready-to-upload website. It is intentionally included in GitHub. After website changes, regenerate it using the project's build before syncing to GitHub.

1. Download the repository from GitHub using Code → Download ZIP, then extract it.
2. Open the downloaded `dist/` folder.
3. Back up the existing server files before replacing them.
4. Upload the **contents** of `dist/` directly into cPanel's `public_html/`, overwriting matching files. Do not upload the `dist/` folder itself inside `public_html/`.
5. Confirm `public_html/index.html`, `public_html/video-intro.mp4`, `public_html/background.mp3`, all gallery images, and the brochure PDF are present.
6. Keep any existing email, WordPress folders, and server configuration unless your hosting provider advises otherwise. Do not upload the entire repository, hidden files, credentials, or development folders to the public server.
7. Reload the live site without cached content. If the host uses a cache, clear it through the hosting panel.

The intro opens on arrival. Browsers may mute autoplay; visitors can select “Ativar som”. It closes with the X, Escape, a click outside, or when playback ends. Background music is requested only after the intro closes; browsers may require visitors to use the music button.

Media displayed on the page uses relative paths to files shipped with the website, so the preview and the cPanel copy use the same gallery, video, music, and brochure. Search and sharing metadata still points to the production domain.

Publishing to Bolt or syncing GitHub does not upload files to cPanel automatically. The server upload remains a separate step.
