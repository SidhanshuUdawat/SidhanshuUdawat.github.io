# Chat Like Gen Z production-candidate wording checklist

As of 8 October 2026, versionCode 17 is published on Google Play Internal testing.
The production-capable purchase and reward backend is active, and the owner reports
that final manual tests passed and has approved submission for review. Production
submission has not happened; the app is not publicly available. The privacy and
data-deletion pages describe the candidate's behavior without promising public access.

- [x] Update those two pages to remove obsolete test-only billing and live-disabled ad claims while stating the current Internal track and no production submission.
- [x] Confirm the candidate's guest wallet starts with 10 free conversions; Google sign-in is required before checkout and supports saved-wallet recovery. Google Play supplies localized prices for 100, 200 and 300-conversion consumable packs. Registered license testers may use Play test instruments.
- [x] Confirm optional rewarded ads grant three conversions only after signed server verification, with no extra grant for a skipped or failed ad or a repeated callback. Owned-unit test rewards and callback replay were verified earlier; the owner reports the final candidate tests passed.
- [x] Preserve the existing Settings → Account → Delete account & data path, support-request verification, seven-day content expiry with possible cleanup delay, 180-day minimized transaction records, 90-day deletion receipt, and 30/400-day Cloud Logging retention.
- [x] European UMP message published for this app; the current-region no-form-required flow was verified. The app exposes Ad privacy choices when a form is required and available.
- [x] Document private background Play recovery/refund processing, including up to seven days of transient unacknowledged Pub/Sub notifications.
- [ ] Verify EEA consent/refusal/privacy-options reopening and applicable US-state messaging for the production candidate. Do not imply every regional consent setup is verified.
- [ ] Confirm AdMob app/listing readiness, app-ads.txt recognition and remaining Console privacy configuration before wider availability.
- [ ] Verify reviewer account access and save accurate credentials/instructions privately in Play Console App access. The app repository's rollout checklist records this as pending.
- [ ] Complete and verify Play Console declarations, Data safety, account-deletion URL, RTDN test delivery and purchase/refund recovery for the intended release. No Console submission is implied by this website edit.
- [ ] Submit the intended production release through Play Console and confirm review/publication state. The first submission has not occurred; availability will depend on approved tracks and regions.
- [ ] Once a public build is actually available, update the current-availability statements. Check the separate product page too: it still describes monetization as test-only and was outside this wording-only edit.
- [ ] Confirm **Report result** is present in the eventual public build before removing the privacy policy's version qualification. It is present in the current candidate code and was verified in an earlier Internal build.
