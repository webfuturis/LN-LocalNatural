# Project memory

## Product intent & audience

- Web page featuring a welcome video modal on arrival.
- UI text in Portuguese (e.g., "Ativar som"), indicating a Portuguese-speaking audience.

## Brand personality & voice

- Tone: welcoming and media-forward; front-loaded video experience on first visit.

## Visual design & UX direction

- Modal opens on page load, video fills most of the screen.
- Close mechanisms: X button, click outside video, Escape key, auto-close on video end.
- Autoplay handled silently due to browser policies; "Ativar som" button shown to enable sound.
- Background music starts only after the video modal closes (staggered, not simultaneous).

## Decisions, constraints & rationale

- Video file: ~17 MB MP4, valid and acceptable size.
- Page has reverted to earlier versions during development; re-added modal after rollback.
- Background music deferred until modal close to avoid competing audio with the video.

## Open questions & assumptions

- Cannot verify runtime playback in preview; user must reload to confirm behavior.
- Assumes background music and video should not overlap; unconfirmed whether this is the desired long-term behavior.
- No `.bolt/prompt` present; all context inferred from this turn only.