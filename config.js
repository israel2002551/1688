const SB_URL = "https://obzhlmzswthnorkiqemh.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iemhsbXpzd3Robm9ya2lxZW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMDE2NjgsImV4cCI6MjA4ODY3NzY2OH0.5I4Ln0913h0AH5z4e64QBVx88igcIwEaM0Lz11FqDvU";
const EDGE_URL = `${SB_URL}/functions/v1`;
const CLAUDE_EDGE_URL = `${EDGE_URL}/smooth-handler`;

window.APP_CONFIG = {
  SB_URL,
  SB_KEY,
  EDGE_URL,
  CLAUDE_EDGE_URL,
  supabase: {
    url: SB_URL,
    anonKey: SB_KEY
  }
};
