# Chat Like Gen Z public-release wording checklist

Before a public release, verify the app and its live configuration, then review
the privacy and data-deletion pages. Do not replace test-only wording with
production claims until the corresponding item is confirmed.

- [ ] Confirm public availability on Google Play and update the current-availability statements.
- [ ] Confirm whether live purchases are available and revise test-purchase wording accordingly.
- [x] Owned-unit test rewards verified on Pixel: 395 → 398 → 401; duplicate signed callback replay adds nothing. Live public ads remain disabled.
- [ ] Verify early-close/failure and decide live-ad availability before public wording changes.
- [x] European UMP message published for Chat Like Gen Z; current-region no-form-required flow verified.
- [ ] Verify EEA consent/refusal/privacy-options and applicable US-state behavior.
- [ ] Recheck claims that depend on phone testing, including ad completion and any new app feature being distributed. Confirm that **Report result** is present in the released build before removing its version qualification. Play Internal v10 includes the button and its repeat-report behavior was phone-verified. Keep the version qualification until a public build includes it.

- [x] Document private background Play recovery/refund processing, including up to seven days of transient unacknowledged Pub/Sub notifications.
