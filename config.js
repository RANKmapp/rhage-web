/* RHAGE configuration.
   Local-first build: no server. All answers are kept on this device (browser
   storage) and can be exported any time from Privacy -> Export my answers.
   To re-enable cloud sync later, fill in a Supabase project:
     window.RHAGE_CFG = { url: 'https://<ref>.supabase.co', key: '<anon key>' }
   (The previous project was retired; ask the team before pointing this at a
   new one, and recreate the rh_get/rh_put/rh_del/rh_list SQL first.) */
window.RHAGE_CFG = { url: null, key: null };
